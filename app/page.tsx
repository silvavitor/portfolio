import Image from "next/image";

import ProjectCard from "@/components/ProjectCard";

import vitor from "@/public/images/vitor.jpg";
import circles from "@/public/images/circles.png";

import projectsJSON from "@/data/projects.json";
import { ProjectData } from "@/interfaces/project";
import About from "@/components/About";
import Work from "@/components/Work";

export default function Home() {
  const projects: Array<ProjectData> = projectsJSON.projects.slice(0, 3);
  return (
    <div className="md:mt-32">
      {/* About */}
      <div className="flex items-center justify-center flex-col md:flex-row ">
        <div className="h-[420px] relative top-0 left-0 flex items-center">
          <div className="hidden lg:block absolute bottom-[357px] left-[-79px] ">
            <Image src={circles} height={125} alt="circles" className="rounded-lg" />
          </div>
          <Image src={vitor} alt="Vitor Fernando da Silva" className="max-h-96 h-fit w-fit rounded-md" />
          <div className="hidden lg:block absolute top-[357px] right-[-79px]">
            <Image src={circles} height={125} alt="circles" className="rounded-lg" />
          </div>
        </div>

        <About />
      </div>

      <Work />

      <div className="mt-10 flex flex-col md:flex-row justify-evenly items-center">
        {projects.map((project, index) => (
          (index < 3) && <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
