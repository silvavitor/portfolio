"use client";
import { BaseSyntheticEvent, ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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

  async function sendMail() {
    const response = await fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, message
      })
    });
    console.log(response);
  }

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
    return handleSubmit((data) => {
      sendMail()
    })
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