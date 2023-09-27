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
    <div className="flex flex-col items-center mx-auto mb-32">
      <h1 className="text-3xl font-bold">Projetos</h1>
      <div className="mt-3 text-sm flex flex-col items-center">
        <div className="space-x-2">
          <button key={'all'} className="px-2 py-1 rounded-lg bg-neutral-200 cursor-pointer" onClick={filterTechs} id={'all'}>Todos</button>
          {techs?.map((tech, index) => (
            <button key={index} className="px-2 py-1 rounded-lg bg-neutral-200 cursor-pointer" onClick={filterTechs} id={tech}>{tech}</button>
          ))}
        </div>

      </div>
      <div className="mt-10 grid grid-cols-3 gap-x-[70px] gap-y-16">
        {filteredProjects?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}