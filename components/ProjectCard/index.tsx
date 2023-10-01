import Image from "next/image"
import Button from "../Button"

import github from "@/public/images/icons/github.svg";
import eye from "@/public/images/icons/eye.svg";

import { ProjectData } from "@/interfaces/project";
import Link from "next/link";

type ProjectCardProps = {
  project: ProjectData
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const techs = project.techs.slice(0, 3);
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="mt-8 md:mt-0 mx-1 w-64 h-96 py-5 px-3 bg-white flex flex-col rounded-md shadow-md hover:shadow-xl transition duration-200">
        <div>
          <Image src={`/images/${project.image}`} alt={project.title} width={300} height={300} className="rounded-md h-32" />
        </div>

        <h2 className="font-bold text-lg mt-2">{project.title}</h2>

        <div className="mt-3 text-xs space-x-1">
          {techs.map((tech, index) => (
            <span key={index} className="px-2 py-1 rounded-lg bg-neutral-200">{tech}</span>
          ))}
          {project.techs.length > 3
            ? <span className="px-2 py-1 rounded-lg bg-neutral-200">+{project.techs.length - 3}</span>
            : ''}
        </div>

        <div className="mt-3 h-full overflow-hidden leading-4">
          <span className="text-xs mt-3">{project.description}</span>
        </div>

        <div className="mt-5 flex justify-evenly">
          {project.repo &&
            <a href={project.repo} target="_blank">
              <Button small icon={github}>Repo</Button>
            </a>
          }

          {project.live &&
            <a href={project.live} target="_blank">
              <Button small icon={eye}>Live</Button>
            </a>
          }
        </div>
      </div>
    </Link>
  );
}