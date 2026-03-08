"use client";

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiJest,
  SiCypress,
  SiStorybook,
  SiWebpack,
  SiTailwindcss,
  SiGit,
  SiRedis,
  SiSocketdotio,
  SiNuxt,
  SiVite,
} from "react-icons/si";
import { IconCloud } from "@/components/ui/icon-cloud";

const skillIcons = [
  <SiTypescript key="ts" className="size-full" color="#3178C6" />,
  <SiReact key="react" className="size-full" color="#61DAFB" />,
  <SiNextdotjs key="next" className="size-full" color="#000000" />,
  <SiVuedotjs key="vue" className="size-full" color="#4FC08D" />,
  <SiNuxt key="nuxt" className="size-full" color="#00DC82" />,
  <SiNodedotjs key="node" className="size-full" color="#5FA04E" />,
  <SiDocker key="docker" className="size-full" color="#2496ED" />,
  <SiGraphql key="graphql" className="size-full" color="#E10098" />,
  <SiMongodb key="mongo" className="size-full" color="#47A248" />,
  <SiPostgresql key="pg" className="size-full" color="#4169E1" />,
  <SiRedis key="redis" className="size-full" color="#FF4438" />,
  <SiFirebase key="firebase" className="size-full" color="#DD2C00" />,
  <SiJest key="jest" className="size-full" color="#C21325" />,
  <SiCypress key="cypress" className="size-full" color="#69D3A7" />,
  <SiStorybook key="storybook" className="size-full" color="#FF4785" />,
  <SiWebpack key="webpack" className="size-full" color="#8DD6F9" />,
  <SiVite key="vite" className="size-full" color="#646CFF" />,
  <SiTailwindcss key="tailwind" className="size-full" color="#06B6D4" />,
  <SiGit key="git" className="size-full" color="#F05032" />,
  <SiSocketdotio key="socket" className="size-full" color="#010101" />,
];

export function SkillCloud() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud icons={skillIcons} />
    </div>
  );
}
