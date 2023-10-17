'use client';

import { useLanguageContext } from "@/contexts/LanguageContext";

const texts = {
  pt: 'Tencologias',
  en: 'Technologies'
}

export default function ProjectTechTitle() {
  const { language } = useLanguageContext();
  return (
    <p className="font-semibold text-xl" >{texts[language]}</p>
  )
}