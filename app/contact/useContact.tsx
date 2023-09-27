"use client";
import { BaseSyntheticEvent, ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

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

  async function sendEmail() {
    const response = await fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, message
      })
    });

    const body = await response.json();

    if (body?.id) {
      toast.success("E-mail enviado", {
        style: {
          border: '1px solid #000',
          padding: '8px',
          color: '#000',
          background: '#f5f5f5'
        }, iconTheme: {
          primary: '#000',
          secondary: '#f5f5f5',
        }
      });
      setName('');
      setEmail('');
      setMessage('');
    } else {
      toast.error("Ocorreu um erro! Tente mais tarde.", {
        style: {
          border: '1px solid #dc2626',
          padding: '8px',
          color: '#000',
          background: '#fee2e2'
        }, iconTheme: {
          primary: '#dc2626',
          secondary: '#fee2e2',
        }
      });
    }
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
      sendEmail();
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