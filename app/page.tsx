import Image from "next/image";

import vitor from "@/public/images/vitor.jpg";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12">
      {/* About */}
      <div className="flex items-center justify-center">
        <Image src={vitor} height={420} alt="Vitor Fernando da Silva" />
        <div className="ml-6 flex flex-col max-w-lg">
          <h1 className="text-4xl font-bold leading-tight">Olá, me chamo Vitor e sou <span className="bg-black text-neutral-100">Desenvolvedor Full-Stack</span></h1>
          <p className="mt-2 text-sm">Sou um desenvolvedor do Rio Grande do Sul, Brasil. Possuo 4 anos de experiência comercial, porém, tenho contato com programação há 8 anos. <br />Estou aberto a novas oportunidades e projetos.</p>
          <div className="mt-5 flex space-x-4">
            <Link href="/contact">
              <Button dark>Contato</Button>
            </Link>
            <Link href="/projects">
              <Button>Confira meu trabalho</Button>
            </Link>
          </div>
        </div>

      </div>

      {/* Work */}
      <div className="mt-28 flex flex-col items-center text-center">
        <Link href="/projects">
          <h1 className="text-3xl font-bold">Projetos</h1>
        </Link>
        <p className="mt-2 text-sm">Meus projetos principais de destaque.<br />Se você tiver qualquer dúvida, sinta-se à vontade para me perguntar!</p>
      </div>
    </div>
  )
}
