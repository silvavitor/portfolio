import projectsJSON from "@/data/projects.json";
import NotFound from "./NotFound";
import Button from "@/components/Button";

import github from "@/public/images/icons/github.svg";
import eye from "@/public/images/icons/eye.svg";

import { ProjectData } from "@/types/project";

import ProjectDescription from "@/components/ProjectDescription";
import ProjectTechTitle from "@/components/ProjectTechTitle";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";

type ParamsType = {
  id: string
}

type DetailsType = {
  params: ParamsType
}

export default function ProjectDetails({ params }: DetailsType) {
  const { id } = params;
  const project: ProjectData | undefined = projectsJSON.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <NotFound />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center  ">
      <h1 className="font-bold text-4xl">{project.title}</h1>
      <ProjectImageCarousel alt={project.title} images={project.images} />

      <ProjectDescription description={project.description} />

      <div className="mt-5 text-sm flex flex-col items-center">
        <ProjectTechTitle />

        <div className="text-center">
          {project.techs?.map((tech, index) => (
            <button key={index} className="m-1 px-2 py-1 rounded-lg bg-neutral-200 cursor-default">{tech}</button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex space-x-2">
        <a href={project.repo} target="_blank" className={project.repo ? 'block' : 'hidden'}>
          <Button icon={github}>Repo</Button>
        </a>

        <a href={project.live} target="_blank" className={project.live ? 'block' : 'hidden'}>
          <Button icon={eye}>Live</Button>
        </a>
      </div>
    </div>
  );
}