import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend ('re_7CKRkpws_NAZQZsauHkDmDFTuAK6C747d');
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'Isadora <isadora.bernardes74@hotmail.com>',
      to: ['isadora.bernardes74@hotmail.com'],
      subject: 'Hello world',
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}