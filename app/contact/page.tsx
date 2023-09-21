"use client";

import Image from "next/image";
import Button from "@/components/Button";

import send from "@/public/images/icons/send.svg";
import arrow from "@/public/images/icons/arrow.svg";
import useContact from "./useContact";
import FormErrorLabel from "./formErrorLabel";

export default function Contact() {
  const [{
    name,
    email,
    message,
    register,
    errors,
  }, {
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
    onSubmit
  }] = useContact();

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Contato</h1>
      <div className="mt-3 text-sm flex flex-col items-center">
        <p>Deixe-me saber se você está interessado em meus serviços ou colaboração.</p>
        <p>Responderei o quanto antes!</p>
      </div>
      <form
        onSubmit={onSubmit?.()}
        className="flex flex-col items-center w-full"
        noValidate
      >
        <input
          {...register?.("name", { required: true })}
          onChange={handleNameChange}
          value={name}
          className={
            (errors?.name ? "border-red-600 bg-red-100 focus:outline-red-600 " : "border-black ") +
            "mt-3 border rounded-md p-3 w-full"
          }
          type="text"
          placeholder="Nome"
        />

        {
          errors?.name?.type === "required"
          && <FormErrorLabel>O nome é obrigatório</FormErrorLabel>
        }

        <input
          {...register?.("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          })}
          onChange={handleEmailChange}
          value={email}
          className={
            (errors?.email ? "border-red-600 bg-red-100 focus:outline-red-600 " : "border-black ") +
            "mt-3 border rounded-md p-3 w-full"
          }
          type="email"
          placeholder="seu@email.com"
        />

        {
          errors?.email?.type === "required"
            ? <FormErrorLabel>O e-mail é obrigatório</FormErrorLabel>
            : errors?.email?.type === "pattern" &&
            <FormErrorLabel>Insira um e-mail válido. Exemplo: meu@email.com</FormErrorLabel>
        }


        <textarea
          {...register?.("message", { required: true })}
          onChange={handleMessageChange}
          value={message}
          className={
            (errors?.message ? "border-red-600 bg-red-100 focus:outline-red-600 " : "border-black ") +
            "mt-3 border rounded-md p-3 w-full"
          }
          rows={5}
          placeholder="Sua mensagem"
        />
        {
          errors?.message?.type === "required"
          && <FormErrorLabel>A mensagem é obrigatória</FormErrorLabel>
        }

        <div className="mt-3">
          <Button icon={send} submit>Enviar</Button>
        </div>
      </form>

      <span className="bg-black text-neutral-100 mt-10">Vamos conversar!</span>
      <a href="mailto:vitor_fernando@outlook.com.br?subject=Contato Vitor Fernando" className="flex items-center justify-center mt-2 mb-28">
        <span className="text-sm mr-1">vitor_fernando@outlook.com.br</span>
        <Image src={arrow} alt="icon" height={18} />
      </a>
    </div>
  )
}