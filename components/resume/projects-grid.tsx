"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Building2, ChevronDown, FolderKanban, Sparkles, Trophy, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import type { Project } from "./types";

/** Parse **bold** markers in a string into <strong> React elements */
function parseBold(text: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-slate-800">{part}</strong> : part
  );
}

type ProjectsGridProps = {
  title: string;
  description: string;
  projects: Project[];
  highlightsLabel?: string;
  contributionsLabel?: string;
  personalProjectsLabel?: string;
  companyProjectsLabel?: string;
  /** Maps an Experience.company value to its logo URL, for the company-project badge. */
  companyLogos?: Record<string, string>;
};

export function ProjectsGrid({
  title,
  description,
  projects,
  highlightsLabel = "Technical Highlights",
  contributionsLabel = "Key Contributions",
  personalProjectsLabel = "Personal Projects",
  companyProjectsLabel = "Company Projects",
  companyLogos = {},
}: ProjectsGridProps) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const personalProjects = projects.filter((p) => !p.company);
  const companyProjects = projects.filter((p) => p.company);

  const renderCard = (project: Project) => {
    const images = Array.isArray(project.image) ? project.image : [project.image];
    const companyLogo = project.company ? companyLogos[project.company] : undefined;

    return (
      <MagicCard
        key={project.name}
        className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm [contain:content]"
        gradientColor={project.company ? "#e2e8f0" : "#e0f2fe"}
        gradientOpacity={0.4}
        gradientFrom={project.company ? "#64748b" : "#06b6d4"}
        gradientTo={project.company ? "#1e293b" : "#10b981"}
      >
        <div className="flex flex-col sm:flex-row items-start">
          {/* project image carousel — full width on mobile (image on top), pinned to the left with fixed width from sm+, top-aligned so collapsible animations don't reposition it */}
          <div className="relative aspect-4/3 w-full shrink-0 grow-0 overflow-hidden bg-linear-to-br from-slate-100 to-sky-50 sm:w-56 sm:basis-56 md:w-64 md:basis-64">
            {images.length > 1 ? (
              <Carousel className="h-full w-full" opts={{ loop: true }}>
                <CarouselContent className="ml-0 h-full">
                  {images.map((src, idx) => (
                    <CarouselItem key={idx} className="pl-0">
                      <div
                        className="relative aspect-4/3 w-full cursor-zoom-in"
                        onClick={() => setLightbox({ src, alt: `${project.name} - ${idx + 1}` })}
                      >
                        <Image
                          src={src}
                          alt={`${project.name} - ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 224px, 256px"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1 size-6 border-white/60 bg-white/80 backdrop-blur-sm" />
                <CarouselNext className="right-1 size-6 border-white/60 bg-white/80 backdrop-blur-sm" />
              </Carousel>
            ) : (
              <div
                className="relative aspect-4/3 w-full cursor-zoom-in"
                onClick={() => setLightbox({ src: images[0], alt: project.name })}
              >
                <Image
                  src={images[0]}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 224px, 256px"
                />
              </div>
            )}
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
            <div>
              {project.company && (
                <span className="mb-1.5 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 py-0.5 pr-2.5 pl-0.5 text-xs font-medium text-slate-700">
                  <span className="relative flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
                    {companyLogo ? (
                      <Image src={companyLogo} alt={project.company} fill className="object-contain p-0.5" sizes="20px" />
                    ) : (
                      <Building2 className="size-3 text-slate-500" />
                    )}
                  </span>
                  {project.company}
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-700 transition-colors"
                  >
                    {project.name} ↗
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">
                {project.summary}
              </p>
            </div>
            {project.contributions && project.contributions.length > 0 && (
              <Collapsible className="rounded-lg border border-amber-100 bg-amber-50/40">
                <CollapsibleTrigger className="group/contrib flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm font-semibold text-amber-800 cursor-pointer">
                  <span className="flex items-center gap-1.5">
                    <Trophy className="size-4" />
                    {contributionsLabel}
                  </span>
                  <ChevronDown className="size-4 shrink-0 transition-transform group-aria-expanded/contrib:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden data-open:animate-collapsible-down data-closed:animate-collapsible-up">
                  <div className="px-3 pb-2.5">
                    <ul className="list-disc space-y-1 pl-4">
                      {project.contributions.map((c, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed text-slate-600"
                        >{parseBold(c)}</li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )}
            {project.highlights && project.highlights.length > 0 && (
              <Collapsible className="rounded-lg border border-cyan-100 bg-cyan-50/40">
                <CollapsibleTrigger className="group/highlight flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-sm font-semibold text-cyan-800 cursor-pointer">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="size-4" />
                    {highlightsLabel}
                  </span>
                  <ChevronDown className="size-4 shrink-0 transition-transform group-aria-expanded/highlight:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden data-open:animate-collapsible-down data-closed:animate-collapsible-up">
                  <div className="px-3 pb-2.5">
                    <ul className="list-disc space-y-1 pl-4">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="text-sm leading-relaxed text-slate-600">{h}</li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )}
            <div className="mt-auto flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge
                  key={`${project.name}-${tech}`}
                  variant="secondary"
                  className="bg-slate-100 px-2 py-0.5 text-xs leading-4 text-slate-600"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </MagicCard>
    );
  };

  const renderPrintCard = (project: Project) => {
    const firstImage = Array.isArray(project.image) ? project.image[0] : project.image;
    const companyLogo = project.company ? companyLogos[project.company] : undefined;
    return (
      <div key={project.name} className="flex flex-row items-start gap-3 rounded-lg border border-slate-200 p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={firstImage}
          alt={project.name}
          className="aspect-4/3 w-28 shrink-0 rounded border border-slate-200 object-cover"
        />
        <div className="min-w-0 flex-1 space-y-2">
          <div>
            {project.company && (
              <span className="mb-1 inline-flex items-center gap-1 text-[10px] font-medium text-slate-600">
                {companyLogo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={companyLogo} alt={project.company} className="size-3.5 shrink-0 rounded-full border border-slate-200 object-contain" />
                )}
                {project.company}
              </span>
            )}
            <h3 className="text-sm font-semibold text-slate-900">
              {project.url ? (
                <a href={project.url} className="text-cyan-700">
                  {project.name} ↗
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
              {project.summary}
            </p>
          </div>
          {project.contributions && project.contributions.length > 0 && (
            <div data-print-highlight className="rounded-md border border-amber-200 bg-amber-50 px-2 py-1.5">
              <p className="mb-1 flex items-center gap-1 text-[11px] font-semibold text-amber-800">
                <Trophy className="size-3" />
                {contributionsLabel}
              </p>
              <ul className="list-disc space-y-0.5 pl-4">
                {project.contributions.map((c, i) => (
                  <li key={i} className="text-[11px] leading-relaxed text-slate-600">{parseBold(c)}</li>
                ))}
              </ul>
            </div>
          )}
          {project.highlights && project.highlights.length > 0 && (
            <div data-print-highlight className="rounded-md border border-cyan-200 bg-cyan-50 px-2 py-1.5">
              <p className="mb-1 flex items-center gap-1 text-[11px] font-semibold text-cyan-800">
                <Sparkles className="size-3" />
                {highlightsLabel}
              </p>
              <ul className="list-disc space-y-0.5 pl-4">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-[11px] leading-relaxed text-slate-600">{h}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-wrap gap-0.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-slate-200 px-1 py-0 text-[8px] leading-4 text-slate-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* ── 一般顯示版（有特效）── */}
      <BlurFade delay={0.3} inView className="print:hidden">
      <Card className="border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md">
        <CardHeader>
          <CardTitle className="inline-flex items-center gap-2 text-xl text-slate-900 md:text-2xl">
            <FolderKanban className="size-5 text-cyan-700" />
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-10">
          {personalProjects.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5 border-b-2 border-cyan-200 pb-2.5">
                <span className="flex size-7 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                  <User className="size-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900">{personalProjectsLabel}</h3>
                <span className="text-xs font-medium text-slate-400">({personalProjects.length})</span>
              </div>
              <div className="flex flex-col gap-4">
                {personalProjects.map(renderCard)}
              </div>
            </div>
          )}
          {companyProjects.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5 border-b-2 border-slate-300 pb-2.5">
                <span className="flex size-7 items-center justify-center rounded-lg bg-slate-200 text-slate-700">
                  <Building2 className="size-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900">{companyProjectsLabel}</h3>
                <span className="text-xs font-medium text-slate-400">({companyProjects.length})</span>
              </div>
              <div className="flex flex-col gap-4">
                {companyProjects.map(renderCard)}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Lightbox modal */}
      <Dialog open={!!lightbox} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-[90vw] sm:max-w-[90vw] max-h-[90vh] w-fit p-2 bg-white border-none ring-0" showCloseButton>
          {lightbox && (
            <div className="relative w-[85vw] h-[85vh]">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </BlurFade>

      {/* ── Print 版本（所有專案靜態列表，水平排列、圖片固定在左，內容全部展開）── */}
      <div className="hidden print:block p-6 space-y-4">
        <div>
          <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-slate-900">
            <FolderKanban className="size-5 text-cyan-700" />
            {title}
          </h2>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
        {personalProjects.length > 0 && (
          <div className="space-y-3">
            <h3 className="border-b border-slate-300 pb-1 text-xs font-bold tracking-wide text-slate-700 uppercase">
              {personalProjectsLabel}
            </h3>
            <div className="grid gap-4 grid-cols-1">
              {personalProjects.map((project) => renderPrintCard(project))}
            </div>
          </div>
        )}
        {companyProjects.length > 0 && (
          <div className="space-y-3">
            <h3 className="border-b border-slate-300 pb-1 text-xs font-bold tracking-wide text-slate-700 uppercase">
              {companyProjectsLabel}
            </h3>
            <div className="grid gap-4 grid-cols-1">
              {companyProjects.map((project) => renderPrintCard(project))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
