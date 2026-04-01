import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY || "");

const TO_EMAIL = "sharinigor1@gmail.com";

export async function POST(req: Request) {
  try {
    const { phone, email, category, venue, lot } = await req.json();

    if (!phone || !email) {
      return NextResponse.json({ error: "Телефон и почта обязательны" }, { status: 400 });
    }

    const subject = lot
      ? `Заявка на бронирование — ${venue}, лот ${lot}`
      : venue
        ? `Заявка на бронирование — ${venue}`
        : "Новая заявка на бронирование";

    await resend.emails.send({
      from: "Недвижка <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject,
      html: `
        <h2>Новая заявка на бронирование</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:8px 16px 8px 0;color:#888">Телефон</td><td style="padding:8px 0">${phone}</td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#888">Почта</td><td style="padding:8px 0">${email}</td></tr>
          ${category ? `<tr><td style="padding:8px 16px 8px 0;color:#888">Категория бизнеса</td><td style="padding:8px 0">${category}</td></tr>` : ""}
          ${venue ? `<tr><td style="padding:8px 16px 8px 0;color:#888">Площадка</td><td style="padding:8px 0">${venue}</td></tr>` : ""}
          ${lot ? `<tr><td style="padding:8px 16px 8px 0;color:#888">Лот</td><td style="padding:8px 0">${lot}</td></tr>` : ""}
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Ошибка отправки" }, { status: 500 });
  }
}
