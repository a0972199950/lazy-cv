"use client";

import { Download } from "lucide-react";
import { ReactNode } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const dynamic = 'force-static';

interface DownloadPDFLayoutProps {
  children: ReactNode;
}

export default function DownloadPDFLayout({
  children,
}: DownloadPDFLayoutProps) {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <TooltipProvider>
      <div className="relative min-h-screen bg-linear-to-b from-slate-50 via-white to-sky-50/30">
        {children}

        {/* PDF 下載按鈕 - 固定在右下角 */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleDownloadPDF}
              className="print:hidden fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full border border-cyan-200 bg-linear-to-br from-cyan-600 to-emerald-600 text-white shadow-lg ring-2 ring-cyan-100/60 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              aria-label="下載為 PDF"
            >
              <Download className="size-6" />
            </button>
          </TooltipTrigger>
          <TooltipContent
            side="left"
            className="border-slate-200 bg-white text-slate-700 shadow-md"
          >
            下載為 PDF
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}