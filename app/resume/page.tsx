import Image from "next/image";

import Button from "@/components/Button";
import ResumeInfo from "@/components/ResumeInfo";
import ResumeSkillsTools from "@/components/ResumeSkillsTools";

import download from "@/public/images/icons/download.svg";
import circles from "@/public/images/circles.png";

export default function Resume() {
  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto">
      <div className="relative top-0 left-0">
        <div className="absolute z-0">
          <Image src={circles} alt="circles" className="rounded-lg opacity-5 scale-150 rotate-90" />
        </div>
        <h1 className="text-3xl font-bold z-10">Currículo</h1>
      </div>
      <p className="mt-3 text-sm z-10">Estou em contato com programação desde 2015 e desde 2019 trabalho com isso. Tenho experiência em software de pequeno e grande porte, programação orientada a objetos, criação e consumo de APIs REST, aplicações de alto desempenho e sistemas multi-threaded.</p>

      <h2 className="mt-10 text-xl bg-black text-neutral-100">Experiência profissional</h2>

      <ResumeInfo
        title="Desenvolvedor de Software"
        local="Nelogica"
        date="Jun 2021 - Jun 2023"
      />
      <ResumeInfo
        title="Desenvolvedor Full Stack"
        local="isDesign Softwares Ltda."
        date="Jan 2020 - Mai 2021"
      />
      <ResumeInfo
        title="Desenvolvedor Full Stack"
        local="Webermaq"
        date="Fev 2019 - Dez 2019"
      />

      <h2 className="mt-10 text-xl bg-black text-neutral-100">Educação</h2>

      <ResumeInfo
        title="Análise e Desenvolvimento de Sistemas"
        local="Instituto Federal de Educação Ciência e Tecnologia do Rio Grande do Sul"
        date="2019 - 2022"
      />
      <ResumeInfo
        title="Técnico em informática"
        local="Instituto Federal de Educação Ciência e Tecnologia do Rio Grande do Sul"
        date="2015 - 2018"
      />

      <h2 className="mt-10 text-xl bg-black text-neutral-100">Habilidades e Ferramentas</h2>

      <ResumeSkillsTools />

      <span className="mt-10">Baixe meu currículo como PDF.</span>
      <div className="mt-3 mb-32">
        <a href="pdf/resume_vitor.pdf" target="_blank" rel="noopener noreferrer" download>
          <Button icon={download}>Baixar (96KB)</Button>
        </a>
      </div>
    </div>
  )
}