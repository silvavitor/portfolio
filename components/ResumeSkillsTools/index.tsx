'use client';

import { useLanguageContext } from "@/contexts/LanguageContext";

const texts = {
  soft1: {
    pt: 'Revisão de Código',
    en: 'Code Review'
  },
  soft2: {
    pt: 'Boa comunicação',
    en: 'Good Communitation'
  },
  soft3: {
    pt: 'Trabalho em equipe',
    en: 'Team work'
  },
  soft4: {
    pt: 'Solução de problemas',
    en: 'Troubleshooting'
  }
}

export default function ResumeSkillsTools() {
  const { language } = useLanguageContext();

  return (
    <div className="flex flex-col md:flex-row mt-6 space-y-12 md:space-x-16 md:space-y-0">
      <div className="w-40">
        <p className="text-sm">JavaScript</p>
        <p className="text-sm">HTML</p>
        <p className="text-sm">CSS</p>
        <p className="text-sm">PHP</p>
        <p className="text-sm">SQL</p>
        <p className="text-sm">Git</p>
        <p className="text-sm">Python</p>
        <p className="text-sm">OOP</p>
        <p className="text-sm">REST APIs</p>
      </div>
      <div className="w-40">
        <p className="text-sm">React.js</p>
        <p className="text-sm">Next.js</p>
        <p className="text-sm">Node.js</p>
        <p className="text-sm">Tailwind.css</p>
        <p className="text-sm">Laravel</p>
        <p className="text-sm">MySQL</p>
        <p className="text-sm">PostgreSQL</p>
        <p className="text-sm">GitHub</p>
        <p className="text-sm">GitLab</p>
      </div>
      <div className="w-40">
        <p className="text-sm">{texts.soft1[language]}</p>
        <p className="text-sm">{texts.soft2[language]}</p>
        <p className="text-sm">{texts.soft3[language]}</p>
        <p className="text-sm">{texts.soft4[language]}</p>
      </div>
    </div>
  );
}