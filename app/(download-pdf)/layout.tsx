"use client";

import { Camera, FileText, LayoutTemplate, Loader2, Table2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TooltipProvider } from "@/components/ui/tooltip";

export const dynamic = 'force-static';

const isDev = process.env.NODE_ENV !== 'production';

const stepMessages = {
  'en': {
    launching_browser: 'Launching browser...',
    navigating: 'Loading page...',
    loading_content: 'Loading content & disabling animations...',
    capturing: 'Capturing full-page screenshot...',
    converting: 'Converting to PDF...',
    done: 'Done!',
  },
  'zh-TW': {
    launching_browser: '啟動瀏覽器...',
    navigating: '載入頁面...',
    loading_content: '載入內容 & 停用動畫...',
    capturing: '全頁截圖中...',
    converting: '轉換為 PDF...',
    done: '完成！',
  },
  'ja': {
    launching_browser: 'ブラウザを起動中...',
    navigating: 'ページを読み込み中...',
    loading_content: 'コンテンツを読み込み中...',
    capturing: 'スクリーンショットを撮影中...',
    converting: 'PDF に変換中...',
    done: '完了！',
  },
} as const;

const i18n = {
  'en': {
    pdfAriaLabel: 'Download PDF',
    webModeLabel: 'Web Layout Mode',
    webModeHint: 'Keeps the on-screen design, in color',
    plainModeLabel: 'Plain Table Mode',
    plainModeHint: 'Black & white, text only — ATS friendly',
    screenshotModeLabel: 'Long Screenshot',
    screenshotModeHint: 'Full-page image PDF (local only)',
  },
  'zh-TW': {
    pdfAriaLabel: '下載 PDF',
    webModeLabel: '網頁排版模式',
    webModeHint: '保留畫面上的設計與配色',
    plainModeLabel: '純表格模式',
    plainModeHint: '全黑白、只有文字，ATS 友善',
    screenshotModeLabel: '長截圖模式',
    screenshotModeHint: '整頁圖片 PDF（僅本地）',
  },
  'ja': {
    pdfAriaLabel: 'PDF をダウンロード',
    webModeLabel: 'Web レイアウトモード',
    webModeHint: '画面上のデザインと配色をそのまま出力',
    plainModeLabel: 'プレーンテーブルモード',
    plainModeHint: '白黒・テキストのみ、ATS 対応',
    screenshotModeLabel: 'ロングスクリーンショット',
    screenshotModeHint: '全ページ画像 PDF（ローカルのみ）',
  },
} as const;

type Locale = keyof typeof i18n;
type StepMessageKey = keyof typeof stepMessages['en'];

function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const last = segments[segments.length - 1];
  if (last && last in i18n) return last as Locale;
  return 'en';
}

interface Progress {
  step: number;
  total: number;
  message: StepMessageKey;
}

interface CompleteEvent extends Progress {
  file?: string; // base64 PDF content
  fileName?: string
  error?: string
}

interface DownloadPDFLayoutProps {
  children: ReactNode;
}

export default function DownloadPDFLayout({
  children,
}: DownloadPDFLayoutProps) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<Progress | null>(null);
  // 只有本人登入時才顯示排版模式選單；其他訪客一律直接下載簡易模式 PDF
  const [isAdmin, setIsAdmin] = useState(false);

  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = i18n[locale];
  const steps = stepMessages[locale];

  useEffect(() => {
    fetch('/api/session')
      .then((res) => res.json())
      .then((data: { isAdmin: boolean }) => setIsAdmin(data.isAdmin))
      .catch(() => setIsAdmin(false));
  }, []);

  const handleLongScreenshot = async () => {
    if (loading) return;
    setLoading(true);
    setProgress(null);

    try {
      const response = await fetch('/api/export-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: location.href }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`HTTP ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data: ')) continue;
          const data = JSON.parse(trimmed.slice(6)) as CompleteEvent;

          if (data.error) throw new Error(data.error);

          setProgress({ step: data.step, total: data.total, message: data.message });

          if (data.file) {
            const byteChars = atob(data.file);
            const byteNumbers = new Uint8Array(byteChars.length);
            for (let i = 0; i < byteChars.length; i++) {
              byteNumbers[i] = byteChars.charCodeAt(i);
            }
            const blob = new Blob([byteNumbers], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = data.fileName || 'resume.pdf';
            a.click();
            setTimeout(() => URL.revokeObjectURL(url), 5000);
          }
        }
      }
    } catch (err) {
      console.error('長截圖 PDF 產生失敗:', err);
      alert('Failed to generate long-screenshot PDF.');
    } finally {
      setLoading(false);
      setProgress(null);
    }
  };

  // 透過瀏覽器原生列印產生可搜尋的 PDF；使用者在對話框選 "Save as PDF" 即可下載。
  // plain 模式在 <html> 掛上 data-print-mode="plain"，由 globals.css 換成純表格排版。
  const handleDownloadPDF = (mode: 'web' | 'plain') => {
    const root = document.documentElement;

    if (mode === 'plain') {
      root.dataset.printMode = 'plain';
      const cleanup = () => {
        delete root.dataset.printMode;
        window.removeEventListener('afterprint', cleanup);
      };
      window.addEventListener('afterprint', cleanup);
    } else {
      delete root.dataset.printMode;
    }

    // 等下拉選單收起、樣式套用完成後再開列印對話框
    requestAnimationFrame(() => window.print());
  };

  const pct = progress ? Math.round((progress.step / progress.total) * 100) : 0;

  return (
    <TooltipProvider>
      <div className="relative min-h-screen bg-linear-to-b from-slate-50 via-white to-sky-50/30">
        {children}

        {/* Loading 遮罩 + 進度條 */}
        {loading && (
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="flex w-80 flex-col items-center gap-5 rounded-2xl border border-white/20 bg-white/90 px-10 py-8 shadow-2xl">
              <Loader2 className="size-8 animate-spin text-cyan-600" />

              {/* 進度條 */}
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                  <span>{progress ? `${progress.step} / ${progress.total}` : '...'}</span>
                  <span>{pct}%</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-cyan-500 to-emerald-500 transition-all duration-500 ease-out"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>

              {/* 步驟訊息 */}
              <p className="text-center text-sm font-medium text-slate-700">
                {progress ? steps[progress.message] : steps.launching_browser}
              </p>
            </div>
          </div>
        )}

        {/* 浮動按鈕群 - 固定在右下角 */}
        <div
          id="download-pdf-actions"
          className="print:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* 下載 PDF - 永遠顯示；只有本人登入才看得到排版模式選單，其他訪客直接下載簡易模式 */}
          {isAdmin ? (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button
                  id="download-pdf-btn"
                  disabled={loading}
                  className="cursor-pointer flex size-14 items-center justify-center rounded-full border border-cyan-200 bg-linear-to-br from-cyan-600 to-emerald-600 text-white shadow-lg ring-2 ring-cyan-100/60 transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100"
                  aria-label={t.pdfAriaLabel}
                >
                  <FileText className="size-6" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="left"
                align="end"
                className="w-64 border-slate-200 bg-white text-slate-700 shadow-lg"
              >
                <DropdownMenuItem
                  onSelect={() => handleDownloadPDF('web')}
                  className="cursor-pointer items-start gap-3 py-2.5"
                >
                  <LayoutTemplate className="mt-0.5 size-4 text-cyan-700" />
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-slate-900">{t.webModeLabel}</span>
                    <span className="text-xs text-slate-500">{t.webModeHint}</span>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => handleDownloadPDF('plain')}
                  className="cursor-pointer items-start gap-3 py-2.5"
                >
                  <Table2 className="mt-0.5 size-4 text-slate-700" />
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-slate-900">{t.plainModeLabel}</span>
                    <span className="text-xs text-slate-500">{t.plainModeHint}</span>
                  </span>
                </DropdownMenuItem>
                {isDev && (
                  <DropdownMenuItem
                    id="long-screenshot-btn"
                    onSelect={handleLongScreenshot}
                    className="cursor-pointer items-start gap-3 py-2.5"
                  >
                    <Camera className="mt-0.5 size-4 text-slate-700" />
                    <span className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-slate-900">{t.screenshotModeLabel}</span>
                      <span className="text-xs text-slate-500">{t.screenshotModeHint}</span>
                    </span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <button
              id="download-pdf-btn"
              onClick={() => handleDownloadPDF('plain')}
              disabled={loading}
              className="cursor-pointer flex size-14 items-center justify-center rounded-full border border-cyan-200 bg-linear-to-br from-cyan-600 to-emerald-600 text-white shadow-lg ring-2 ring-cyan-100/60 transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100"
              aria-label={t.pdfAriaLabel}
            >
              <FileText className="size-6" />
            </button>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}