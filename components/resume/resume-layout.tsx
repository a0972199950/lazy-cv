import {
  TooltipProvider,
} from "@/components/ui/tooltip";

export function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <main className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-50 via-white to-sky-50/30 text-slate-900">
        {/* background decorations */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.15),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.10),transparent_42%)]" />
        <div className="pointer-events-none absolute -left-20 top-32 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-48 h-52 w-52 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-[60%] h-64 w-64 -translate-x-1/2 rounded-full bg-sky-200/25 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 md:px-8 md:py-14">
          {children}
        </div>
      </main>
    </TooltipProvider>
  );
}
