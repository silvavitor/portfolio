import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";

import vitor from "@/public/images/vitor.jpg";
import circles from "@/public/images/circles.png";

import projectsJSON from "@/data/projects.json";
import { ProjectData } from "@/interfaces/project";


export default function Home() {
  const projects: Array<ProjectData> = projectsJSON.projects.slice(0, 3);
  return (
    <div className="py-12">
      {/* About */}
      <div className="flex items-center justify-center flex-col md:flex-row ">
        <div className="h-[420px] relative top-0 left-0 flex items-center">
          <div className="hidden lg:block absolute bottom-[357px] left-[-79px] ">
            <Image src={circles} height={125} alt="circles" className="rounded-lg" />
          </div>
          <Image src={vitor} alt="Vitor Fernando da Silva" className="h-fit w-fit rounded-md" />
          <div className="hidden lg:block absolute top-[357px] right-[-79px]">
            <Image src={circles} height={125} alt="circles" className="rounded-lg" />
          </div>
        </div>

        <div className="md:ml-6 flex flex-col max-w-lg">
          <h1 className="text-4xl font-bold leading-tight">Olá, me chamo Vitor e sou <span className="bg-black text-neutral-100">Desenvolvedor Full-Stack</span></h1>
          <p className="mt-2 text-sm">Sou um desenvolvedor do Rio Grande do Sul, Brasil. Possuo 4 anos de experiência comercial, porém, tenho contato com programação há 8 anos. <br />Estou aberto a novas oportunidades e projetos.</p>
          <div className="mt-5 flex space-x-4 justify-center md:justify-start">
            <Link href="/contact">
              <Button>Contato</Button>
            </Link>
            <Link href="/projects">
              <Button>Projetos</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Work */}
      <div className="mt-28 flex flex-col items-center text-center">
        <Link href="/projects">
          <h1 className="text-3xl font-bold">Projetos</h1>
        </Link>
        <p className="mt-2 text-sm">Meus projetos destaque.<br />Se você tiver qualquer dúvida, sinta-se à vontade para me perguntar!</p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-evenly items-center">
        {projects.map((project, index) => (
          (index < 3) && <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
