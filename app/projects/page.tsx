"use client";

import ProjectCard from "@/components/ProjectCard";

import useProjects from "./useProjects";

export default function Projects() {
  const [
    {
      techs,
      filteredProjects
    },
    {
      filterTechs
    }
  ] = useProjects();

  return (
    <div className="flex flex-col items-center mx-auto">
      <h1 className="text-3xl font-bold">Projetos</h1>
      <div className="mt-3 text-sm flex flex-col items-center">
        <div className="space-x-2 space-y-2 text-center">
          <button key={'all'} className="m-1 px-2 py-1 rounded-lg bg-neutral-200 cursor-pointer" onClick={filterTechs} id={'all'}>Todos</button>
          {techs?.map((tech, index) => (
            <button key={index} className="m-1 px-2 py-1 rounded-lg bg-neutral-200 cursor-pointer" onClick={filterTechs} id={tech}>{tech}</button>
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