import projectsJSON from "@/data/projects.json";
import NotFound from "./NotFound";
import Image from "next/image";
import Button from "@/components/Button";

import github from "@/public/images/icons/github.svg";
import eye from "@/public/images/icons/eye.svg";

type ParamsType = {
  id: string
}

type DetailsType = {
  params: ParamsType
}

export default function ProjectDetails({ params }: DetailsType) {
  const { id } = params;
  const project = projectsJSON.projects.find((p) => p.id === id);
  console.log(project)

  if (!project) {
    return (
      <NotFound />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center  ">

      <h1 className="font-bold text-4xl">{project.title}</h1>

      <div className="flex flex-col items-center justify-center md:flex-row mt-4">
        <Image src={`/images/${project.image}`} alt={project.title} width={600} height={300} className="rounded-md border border-black" />
      </div>

      <p className="mt-5">{project.description}</p>

      <div className="mt-5 text-sm flex flex-col items-center">
        <p className="font-semibold text-xl">Tecnologias:</p>
        <div className="text-center">
          {project.techs?.map((tech, index) => (
            <button key={index} className="m-1 px-2 py-1 rounded-lg bg-neutral-200 cursor-default">{tech}</button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-evenly">
        {project.repo &&
          <a href={project.repo} target="_blank">
            <Button icon={github}>Repo</Button>
          </a>
        }

        {project.live &&
          <a href={project.live} target="_blank">
            <Button icon={eye}>Live</Button>
          </a>
        }
      </div>
    </div>
  );
}