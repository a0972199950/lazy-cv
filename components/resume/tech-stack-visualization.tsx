import { Sparkles } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TechStackVisualizationProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function TechStackVisualization({ title, description, children }: TechStackVisualizationProps) {
  return (
    <>
      {/* ── 一般顯示版（有特效）── */}
      <BlurFade delay={0.35} inView className="print:hidden">
        <Card className="border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md">
          <CardHeader>
            <CardTitle className="inline-flex items-center gap-2 text-xl text-slate-900 md:text-2xl">
              <Sparkles className="size-5 text-cyan-700" />
              {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 lg:grid-cols-2">
              {children}
            </div>
          </CardContent>
        </Card>
      </BlurFade>

      {/* ── Print 版本：children 各自管理靜態呈現 ── */}
      <div className="hidden print:block rounded-xl border border-slate-200 p-6 space-y-3">
        <div>
          <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-slate-900">
            <Sparkles className="size-5 text-cyan-700" />
            {title}
          </h2>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {children}
        </div>
      </div>
    </>
  );
}
