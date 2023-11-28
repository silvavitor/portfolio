"use client";

import Image from "next/image";
import Button from "@/components/Button";

import send from "@/public/images/icons/send.svg";
import arrow from "@/public/images/icons/arrow.svg";
import useContact from "./useContact";
import FormErrorLabel from "./formErrorLabel";
import { useLanguageContext } from "@/contexts/LanguageContext";

const texts = {
  header: {
    pt: 'Contato',
    en: 'Contact',
  },
  p1: {
    pt: 'Deixe-me saber se você está interessado em meus serviços ou colaboração.',
    en: 'Let me know if you are interested in my services or collaboration.',
  },
  p2: {
    pt: 'Responderei o quanto antes!',
    en: 'I will respond as soon as possible!',
  },
  namePlaceholder: {
    pt: 'Nome',
    en: 'Name',
  },
  nameError: {
    pt: 'O nome é obrigatório',
    en: 'Name is required',
  },
  emailPlaceholder: {
    pt: 'seu@email.com',
    en: 'your@email.com',
  },
  emailErrorRequired: {
    pt: 'O e-mail é obrigatório',
    en: 'E-mail is required',
  },
  emailErrorPattern: {
    pt: 'Insira um e-mail válido. Exemplo: meu@email.com',
    en: 'Enter a valid email. Example: your@email.com',
  },
  messagePlaceholder: {
    pt: 'Sua mensagem',
    en: 'Your message',
  },
  messageError: {
    pt: 'A mensagem é obrigatória',
    en: 'Message is required',
  },
  send: {
    pt: 'Enviar',
    en: "Send",
  },
  talk: {
    pt: 'Vamos conversar!',
    en: "Let's talk!",
  }
}

export default function Contact() {
  const { language } = useLanguageContext();

  const [{
    contact,
    register,
    errors,
  }, {
    handleChangeContact,
    onSubmit
  }] = useContact();

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto animate-bottomUpFadeIn">
      <h1 className="text-3xl font-bold">{texts.header[language]}</h1>
      <div className="mt-3 text-sm flex flex-col md:items-center">
        <p>{texts.p1[language]}</p>
        <p>{texts.p2[language]}</p>
      </div>
      <form
        onSubmit={onSubmit?.()}
        className="flex flex-col items-center w-full"
        noValidate
      >
        <input
          {...register?.("name", { required: true })}
          onChange={handleChangeContact}
          name="name"
          value={contact?.name}
          className={
            (errors?.name ? "border-red-600 bg-red-100 focus:outline-red-600 " : "border-black ") +
            "mt-3 border rounded-md p-3 w-full"
          }
          type="text"
          placeholder={texts.namePlaceholder[language]}
        />

        {
          errors?.name?.type === "required"
          && <FormErrorLabel>{texts.nameError[language]}</FormErrorLabel>
        }

        <input
          {...register?.("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          })}
          onChange={handleChangeContact}
          value={contact?.email}
          name="email"
          className={
            (errors?.email ? "border-red-600 bg-red-100 focus:outline-red-600 " : "border-black ") +
            "mt-3 border rounded-md p-3 w-full"
          }
          type="email"
          placeholder={texts.emailPlaceholder[language]}
        />

        {
          errors?.email?.type === "required"
            ? <FormErrorLabel>{texts.emailErrorRequired[language]}</FormErrorLabel>
            : errors?.email?.type === "pattern" &&
            <FormErrorLabel>{texts.emailErrorPattern[language]}</FormErrorLabel>
        }


        <textarea
          {...register?.("message", { required: true })}
          onChange={handleChangeContact}
          name="message"
          value={contact?.message}
          className={
            (errors?.message ? "border-red-600 bg-red-100 focus:outline-red-600 " : "border-black ") +
            "mt-3 border rounded-md p-3 w-full"
          }
          rows={5}
          placeholder={texts.messagePlaceholder[language]}
        />
        {
          errors?.message?.type === "required"
          && <FormErrorLabel>{texts.messageError[language]}</FormErrorLabel>
        }

        <div className="mt-3">
          <Button icon={send} submit>{texts.send[language]}</Button>
        </div>
      </form>

      <span className="bg-black text-neutral-100 mt-10">{texts.talk[language]}</span>
      <a href="mailto:vitor_fernando@outlook.com.br" className="flex items-center justify-center mt-2">
        <span className="text-sm mr-1">vitor_fernando@outlook.com.br</span>
        <Image src={arrow} alt="icon" height={18} />
      </a>
    </div>
  )
}