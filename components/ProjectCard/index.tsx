import Image from "next/image"
import Button from "../Button"

import mock from "@/public/images/mock.png";

import github from "@/public/images/icons/github.svg";
import eye from "@/public/images/icons/eye.svg";

import { ProjectData } from "@/interfaces/project";

type ProjectCardProps = {
  project: ProjectData
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const techs = project.techs.slice(0, 3);
  return (
    <div className="w-64 h-96 py-5 px-3 bg-white flex flex-col rounded-md shadow-md hover:shadow-xl transition duration-200">
      <Image src={mock} alt="mock" className="rounded-md" />
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
        <Button small icon={github}>Repo</Button>
        <Button small icon={eye}>Live</Button>
      </div>
    </div>
  );
}