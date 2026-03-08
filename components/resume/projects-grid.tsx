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
import type { Project } from "./types";

type ProjectsGridProps = {
  title: string;
  description: string;
  projects: Project[];
};

export function ProjectsGrid({ title, description, projects }: ProjectsGridProps) {
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
          {projects.map((project) => (
            <MagicCard
              key={project.name}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              gradientColor="#e0f2fe"
              gradientOpacity={0.4}
              gradientFrom="#06b6d4"
              gradientTo="#10b981"
            >
              {/* project image */}
              <div className="relative h-36 w-full overflow-hidden bg-linear-to-br from-slate-100 to-sky-50">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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
          ))}
        </CardContent>
      </Card>
    </BlurFade>
  );
}
