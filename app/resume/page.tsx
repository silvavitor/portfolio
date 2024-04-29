'use client';

import Image from "next/image";

import Button from "@/components/Button";
import ResumeInfo from "@/components/ResumeInfo";
import ResumeSkillsTools from "@/components/ResumeSkillsTools";

import download from "@/public/images/icons/download.svg";
import circles from "@/public/images/circles.png";
import { useLanguageContext } from "@/contexts/LanguageContext";

const texts = {
  header: {
    pt: 'Currículo',
    en: 'Resume'
  },
  about: {
    pt: 'Estou em contato com programação desde 2015 e desde 2019 trabalho com isso. Tenho experiência em software de pequeno e grande porte, programação orientada a objetos, criação e consumo de APIs REST, aplicações de alto desempenho e sistemas multi-threaded.',
    en: 'I have been in contact with programming since 2015 and have been working with it since 2019. I have experience in small and large software, object-oriented programming, creation and consumption of REST APIs, high-performance applications and multi-threaded systems.'
  },
  experience: {
    pt: 'Experiência profissional',
    en: 'Work Experience'
  },
  info1Title: {
    pt: 'Desenvolvedor Backend',
    en: 'Backend Developer'
  },
  info1Date: {
    pt: 'Jun 2021 - Jun 2023',
    en: 'Jun 2021 - Jun 2023'
  },
  info2Title: {
    pt: 'Desenvolvedor Full Stack - Foco em Backend',
    en: 'Full Stack Developer - Backend Focused'
  },
  info2Date: {
    pt: 'Jan 2020 - Mai 2021',
    en: 'Jan 2020 - May 2021'
  },
  info3Date: {
    pt: 'Fev 2019 - Dez 2019',
    en: 'Feb 2019 - Dec 2019'
  },
  info4Title: {
    pt: 'Desenvolvedor Full Stack - Foco em Backend',
    en: 'Full Stack Developer - Backend Focused'
  },
  info4Date: {
    pt: 'Jan 2024 - Presente',
    en: 'Jan 2024 - Present'
  },
  school: {
    pt: 'Educação',
    en: 'Education'
  },
  school1Title: {
    pt: 'Análise e Desenvolvimento de Sistemas',
    en: 'Software Analysis and Development'
  },
  school2Title: {
    pt: 'Técnico em informática integrado ao ensino médio',
    en: 'Computer technician integrated into high school'
  },
  skills: {
    pt: 'Habilidades e Ferramentas',
    en: 'Skills and Tools'
  },
  downloadText: {
    pt: 'Baixe meu currículo como PDF.',
    en: 'Download my resume as PDF.'
  },
  downloadButton: {
    pt: 'Baixar (675KB)',
    en: 'Download (551KB)'
  },
}

export default function Resume() {
  const { language } = useLanguageContext();

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto animate-bottomUpFadeIn">
      <div className="relative top-0 left-0">
        <div className="absolute z-0">
          <Image src={circles} alt="circles" className="rounded-lg opacity-5 scale-150 rotate-90" />
        </div>
        <h1 className="text-3xl font-bold z-10">{texts.header[language]}</h1>
      </div>
      <p className="mt-3 text-sm z-10">{texts.about[language]}</p>

      <h2 className="mt-10 text-xl bg-black text-neutral-100">{texts.experience[language]}</h2>

      <ResumeInfo
        title={texts.info4Title[language]}
        local="teceo"
        date={texts.info4Date[language]}
      />
      <ResumeInfo
        title={texts.info1Title[language]}
        local="Nelogica"
        date={texts.info1Date[language]}
      />
      <ResumeInfo
        title={texts.info2Title[language]}
        local="isDesign Softwares Ltda."
        date={texts.info2Date[language]}
      />
      <ResumeInfo
        title={texts.info2Title[language]}
        local="Webermaq"
        date={texts.info3Date[language]}
      />

      <h2 className="mt-10 text-xl bg-black text-neutral-100">{texts.school[language]}</h2>

      <ResumeInfo
        title={texts.school1Title[language]}
        local="Instituto Federal de Educação Ciência e Tecnologia do Rio Grande do Sul"
        date="2019 - 2022"
      />
      <ResumeInfo
        title={texts.school2Title[language]}
        local="Instituto Federal de Educação Ciência e Tecnologia do Rio Grande do Sul"
        date="2015 - 2018"
      />

      <h2 className="mt-10 text-xl bg-black text-neutral-100">{texts.skills[language]}</h2>

      <ResumeSkillsTools />

      <span className="mt-10">{texts.downloadText[language]}</span>
      <div className="mt-3">
        <a href={language === "pt" ? "pdf/curriculo_vitor.pdf" : "pdf/resume_vitor.pdf"} target="_blank" rel="noopener noreferrer" download>
          <Button icon={download}>{texts.downloadButton[language]}</Button>
        </a>
      </div>
    </div>
  )
}