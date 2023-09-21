"use client";
import { BaseSyntheticEvent, ChangeEvent, SyntheticEvent, useState } from "react";
import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  email: string
  name: string
  message: string
}

export default function useContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleMessageChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }

  function onSubmit(): (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void> {
    return handleSubmit((data) => console.log(data))
  }

  return [{
    name,
    email,
    message,
    register,
    errors,
  }, {
    handleEmailChange,
    handleNameChange,
    handleMessageChange,
    onSubmit
  }];
}