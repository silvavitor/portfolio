"use client";
import { BaseSyntheticEvent, ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormValues = {
  name: string
  email: string
  message: string
}

export default function useContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [contact, setContact] = useState<FormValues>({ name: '', email: '', message: '' });

  function handleChangeContact(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setContact((prevContact) => ({
      ...prevContact,
      [event.target.name]: event.target.value
    }))
  };

  async function sendEmail() {
    const response = await fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
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

      setContact({ name: '', email: '', message: '' });

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

  function onSubmit(): (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void> {
    return handleSubmit(() => {
      sendEmail();
    })
  }

  return [{
    contact,
    register,
    errors,
  }, {
    handleChangeContact,
    onSubmit
  }];
}