import Image from "next/image";
import Link from "next/link";

import error from "@/public/images/icons/error.svg";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <Image src={error} alt="error" height={64}></Image>
        <p className="ml-2 text-red-500 font-bold">Projeto não encontrado!</p>
      </div>
      <div className="mt-3">
        <Link href="/">
          <Button>Voltar</Button>
        </Link>
      </div>
    </div>
  )
}