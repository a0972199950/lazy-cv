"use client";

import { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

/* ───── 小圓圈節點 ───── */
function Node({
  className,
  children,
  ref,
}: {
  className?: string;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm whitespace-nowrap",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ───── 中心節點 ───── */
function CenterNode({
  children,
  className,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-xl border-2 px-4 py-2 text-sm font-bold shadow-md whitespace-nowrap",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ───── 容器樣式 ───── */
const wrapCls =
  "relative flex items-center justify-between gap-4 overflow-hidden rounded-xl border border-slate-200 bg-white/80 p-5 sm:gap-8 sm:p-7";

/* ═══════════════════════════════════════════════
   1. 前端 JS 框架與工具 (14 skills)
   ═══════════════════════════════════════════════ */
function FrontendJSBeam({ locale = "zh-TW" }: { locale?: string }) {
  const ctr = useRef<HTMLDivElement>(null);
  const cen = useRef<HTMLDivElement>(null);
  const l0 = useRef<HTMLDivElement>(null);
  const l1 = useRef<HTMLDivElement>(null);
  const l2 = useRef<HTMLDivElement>(null);
  const l3 = useRef<HTMLDivElement>(null);
  const l4 = useRef<HTMLDivElement>(null);
  const l5 = useRef<HTMLDivElement>(null);
  const l6 = useRef<HTMLDivElement>(null);
  const r0 = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);
  const r4 = useRef<HTMLDivElement>(null);
  const r5 = useRef<HTMLDivElement>(null);
  const r6 = useRef<HTMLDivElement>(null);

  return (
    <div ref={ctr} className={wrapCls}>
      <div className="flex flex-col items-end gap-2">
        <Node ref={l0}>TypeScript</Node>
        <Node ref={l1}>React</Node>
        <Node ref={l2}>NextJS</Node>
        <Node ref={l3}>Vue</Node>
        <Node ref={l4}>NuxtJS</Node>
        <Node ref={l5}>GraphQL</Node>
        <Node ref={l6}>Socket.io</Node>
      </div>
      <CenterNode ref={cen} className="border-cyan-300 bg-cyan-50 text-cyan-800">
        {locale === "en" ? "Frontend JS Frameworks & Tools" : "前端 JS 框架與工具"}
      </CenterNode>
      <div className="flex flex-col items-start gap-2">
        <Node ref={r0}>Jest</Node>
        <Node ref={r1}>Cypress</Node>
        <Node ref={r2}>Webpack</Node>
        <Node ref={r3}>Storybook</Node>
        <Node ref={r4}>Firebase</Node>
        <Node ref={r5}>i18n</Node>
        <Node ref={r6}>Lodash</Node>
      </div>
      {/* left → center */}
      <AnimatedBeam containerRef={ctr} fromRef={l0} toRef={cen} curvature={-30} duration={4} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={ctr} fromRef={l1} toRef={cen} curvature={-20} duration={4.5} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={ctr} fromRef={l2} toRef={cen} curvature={-10} duration={5} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={ctr} fromRef={l3} toRef={cen} curvature={0} duration={5.5} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={ctr} fromRef={l4} toRef={cen} curvature={10} duration={4.2} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={ctr} fromRef={l5} toRef={cen} curvature={20} duration={4.8} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={ctr} fromRef={l6} toRef={cen} curvature={30} duration={5.2} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      {/* center → right */}
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r0} curvature={-30} duration={4} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r1} curvature={-20} duration={4.5} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r2} curvature={-10} duration={5} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r3} curvature={0} duration={5.5} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r4} curvature={10} duration={4.2} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r5} curvature={20} duration={4.8} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r6} curvature={30} duration={5.2} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   2. 前端 CSS 框架 & Library (9 skills)
   ═══════════════════════════════════════════════ */
function CSSBeam({ locale = "zh-TW" }: { locale?: string }) {
  const ctr = useRef<HTMLDivElement>(null);
  const cen = useRef<HTMLDivElement>(null);
  const l0 = useRef<HTMLDivElement>(null);
  const l1 = useRef<HTMLDivElement>(null);
  const l2 = useRef<HTMLDivElement>(null);
  const l3 = useRef<HTMLDivElement>(null);
  const l4 = useRef<HTMLDivElement>(null);
  const r0 = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  const r3 = useRef<HTMLDivElement>(null);

  return (
    <div ref={ctr} className={wrapCls}>
      <div className="flex flex-col items-end gap-2">
        <Node ref={l0}>Sass / Scss</Node>
        <Node ref={l1}>TailwindCSS</Node>
        <Node ref={l2}>Bootstrap</Node>
        <Node ref={l3}>ElementUI</Node>
        <Node ref={l4}>Buefy</Node>
      </div>
      <CenterNode ref={cen} className="border-pink-300 bg-pink-50 text-pink-800">
        {locale === "en" ? "CSS Frameworks & Libraries" : "前端 CSS 框架"}
      </CenterNode>
      <div className="flex flex-col items-start gap-2">
        <Node ref={r0}>Vuetify</Node>
        <Node ref={r1}>BEM</Node>
        <Node ref={r2}>CSS Variable</Node>
        <Node ref={r3}>Media Query</Node>
      </div>
      <AnimatedBeam containerRef={ctr} fromRef={l0} toRef={cen} curvature={-20} duration={4} gradientStartColor="#ec4899" gradientStopColor="#a855f7" />
      <AnimatedBeam containerRef={ctr} fromRef={l1} toRef={cen} curvature={-10} duration={4.5} gradientStartColor="#ec4899" gradientStopColor="#a855f7" />
      <AnimatedBeam containerRef={ctr} fromRef={l2} toRef={cen} curvature={0} duration={5} gradientStartColor="#ec4899" gradientStopColor="#a855f7" />
      <AnimatedBeam containerRef={ctr} fromRef={l3} toRef={cen} curvature={10} duration={5.5} gradientStartColor="#ec4899" gradientStopColor="#a855f7" />
      <AnimatedBeam containerRef={ctr} fromRef={l4} toRef={cen} curvature={20} duration={4.2} gradientStartColor="#ec4899" gradientStopColor="#a855f7" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r0} curvature={-15} duration={4} gradientStartColor="#ec4899" gradientStopColor="#a855f7" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r1} curvature={-5} duration={4.5} gradientStartColor="#ec4899" gradientStopColor="#a855f7" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r2} curvature={5} duration={5} gradientStartColor="#ec4899" gradientStopColor="#a855f7" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r3} curvature={15} duration={5.5} gradientStartColor="#ec4899" gradientStopColor="#a855f7" />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   3. PWA (6 skills)
   ═══════════════════════════════════════════════ */
function PWABeam({ locale = "zh-TW" }: { locale?: string }) {
  const ctr = useRef<HTMLDivElement>(null);
  const cen = useRef<HTMLDivElement>(null);
  const l0 = useRef<HTMLDivElement>(null);
  const l1 = useRef<HTMLDivElement>(null);
  const l2 = useRef<HTMLDivElement>(null);
  const r0 = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);

  return (
    <div ref={ctr} className={wrapCls}>
      <div className="flex flex-col items-end gap-2">
        <Node ref={l0}>Service Worker</Node>
        <Node ref={l1}>Workbox</Node>
        <Node ref={l2}>web-push</Node>
      </div>
      <CenterNode ref={cen} className="border-amber-300 bg-amber-50 text-amber-800">
        PWA
      </CenterNode>
      <div className="flex flex-col items-start gap-2">
        <Node ref={r0}>IndexedDB</Node>
        <Node ref={r1}>Cache Storage</Node>
        <Node ref={r2}>Navigator API</Node>
      </div>
      <AnimatedBeam containerRef={ctr} fromRef={l0} toRef={cen} curvature={-15} duration={4} gradientStartColor="#f59e0b" gradientStopColor="#ef4444" />
      <AnimatedBeam containerRef={ctr} fromRef={l1} toRef={cen} curvature={0} duration={4.5} gradientStartColor="#f59e0b" gradientStopColor="#ef4444" />
      <AnimatedBeam containerRef={ctr} fromRef={l2} toRef={cen} curvature={15} duration={5} gradientStartColor="#f59e0b" gradientStopColor="#ef4444" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r0} curvature={-15} duration={4} gradientStartColor="#f59e0b" gradientStopColor="#ef4444" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r1} curvature={0} duration={4.5} gradientStartColor="#f59e0b" gradientStopColor="#ef4444" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r2} curvature={15} duration={5} gradientStartColor="#f59e0b" gradientStopColor="#ef4444" />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   4. 前端微服務 & Web Component (4 skills)
   ═══════════════════════════════════════════════ */
function WebComponentBeam({ locale = "zh-TW" }: { locale?: string }) {
  const ctr = useRef<HTMLDivElement>(null);
  const cen = useRef<HTMLDivElement>(null);
  const l0 = useRef<HTMLDivElement>(null);
  const l1 = useRef<HTMLDivElement>(null);
  const r0 = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);

  return (
    <div ref={ctr} className={wrapCls}>
      <div className="flex flex-col items-end gap-2">
        <Node ref={l0}>Shadow DOM</Node>
        <Node ref={l1}>StencilJS</Node>
      </div>
      <CenterNode ref={cen} className="border-emerald-300 bg-emerald-50 text-emerald-800">
        {locale === "en" ? "Micro Frontend & Web Component" : "微服務 & Web Component"}
      </CenterNode>
      <div className="flex flex-col items-start gap-2">
        <Node ref={r0}>Web Socket</Node>
        <Node ref={r1}>Quill</Node>
      </div>
      <AnimatedBeam containerRef={ctr} fromRef={l0} toRef={cen} curvature={-10} duration={4} gradientStartColor="#10b981" gradientStopColor="#06b6d4" />
      <AnimatedBeam containerRef={ctr} fromRef={l1} toRef={cen} curvature={10} duration={4.5} gradientStartColor="#10b981" gradientStopColor="#06b6d4" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r0} curvature={-10} duration={4} gradientStartColor="#10b981" gradientStopColor="#06b6d4" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r1} curvature={10} duration={4.5} gradientStartColor="#10b981" gradientStopColor="#06b6d4" />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   5. 後端框架 & 資料庫 (7 skills)
   ═══════════════════════════════════════════════ */
function BackendBeam({ locale = "zh-TW" }: { locale?: string }) {
  const ctr = useRef<HTMLDivElement>(null);
  const cen = useRef<HTMLDivElement>(null);
  const l0 = useRef<HTMLDivElement>(null);
  const l1 = useRef<HTMLDivElement>(null);
  const l2 = useRef<HTMLDivElement>(null);
  const l3 = useRef<HTMLDivElement>(null);
  const r0 = useRef<HTMLDivElement>(null);
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);

  return (
    <div ref={ctr} className={wrapCls}>
      <div className="flex flex-col items-end gap-2">
        <Node ref={l0}>Express</Node>
        <Node ref={l1}>Socket.io</Node>
        <Node ref={l2}>MongoDB</Node>
        <Node ref={l3}>Mongoose</Node>
      </div>
      <CenterNode ref={cen} className="border-indigo-300 bg-indigo-50 text-indigo-800">
        {locale === "en" ? "Backend & Databases" : "後端框架 & 資料庫"}
      </CenterNode>
      <div className="flex flex-col items-start gap-2">
        <Node ref={r0}>EJS</Node>
        <Node ref={r1}>Swagger</Node>
        <Node ref={r2}>GraphQL</Node>
      </div>
      <AnimatedBeam containerRef={ctr} fromRef={l0} toRef={cen} curvature={-20} duration={4} gradientStartColor="#6366f1" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={ctr} fromRef={l1} toRef={cen} curvature={-5} duration={4.5} gradientStartColor="#6366f1" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={ctr} fromRef={l2} toRef={cen} curvature={5} duration={5} gradientStartColor="#6366f1" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={ctr} fromRef={l3} toRef={cen} curvature={20} duration={5.5} gradientStartColor="#6366f1" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r0} curvature={-15} duration={4} gradientStartColor="#6366f1" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r1} curvature={0} duration={4.5} gradientStartColor="#6366f1" gradientStopColor="#8b5cf6" />
      <AnimatedBeam containerRef={ctr} fromRef={cen} toRef={r2} curvature={15} duration={5} gradientStartColor="#6366f1" gradientStopColor="#8b5cf6" />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   匯出：5 個分類合在一起
   ═══════════════════════════════════════════════ */
export function SkillBeams() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <FrontendJSBeam />
      <CSSBeam />
      <PWABeam />
      <WebComponentBeam />
      <BackendBeam />
    </div>
  );
}

export { FrontendJSBeam, CSSBeam, PWABeam, WebComponentBeam, BackendBeam };
