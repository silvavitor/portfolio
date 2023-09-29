"use client"

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/logo.svg";
import menu from "@/public/images/icons/menu.svg";
import close from "@/public/images/icons/close.svg";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleMenuClick() {
    setOpen((prevOpen) => !prevOpen);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="mb-20 py-4 sticky top-0 z-50 bg-neutral-100 rounded">
      <div className="absolute bg-neutral-100 flex justify-between items-center flex-wrap w-full">
        <Link href="/">
          <Image src={logo} alt="logo" height={60} className="min-w-[60px]" />
        </Link>

        <Image src={menu} alt="menu" height={30} className={`${!open ? "block" : "hidden"} md:hidden cursor-pointer`} onClick={handleMenuClick} />
        <Image src={close} alt="close" height={30} className={`${open ? "block" : "hidden"} md:hidden cursor-pointer`} onClick={closeMenu} />

        <div className={`bg-neutral-200 md:bg-neutral-100 rounded ${open ? "block" : "hidden"} md:flex p-3 w-full md:w-max`}>
          <nav className={` md:flex md:items-center rounded-t-md`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-right font-medium drop-shadow-md">
              <li className="w-full ">
                <Link href="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="w-full">
                <Link href="/projects" onClick={closeMenu}>Projetos</Link>
              </li>
              <li className="w-full">
                <Link href="/resume" onClick={closeMenu}>Currículo</Link>
              </li>
              <li className="w-full">
                <Link href="/contact" onClick={closeMenu}>Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}