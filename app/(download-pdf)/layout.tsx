"use client";

import { Camera, FileText, LayoutTemplate, Loader2, Table2, X } from "lucide-react";
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
    downloadPromptTitle: 'Download PDF Resume',
    downloadPromptDesc: 'Click the button below to download this resume as a PDF (plain table, ATS-friendly).',
    downloadPromptButton: 'Download PDF',
    downloadPromptClose: 'Close',
  },
  'zh-TW': {
    pdfAriaLabel: '下載 PDF',
    webModeLabel: '網頁排版模式',
    webModeHint: '保留畫面上的設計與配色',
    plainModeLabel: '純表格模式',
    plainModeHint: '全黑白、只有文字，ATS 友善',
    screenshotModeLabel: '長截圖模式',
    screenshotModeHint: '整頁圖片 PDF（僅本地）',
    downloadPromptTitle: '下載 PDF 履歷',
    downloadPromptDesc: '點擊下方按鈕，將這份履歷下載為 PDF（純表格、ATS 友善）。',
    downloadPromptButton: '下載 PDF',
    downloadPromptClose: '關閉',
  },
  'ja': {
    pdfAriaLabel: 'PDF をダウンロード',
    webModeLabel: 'Web レイアウトモード',
    webModeHint: '画面上のデザインと配色をそのまま出力',
    plainModeLabel: 'プレーンテーブルモード',
    plainModeHint: '白黒・テキストのみ、ATS 対応',
    screenshotModeLabel: 'ロングスクリーンショット',
    screenshotModeHint: '全ページ画像 PDF（ローカルのみ）',
    downloadPromptTitle: 'PDF 履歴書をダウンロード',
    downloadPromptDesc: '下のボタンをクリックすると、この履歴書を PDF（プレーンテーブル、ATS 対応）としてダウンロードできます。',
    downloadPromptButton: 'PDF をダウンロード',
    downloadPromptClose: '閉じる',
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

// 瀏覽器「另存為 PDF」的預設檔名取自 document.title，這裡把它轉成安全的檔名字串
const sanitizeFileName = (str: string) =>
  str
    .replace(/[|@—–]/g, '-')
    .replace(/[\\/:*?"<>]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

const printModeSuffix: Record<'web' | 'plain', string> = {
  web: 'Web',
  plain: 'ATS',
};

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
  // 網址帶 ?query=download-pdf 時，預設彈出下載提示 modal
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);

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

  // 依網址上的 query 參數決定是否顯示下載提示 modal（同時處理上一頁／下一頁）
  useEffect(() => {
    const sync = () => {
      const params = new URLSearchParams(window.location.search);
      setShowDownloadPrompt(params.get('query') === 'download-pdf');
    };
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  // 關閉 modal 時，順手把 ?query=download-pdf 從網址移除（不重新導頁）
  const closeDownloadPrompt = () => {
    setShowDownloadPrompt(false);
    const url = new URL(window.location.href);
    if (url.searchParams.has('query')) {
      url.searchParams.delete('query');
      window.history.replaceState(null, '', url.pathname + url.search + url.hash);
    }
  };

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
  // 瀏覽器另存 PDF 的預設檔名取自 document.title，印之前暫時改成含模式標籤的檔名，印完再還原。
  const handleDownloadPDF = (mode: 'web' | 'plain') => {
    const root = document.documentElement;
    const originalTitle = document.title;
    document.title = `${sanitizeFileName(originalTitle)}_${printModeSuffix[mode]}_${locale}`;

    if (mode === 'plain') {
      root.dataset.printMode = 'plain';
    } else {
      delete root.dataset.printMode;
    }

    const cleanup = () => {
      delete root.dataset.printMode;
      document.title = originalTitle;
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);

    // 等下拉選單收起、樣式套用完成後再開列印對話框
    requestAnimationFrame(() => window.print());
  };

  const pct = progress ? Math.round((progress.step / progress.total) * 100) : 0;

  return (
    <TooltipProvider>
      <div className="relative min-h-screen bg-linear-to-b from-slate-50 via-white to-sky-50/30">
        {children}

        {/* 下載提示 modal - 網址帶 ?query=download-pdf 時彈出，點空白處或 X 關閉並移除 query */}
        {showDownloadPrompt && (
          <div
            className="print:hidden fixed inset-0 z-100 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            onClick={closeDownloadPrompt}
          >
            <div
              className="relative flex w-full max-w-sm flex-col items-center gap-5 rounded-2xl border border-white/20 bg-white/95 px-8 py-9 text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeDownloadPrompt}
                className="absolute right-3 top-3 flex size-8 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                aria-label={t.downloadPromptClose}
              >
                <X className="size-5" />
              </button>

              <span className="flex size-12 items-center justify-center rounded-full bg-linear-to-br from-cyan-600 to-emerald-600 text-white">
                <FileText className="size-6" />
              </span>

              <div className="flex flex-col gap-1.5">
                <h2 className="text-lg font-semibold text-slate-900">{t.downloadPromptTitle}</h2>
                <p className="text-sm text-slate-500">{t.downloadPromptDesc}</p>
              </div>

              <button
                onClick={() => {
                  closeDownloadPrompt();
                  handleDownloadPDF('plain');
                }}
                disabled={loading}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-br from-cyan-600 to-emerald-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100"
              >
                <FileText className="size-4" />
                {t.downloadPromptButton}
              </button>
            </div>
          </div>
        )}

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