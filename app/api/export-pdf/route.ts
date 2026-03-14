import { chromium, Page } from 'playwright'
import { PDFDocument } from 'pdf-lib'
import db from '@/lib/db'
import {resumes} from '@/lib/db/schemas'
import { eq } from 'drizzle-orm'

const autoScroll = async (page: Page) => {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 200;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve(null);
        }
      }, 300);
    });
  });
}

interface ProgressEvent {
  step: number;
  total: number;
  message: string;
  file?: string;
  fileName?: string
}

export async function POST(req: Request) {
  console.log('--- API 開始執行 ---')
  const { url } = await req.json() as { url: string };
  const urlParts = url.split('/')
  const uuid = urlParts[urlParts.length - 2]
  const locale = urlParts[urlParts.length - 1]

  let company = null
  try {
    const [record] = await db
      .select({ company: resumes.company })
      .from(resumes)
      .where(eq(resumes.id, uuid))
      .limit(1)
      
    company = record.company
  } catch (err) {
    console.log(err)
  }

  // 驗證 URL 為同源，防止 SSRF
  const allowedHosts = ['lazy-cv.com', 'staging.lazy-cv.com', 'localhost'];
  const targetUrl = new URL(url);
  if (!allowedHosts.includes(targetUrl.hostname)) {
    return new Response(JSON.stringify({ error: 'Invalid URL' }), { status: 400 });
  }

  const encoder = new TextEncoder();
  const TOTAL = 6;

  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: ProgressEvent) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
      };

      try {
        // Step 1: 啟動瀏覽器
        send({ step: 1, total: TOTAL, message: 'launching_browser' });
        console.log('[PDF] Step 1: 啟動瀏覽器');
        console.log('[PDF] ENV:', { NODE_ENV: process.env.NODE_ENV, PLAYWRIGHT_BROWSERS_PATH: process.env.PLAYWRIGHT_BROWSERS_PATH });

        const chromiumConfig = process.env.NODE_ENV === 'production'
          ? {
            headless: true,
            args: [
              '--no-sandbox',
              '--disable-setuid-sandbox',
              '--disable-dev-shm-usage',
              '--single-process',        
              '--no-zygote',
              '--disable-gpu',
            ],
          }
          : { headless: false };
        console.log('[PDF] Chromium config:', JSON.stringify(chromiumConfig));
        const browser = await chromium.launch(chromiumConfig);
        console.log('[PDF] Step 1: 瀏覽器已啟動');
        const context = await browser.newContext({ deviceScaleFactor: 1 });
        const page = await context.newPage();
        console.log('[PDF] Step 1: Page 已建立');

        // Step 2: 前往目標網頁
        send({ step: 2, total: TOTAL, message: 'navigating' });
        console.log('[PDF] Step 2: 前往目標網頁:', url);
        await page.goto(url, { waitUntil: 'networkidle' });
        console.log('[PDF] Step 2: 頁面載入完成');
        await page.setViewportSize({ width: 1280, height: 1080 });

        // Step 3: 自動滾動 + 停用動畫
        send({ step: 3, total: TOTAL, message: 'loading_content' });
        console.log('[PDF] Step 3: 自動滾動 & 停用動畫');
        await autoScroll(page);
        console.log('[PDF] Step 3: 滾動完成');
        await page.emulateMedia({ media: 'screen' });
        await page.addStyleTag({
          content: `
            *, *::before, *::after {
              transition: none !important;
              animation: none !important;
              opacity: 1 !important;
              filter: none !important;
            }
            body {
              overflow-x: hidden !important;
            }
          `
        });
        await page.waitForLoadState('networkidle');
        console.log('[PDF] Step 3: networkidle');
        await page.waitForTimeout(3000);
        console.log('[PDF] Step 3: 等待 3s 完成');
        await page.addStyleTag({ content: `#download-pdf-btn { display: none !important; }` });
        // 移除 Next.js devtools（shadow DOM 元素，CSS 無法穿透）
        await page.evaluate(() => {
          document.querySelectorAll('nextjs-portal, [data-nextjs-dialog], [data-nextjs-toast]').forEach(el => el.remove());
        });
        console.log('[PDF] Step 3: DOM 清理完成');

        // Step 4: 全頁截圖
        send({ step: 4, total: TOTAL, message: 'capturing' });
        console.log('[PDF] Step 4: 全頁截圖');
        const screenshotBuffer = await page.screenshot({ fullPage: true, type: 'png' });
        console.log('[PDF] Step 4: 截圖大小:', (screenshotBuffer.length / 1024 / 1024).toFixed(2), 'MB');

        // Step 5: 截圖轉 PDF（使用 pdf-lib，不需要開第二個 browser page）
        send({ step: 5, total: TOTAL, message: 'converting' });
        console.log('[PDF] Step 5: 關閉瀏覽器');
        await browser.close();
        console.log('[PDF] Step 5: 瀏覽器已關閉，開始生成 PDF');

        const pdfDoc = await PDFDocument.create();
        const pngImage = await pdfDoc.embedPng(screenshotBuffer);
        console.log('[PDF] Step 5: PNG 已嵌入，尺寸:', pngImage.width, 'x', pngImage.height);
        const { width: imgW, height: imgH } = pngImage.scale(1);
        const pdfPage = pdfDoc.addPage([imgW, imgH]);
        pdfPage.drawImage(pngImage, { x: 0, y: 0, width: imgW, height: imgH });
        const pdfBuffer = Buffer.from(await pdfDoc.save());
        console.log('[PDF] Step 5: PDF 大小:', (pdfBuffer.length / 1024 / 1024).toFixed(2), 'MB');

        // Step 6: 完成，回傳 PDF base64
        const fileName = `John-Hsieh_CV${company ? `_${company}` : ''}_${locale}.pdf`
        console.log('[PDF] Step 6: fileName:', fileName, ', base64 長度:', pdfBuffer.toString('base64').length);
        send({ step: 6, total: TOTAL, message: 'done', file: pdfBuffer.toString('base64'), fileName});
        console.log('[PDF] Step 6: 完成，串流結束');
      } catch (err) {
        console.error('[PDF] 錯誤:', err);
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: String(err) })}\n\n`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
