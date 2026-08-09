"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { ChevronDown, FolderKanban, Sparkles, Trophy } from "lucide-react";
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
};

export function ProjectsGrid({ title, description, projects, highlightsLabel = "Technical Highlights", contributionsLabel = "Key Contributions" }: ProjectsGridProps) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

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
        <CardContent className="flex flex-col gap-4">
          {projects.map((project) => {
            const images = Array.isArray(project.image) ? project.image : [project.image];

            return (
              <MagicCard
                key={project.name}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm [contain:content]"
                gradientColor="#e0f2fe"
                gradientOpacity={0.4}
                gradientFrom="#06b6d4"
                gradientTo="#10b981"
              >
                <div className="flex flex-row items-start">
                  {/* project image carousel — pinned to the left, fixed width, top-aligned so collapsible animations don't reposition it */}
                  <div className="relative aspect-4/3 w-40 shrink-0 grow-0 basis-40 overflow-hidden bg-linear-to-br from-slate-100 to-sky-50 sm:w-56 sm:basis-56 md:w-64 md:basis-64">
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
                                  sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 256px"
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
                          sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 256px"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
                    <div>
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
          })}
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
        <div className="grid gap-4 grid-cols-1">
          {projects.map((project) => {
            const firstImage = Array.isArray(project.image) ? project.image[0] : project.image;
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
          })}
        </div>
      </div>
    </>
  );
}
