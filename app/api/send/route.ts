import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    const data = await resend.emails.send({
      from: `${name} <vitor@resend.dev>`,
      to: "vitor_fernando@outlook.com.br",
      subject: "Contato formulário portfolio",
      text: `Email: ${email}. Mensagem: ${message}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('error on send: ', error);
    return NextResponse.json({ error });
  }
}
