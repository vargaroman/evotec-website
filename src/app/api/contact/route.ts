import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactFormSchema } from "@/lib/validation/contact";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = contactFormSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Neplatné údaje formulára." },
      { status: 400 }
    );
  }

  const { name, email, company, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    console.log("Nová správa z kontaktného formulára:", parsed.data);
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev",
    to,
    replyTo: email,
    subject: `Nová správa od ${name}${company ? ` (${company})` : ""}`,
    text: message,
  });

  if (error) {
    return NextResponse.json(
      { error: "Správu sa nepodarilo odoslať." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
