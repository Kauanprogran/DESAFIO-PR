import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { to, message } = await req.json();

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER;

    if (!accountSid || !authToken || !fromNumber) {
      return NextResponse.json(
        { error: "WhatsApp não configurado" },
        { status: 500 }
      );
    }

    const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const body = new URLSearchParams({
      To: `whatsapp:${to}`,
      From: `whatsapp:${fromNumber}`,
      Body: message,
    });

    const auth = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

    const response = await fetch(twilioUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.message }, { status: response.status });
    }

    return NextResponse.json({ success: true, sid: data.sid });
  } catch (error) {
    console.error("WhatsApp error:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem" },
      { status: 500 }
    );
  }
}
