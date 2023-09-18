import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/logo.svg";
import github from "@/public/images/github.svg";
import linkedin from "@/public/images/linkedin.svg";

export default function Header() {
  return (
    <header className="mb-12 py-4 px-12 flex justify-between items-center">
      <Link href="/">
        <Image src={logo} alt="logo" height={60} />
      </Link>
      <div className="space-x-10 font-medium drop-shadow-md">
        <Link href="/">Home</Link>
        <Link href="/projects">Projetos</Link>
        <Link href="/resume">Currículo</Link>
        <Link href="/contact">Contato</Link>
      </div>

      <div className="flex space-x-2">
        {/* ENG | PT */}
        <a href="https://github.com/silvavitor" target="_blank">
          <Image src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/vitor-fernando-da-silva/" target="_blank">
          <Image src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </header>
  )
}