'use client';

import { useLanguageContext } from "@/contexts/LanguageContext";

const texts = {
  heading: {
    pt: 'Destaques',
    en: "Work"
  },
  description1: {
    pt: 'Meus projetos destaque.',
    en: 'My projects highlighted.'
  },
  description2: {
    pt: 'Se você tiver qualquer dúvida, sinta-se à vontade para me perguntar!',
    en: 'If you have any questions, feel free to ask me!'
  },
}

export default function Work() {
  const { language } = useLanguageContext();

  return (
    <div className="mt-12 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold">{texts.heading[language]}</h1>
      <p className="mt-2 text-sm">{texts.description1[language]}<br />{texts.description2[language]}</p>
    </div>
  );
}