import { chromium, Page } from 'playwright'
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
  const reqUrl = new URL(req.url);
  const targetUrl = new URL(url);
  if (targetUrl.origin !== reqUrl.origin) {
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
        const browser = await chromium.launch({
          headless: false,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const context = await browser.newContext({ deviceScaleFactor: 1.5 });
        const page = await context.newPage();

        // Step 2: 前往目標網頁
        send({ step: 2, total: TOTAL, message: 'navigating' });
        console.log('[PDF] Step 2: 前往目標網頁:', url);
        await page.goto(url, { waitUntil: 'networkidle' });
        await page.setViewportSize({ width: 1280, height: 1080 });

        // Step 3: 自動滾動 + 停用動畫
        send({ step: 3, total: TOTAL, message: 'loading_content' });
        console.log('[PDF] Step 3: 自動滾動 & 停用動畫');
        await autoScroll(page);
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
        await page.waitForTimeout(3000);
        await page.addStyleTag({ content: `#download-pdf-btn { display: none !important; }` });
        // 移除 Next.js devtools（shadow DOM 元素，CSS 無法穿透）
        await page.evaluate(() => {
          document.querySelectorAll('nextjs-portal, [data-nextjs-dialog], [data-nextjs-toast]').forEach(el => el.remove());
        });

        // Step 4: 全頁截圖
        send({ step: 4, total: TOTAL, message: 'capturing' });
        console.log('[PDF] Step 4: 全頁截圖');
        const screenshotBuffer = await page.screenshot({ fullPage: true, type: 'png' });
        console.log('[PDF] Step 4: 截圖大小:', (screenshotBuffer.length / 1024 / 1024).toFixed(2), 'MB');

        // Step 5: 截圖轉 PDF
        send({ step: 5, total: TOTAL, message: 'converting' });
        console.log('[PDF] Step 5: 截圖嵌入 PDF');
        const base64Img = screenshotBuffer.toString('base64');
        const pdfPage = await browser.newPage();
        const imgSize = await pdfPage.evaluate((b64) => {
          return new Promise<{ w: number; h: number }>((resolve) => {
            const img = new Image();
            img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
            img.src = 'data:image/png;base64,' + b64;
          });
        }, base64Img);

        const pdfWidthIn = imgSize.w / 96;
        const pdfHeightIn = imgSize.h / 96;

        await pdfPage.setContent(`<!DOCTYPE html>
<html><head><style>
  * { margin: 0; padding: 0; }
  @page { size: ${pdfWidthIn}in ${pdfHeightIn}in; margin: 0; }
  body, html { width: ${imgSize.w}px; height: ${imgSize.h}px; }
  img { width: 100%; height: 100%; display: block; }
</style></head><body>
  <img src="data:image/png;base64,${base64Img}" />
</body></html>`, { waitUntil: 'load' });

        await pdfPage.waitForTimeout(500);
        const pdfBuffer = await pdfPage.pdf({
          width: `${pdfWidthIn}in`,
          height: `${pdfHeightIn}in`,
          printBackground: true,
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
        });
        console.log('[PDF] Step 5: PDF 大小:', (pdfBuffer.length / 1024 / 1024).toFixed(2), 'MB');

        await browser.close();

        // Step 6: 完成，回傳 PDF base64
        const fileName = `John-Hsieh_CV${company ? `_${company}` : ''}_${locale}.pdf`
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
