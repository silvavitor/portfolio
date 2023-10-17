'use client';

import { useLanguageContext } from "@/contexts/LanguageContext";
import { ProjectDataDescription } from "@/types/project";

type ProjectDescriptionProps = {
  description: ProjectDataDescription
}

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
  const { language } = useLanguageContext();
  return (
    <p className="mt-5">{description[language]}</p>
  )
}