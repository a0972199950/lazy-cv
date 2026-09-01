import Image from "next/image";
import { BadgeCheck, Briefcase } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDuration } from "./period";
import { parseBold } from "./rich-text";
import type { Experience } from "./types";

// 時間軸對齊方式：改這個值即可切換。
//   "CENTER" — 卡片左右交錯排在中線兩側
//   "LEFT"   — 時間軸貼左緣，所有公司卡片一律排在右側
const TIMELINE_ALIGNMENT = "CENTER" as "CENTER" | "LEFT";

const isCompact = TIMELINE_ALIGNMENT === "LEFT";

type WorkExperienceProps = {
  title: string;
  experiences: Experience[];
};

export function WorkExperience({ title, experiences }: WorkExperienceProps) {
  const cjk = /[㐀-鿿]/.test(title);
  return (
    <BlurFade delay={0.2} inView>
      <Card className="border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md">
        <CardHeader>
          <CardTitle className="inline-flex items-center gap-2 text-xl text-slate-900 md:text-2xl">
            <Briefcase className="size-5 text-cyan-700" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul
            className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ${
              isCompact ? "timeline-compact" : ""
            }`}
          >
            {experiences.map((exp, idx) => {
              const isLeft = TIMELINE_ALIGNMENT === "CENTER" && idx % 2 === 0;
              const duration = formatDuration(exp.period, cjk);
              return (
                <li key={exp.company}>
                  {idx !== 0 && <hr className="bg-cyan-600" />}
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 text-cyan-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className={`${isLeft ? "timeline-start md:text-end" : "timeline-end"} mb-10 w-full`}>
                    <time className="font-mono text-sm italic text-slate-500">
                      {exp.period}
                      {duration && (
                        <span className="ml-1.5 not-italic text-slate-400">
                          {cjk ? `（${duration}）` : `(${duration})`}
                        </span>
                      )}
                    </time>
                    <div className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm md:p-5 space-y-3">
                      <div className={`flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={40}
                          height={40}
                          loading="eager"
                          className="size-10 rounded-lg border border-slate-200 object-contain bg-white p-0.5"
                        />
                        <div>
                          <p className="text-base font-semibold text-slate-900">
                            {exp.role}
                          </p>
                          <p className="text-sm text-slate-500">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      {exp.highlights.length > 0 && (
                        <>
                          <Separator className="bg-slate-200" />
                          <ul className="grid gap-2 text-start text-sm text-slate-600">
                            {exp.highlights.map((item) => (
                              <li
                                key={item}
                                className="inline-flex items-start gap-2"
                              >
                                <BadgeCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                                <span>{parseBold(item)}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                  {idx !== experiences.length - 1 && <hr className="bg-cyan-600" />}
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </BlurFade>
  );
}
