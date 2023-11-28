'use client';

import Link from "next/link";

import Button from "@/components/Button";
import { useLanguageContext } from "@/contexts/LanguageContext";

const texts = {
  heading: {
    pt: 'Olá, me chamo Vitor e sou ',
    en: "Hello, my name is Vitor and I'm "
  },
  role: {
    pt: 'Desenvolvedor Full-stack',
    en: 'Full-stack Developer',
  },
  description1: {
    pt: 'Sou um desenvolvedor do Rio Grande do Sul, Brasil. Possuo 4 anos de experiência comercial, porém, tenho contato com programação há 8 anos. ',
    en: "I'm a developer from Rio Grande do Sul, Brazil. I have 4 years of job experience, however, I have been in programming for 8 years. "
  },
  description2: {
    pt: 'Estou aberto a novas oportunidades e projetos.',
    en: 'I am open for new opportunities and projects.'
  },
  button: {
    contact: {
      pt: 'Contato',
      en: 'Contact me',
    },
    projects: {
      pt: 'Projetos',
      en: 'Projects'
    }
  }
}

export default function About() {
  const { language } = useLanguageContext();

  return (
    <div className="md:ml-6 flex flex-col max-w-lg">
      <h1 className="text-4xl font-bold leading-tight animate-upBottomFadeIn">{texts.heading[language]}<span className="bg-black text-neutral-100">{texts.role[language]}</span></h1>
      <p className="mt-2 text-sm animate-leftRightFadeIn">{texts.description1[language]}<br />{texts.description2[language]}</p>
      <div className="mt-5 flex space-x-4 justify-center md:justify-start animate-bottomUpFadeIn">
        <Link href="/contact">
          <Button>{texts.button.contact[language]}</Button>
        </Link>
        <Link href="/projects">
          <Button>{texts.button.projects[language]}</Button>
        </Link>
      </div>
    </div>
  )
}