import { Tags } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import type { SkillKeywordRow } from "./types";

type SkillKeywordsProps = {
  title: string;
  rows: SkillKeywordRow[];
};

export function SkillKeywords({ title, rows }: SkillKeywordsProps) {
  return (
    <>
      {/* ── 一般顯示版（Marquee 輪播）── */}
      <BlurFade delay={0.4} inView className="print:hidden">
        <Card className="border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md">
          <CardHeader>
            <CardTitle className="inline-flex items-center gap-2 text-xl text-slate-900 md:text-2xl">
              <Tags className="size-5 text-cyan-700" />
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 overflow-hidden">
            {rows.map((row, idx) => (
              <Marquee key={idx} pauseOnHover reverse={row.reverse} className={row.marqueeClassName}>
                {row.keywords.map((kw) => (
                  <Badge
                    key={kw}
                    variant="outline"
                    className={`${row.badgeClassName} px-3 py-1.5 text-sm whitespace-nowrap`}
                  >
                    {kw}
                  </Badge>
                ))}
              </Marquee>
            ))}
          </CardContent>
        </Card>
      </BlurFade>

      {/* ── Print 版本（全部關鍵字靜態顯示，無截斷）── */}
      <div className="hidden print:block rounded-xl border border-slate-200 p-6 space-y-4">
        <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-slate-900">
          <Tags className="size-5 text-cyan-700" />
          {title}
        </h2>
        {rows.map((row, idx) => (
          <div key={idx} className="flex flex-wrap gap-2">
            {row.keywords.map((kw) => (
              <span
                key={kw}
                className="rounded-md border border-slate-300 px-3 py-1 text-sm text-slate-700"
              >
                {kw}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
