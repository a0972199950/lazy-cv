import Image from "next/image";
import {
  BadgeCheck,
  BookOpenText,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShineBorder } from "@/components/ui/shine-border";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { CertificationItem, EducationItem, LanguageItem } from "./types";

type EducationCertsProps = {
  sectionTitle: string;
  educationLabel: string;
  educationHeaders: {
    institution: string;
    degree: string;
    period: string;
  };
  educations: EducationItem[];
  certLabel: string;
  certifications: CertificationItem[];
  languageLabel: string;
  languages: LanguageItem[];
};

export function EducationCerts({
  sectionTitle,
  educationLabel,
  educationHeaders,
  educations,
  certLabel,
  certifications,
  languageLabel,
  languages,
}: EducationCertsProps) {
  return (
    <BlurFade delay={0.45} inView>
      <Card className="relative overflow-hidden border-slate-200 bg-white/90 shadow-sm transition hover:shadow-md">
        <ShineBorder
          shineColor={["#06b6d4", "#10b981", "#6366f1"]}
          borderWidth={1}
          duration={10}
        />
        <CardHeader>
          <CardTitle className="inline-flex items-center gap-2 text-xl text-slate-900 md:text-2xl">
            <GraduationCap className="size-5 text-cyan-700" />
            {sectionTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* education */}
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
              <BookOpenText className="size-4 text-cyan-700" />
              {educationLabel}
            </p>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-200 hover:bg-transparent">
                  <TableHead className="text-slate-600">
                    {educationHeaders.institution}
                  </TableHead>
                  <TableHead className="text-slate-600">
                    {educationHeaders.degree}
                  </TableHead>
                  <TableHead className="text-right text-slate-600">
                    {educationHeaders.period}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {educations.map((edu) => (
                  <TableRow key={edu.institution} className="border-slate-200 hover:bg-cyan-50/45">
                    <TableCell className="text-slate-800">
                      {edu.institution}
                    </TableCell>
                    <TableCell className="text-slate-600">
                      {edu.degree}
                    </TableCell>
                    <TableCell className="text-right text-slate-500">
                      {edu.period}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Separator className="bg-slate-200" />

          {/* certifications */}
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
              <BadgeCheck className="size-4 text-emerald-600" />
              {certLabel}
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-cyan-200"
                >
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={48}
                      height={48}
                      className="size-12 rounded-md border border-slate-200 object-contain bg-white p-0.5"
                    />
                  ) : (
                    <div className="flex size-12 items-center justify-center rounded-md border border-slate-200 bg-white text-cyan-700">
                      <GraduationCap className="size-6" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {cert.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="bg-slate-200" />

          {/* language */}
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
              <Sparkles className="size-4 text-cyan-700" />
              {languageLabel}
            </p>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <Badge key={lang.name} className={`${lang.badgeClassName} px-3 py-1.5`}>
                  {lang.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </BlurFade>
  );
}
