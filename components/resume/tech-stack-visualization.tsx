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
    <BlurFade delay={0.35} inView>
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
  );
}
