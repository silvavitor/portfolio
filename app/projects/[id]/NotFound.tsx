'use client';

import Image from "next/image";
import Link from "next/link";

import error from "@/public/images/icons/error.svg";
import Button from "@/components/Button";
import { useLanguageContext } from "@/contexts/LanguageContext";

const texts = {
  notFound: {
    pt: 'Projeto não encontrado!',
    en: 'Project not found!'
  },
  back: {
    pt: 'Voltar',
    en: 'Back'
  }
}

export default function NotFound() {
  const { language } = useLanguageContext();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <Image src={error} alt="error" height={64}></Image>
        <p className="ml-2 text-red-500 font-bold">{texts.notFound[language]}</p>
      </div>
      <div className="mt-3">
        <Link href="/">
          <Button>{texts.back[language]}</Button>
        </Link>
      </div>
    </div>
  )
}