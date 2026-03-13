import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Card, CardContent } from "@/components/ui/card";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Globe } from "@/components/ui/globe";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TextAnimate } from "@/components/ui/text-animate";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Crown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { ContactItem, StatItem } from "./types";

const contactIconMap = {
  mail: { icon: Mail, bgClass: "bg-cyan-50", textClass: "text-cyan-700" },
  github: { icon: Github, bgClass: "bg-slate-100", textClass: "text-slate-700" },
  linkedin: { icon: Linkedin, bgClass: "bg-blue-50", textClass: "text-blue-700" },
} as const;

type HeroProfileProps = {
  name: string;
  avatarUrl: string;
  avatarFallback: string;
  jobTitle: string;
  description: string;
  location: string;
  stats: StatItem[];
  contacts: ContactItem[];
  globeCaption: string;
};

export function HeroProfile({
  name,
  avatarUrl,
  avatarFallback,
  jobTitle,
  description,
  location,
  stats,
  contacts,
  globeCaption,
}: HeroProfileProps) {
  return (
    <BlurFade delay={0.1} inView>
      <Card className="relative overflow-hidden border-slate-200 bg-white/90 shadow-sm ring-1 ring-cyan-100/70 backdrop-blur">
        <BorderBeam
          size={120}
          duration={8}
          colorFrom="#06b6d4"
          colorTo="#10b981"
          borderWidth={1.5}
        />
        <CardContent className="space-y-8 py-8 md:py-10">
          {/* top — name, title & contact */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="size-20 ring-2 ring-cyan-200/80">
                <AvatarImage src={avatarUrl} alt={name} />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
              </Avatar>
              <div>
                <TextAnimate
                  as="h1"
                  animation="blurInUp"
                  by="character"
                  className="text-3xl font-bold tracking-tight md:text-5xl"
                >
                  {name}
                </TextAnimate>
                <div className="mt-1 flex items-center gap-3">
                  <p className="bg-linear-to-r from-cyan-700 via-sky-700 to-emerald-600 bg-clip-text text-lg font-semibold text-transparent md:text-2xl">
                    {jobTitle}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-slate-500">
                    <MapPin className="size-3.5 text-cyan-700" />
                    {location}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:items-end">
              <Dock
                iconSize={36}
                iconMagnification={52}
                className="mx-0 mt-1 h-auto border-slate-200 bg-white/80 shadow-sm"
              >
                {contacts.map((contact) => {
                  const { icon: Icon, bgClass, textClass } = contactIconMap[contact.type];
                  return (
                    <DockIcon key={contact.type}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={contact.href}
                            {...(contact.type !== "mail" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className={`flex size-full items-center justify-center rounded-full ${bgClass} ${textClass}`}
                          >
                            <Icon className="size-5" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>{contact.label}</TooltipContent>
                      </Tooltip>
                    </DockIcon>
                  );
                })}
              </Dock>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
          {/* left */}
          <div className="space-y-5">
            <p className="max-w-2xl whitespace-pre-line text-sm leading-relaxed text-slate-600 md:text-base">
              {description}
            </p>


          </div>

          {/* right — globe + stats */}
          <div className="space-y-4">
            <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-b from-cyan-50 to-sky-50 md:h-80">
              <Globe className="top-1/2 -translate-y-1/2" />
              <div className="absolute inset-x-4 bottom-4 rounded-lg border border-cyan-200 bg-white/85 px-3 py-2 text-center text-xs text-slate-600 backdrop-blur md:text-sm">
                {globeCaption}
              </div>
            </div>

            {/* stats */}
            <div className="grid grid-cols-4 gap-2.5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group relative rounded-xl border border-slate-200/80 bg-white/80 p-3 text-center shadow-xs transition-all hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-100/40"
                >
                  <Crown className="absolute -top-1.5 -left-1.5 size-4 -rotate-[30deg] fill-amber-400 text-amber-400 drop-shadow-sm transition-transform duration-300 group-hover:scale-125" />
                  <span className="bg-linear-to-r from-cyan-600 to-emerald-600 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                    <NumberTicker value={s.value} />
                  </span>
                  <p className="mt-0.5 text-xs font-medium text-slate-500 transition-colors group-hover:text-cyan-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </CardContent>
      </Card>
    </BlurFade>
  );
}
