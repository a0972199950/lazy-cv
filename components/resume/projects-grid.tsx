"use client";

import { useState } from "react";
import Image from "next/image";
import { FolderKanban } from "lucide-react";
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
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import type { Project } from "./types";

type ProjectsGridProps = {
  title: string;
  description: string;
  projects: Project[];
};

export function ProjectsGrid({ title, description, projects }: ProjectsGridProps) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <BlurFade delay={0.3} inView>
      <Card className="border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md">
        <CardHeader>
          <CardTitle className="inline-flex items-center gap-2 text-xl text-slate-900 md:text-2xl">
            <FolderKanban className="size-5 text-cyan-700" />
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const images = Array.isArray(project.image) ? project.image : [project.image];

            return (
              <MagicCard
                key={project.name}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                gradientColor="#e0f2fe"
                gradientOpacity={0.4}
                gradientFrom="#06b6d4"
                gradientTo="#10b981"
              >
                {/* project image carousel */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-linear-to-br from-slate-100 to-sky-50">
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
                                sizes="(max-width: 768px) 100vw, 33vw"
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
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
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
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {project.summary}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge
                        key={`${project.name}-${tech}`}
                        variant="secondary"
                        className="bg-slate-100 text-[11px] text-slate-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </MagicCard>
            );
          })}
        </CardContent>
      </Card>

      {/* Lightbox modal */}
      <Dialog open={!!lightbox} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-[90vw] sm:max-w-[90vw] max-h-[90vh] w-fit p-2 bg-black/95 border-none ring-0" showCloseButton>
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
  );
}
