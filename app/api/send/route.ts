import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Contato Portfolio <contato@vitorfernando.dev>",
      to: "vitor_fernando@outlook.com.br",
      subject: "Contato formulário portfolio",
      text: "Teste",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
