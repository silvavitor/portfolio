"use client";

import ProjectCard from "@/components/ProjectCard";

import useProjects from "./useProjects";
import { useLanguageContext } from "@/contexts/LanguageContext";

const texts = {
  title: {
    pt: 'Projetos',
    en: 'Projects'
  },
  all: {
    pt: 'Todos',
    en: 'All'
  }
}

export default function Projects() {
  const { language } = useLanguageContext();
  const [
    {
      techs,
      selectedTech,
      filteredProjects
    },
    {
      filterTechs
    }
  ] = useProjects();

  return (
    <div className="flex flex-col items-center mx-auto">
      <h1 className="text-3xl font-bold animate-bottomUpFadeIn">{texts.title[language]}</h1>
      <div className="mt-3 text-sm flex flex-col items-center animate-bottomUpFadeIn">
        <div className="space-x-2 space-y-2 text-center">
          <button key={'all'} className={`m-1 px-2 py-1 rounded-lg  cursor-pointer ${selectedTech === 'all' ? 'bg-neutral-300' : 'bg-neutral-200'}`} onClick={filterTechs} id={'all'}>{texts.all[language]}</button>
          {techs?.map((tech, index) => (
            <button key={index} className={`m-1 px-2 py-1 rounded-lg cursor-pointer ${selectedTech === tech ? 'bg-neutral-300' : 'bg-neutral-200'}`} onClick={filterTechs} id={tech}>{tech}</button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-[70px] gap-y-8 md:gap-y-12 lg:gap-y-16">
        {filteredProjects?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}