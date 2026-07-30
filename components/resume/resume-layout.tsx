import { Children, isValidElement, type ReactElement, type ReactNode } from "react";

import {
  TooltipProvider,
} from "@/components/ui/tooltip";

import { EducationCerts } from "./education-certs";
import { HeroProfile } from "./hero-profile";
import { LanguageToggle } from "./language-toggle";
import { PlainResume, type PlainResumeData } from "./plain-resume";
import { ProjectsGrid } from "./projects-grid";
import { SkillKeywords } from "./skill-keywords";
import { WorkExperience } from "./work-experience";

function propsOf<T>(element: ReactElement) {
  return element.props as T;
}

/**
 * 走訪 children 的 element 樹，依元件型別取出各區塊的 props，組成純表格模式所需的資料。
 * 這樣個別履歷頁面（page.tsx）不必再多宣告一份給純表格版使用的資料。
 */
function collectPlainResumeData(children: ReactNode): PlainResumeData {
  const data: PlainResumeData = { locale: "en" };

  const visit = (node: ReactNode) => {
    Children.forEach(node, (child) => {
      if (!isValidElement(child)) return;

      if (child.type === LanguageToggle) {
        data.locale = propsOf<{ currentLocale: string }>(child).currentLocale;
      } else if (child.type === HeroProfile) {
        data.profile = propsOf<NonNullable<PlainResumeData["profile"]>>(child);
      } else if (child.type === WorkExperience) {
        data.work = propsOf<NonNullable<PlainResumeData["work"]>>(child);
      } else if (child.type === ProjectsGrid) {
        data.projects = propsOf<NonNullable<PlainResumeData["projects"]>>(child);
      } else if (child.type === SkillKeywords) {
        data.skills = propsOf<NonNullable<PlainResumeData["skills"]>>(child);
      } else if (child.type === EducationCerts) {
        data.education = propsOf<NonNullable<PlainResumeData["education"]>>(child);
      } else {
        // 未知元件（Fragment、包裝用 div、TechStackVisualization 等）往下找
        visit(propsOf<{ children?: ReactNode }>(child).children);
      }
    });
  };

  visit(children);
  return data;
}

export function ResumeLayout({ children }: { children: React.ReactNode }) {
  const plainResumeData = collectPlainResumeData(children);

  return (
    <TooltipProvider>
      <main id="resume-main" className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-50 via-white to-sky-50/30 text-slate-900">
        {/* background decorations */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.15),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.10),transparent_42%)]" />
        <div className="pointer-events-none absolute -left-20 top-32 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-48 h-52 w-52 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-[60%] h-64 w-64 -translate-x-1/2 rounded-full bg-sky-200/25 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 md:px-8 md:py-14">
          {children}
        </div>
      </main>

      {/* 純表格模式：平時 display:none，只在 data-print-mode="plain" 的列印中出現 */}
      <PlainResume data={plainResumeData} />
    </TooltipProvider>
  );
}
