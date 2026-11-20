import { NextResponse } from "next/server";
import { getSettings } from "@/lib/settings";

export async function POST(req: Request) {
  const { email, name } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const { mailerliteApiKey, mailerliteGroupId } = getSettings();

  if (!mailerliteApiKey) {
    console.log("[subscribe] MailerLite not configured — skipping:", email);
    return NextResponse.json({ ok: true });
  }

  const body: Record<string, unknown> = { email };
  if (name) body.fields = { name };
  if (mailerliteGroupId) body.groups = [mailerliteGroupId];

  const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${mailerliteApiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok && res.status !== 409) {
    const err = await res.json().catch(() => ({}));
    console.error("[subscribe] MailerLite error:", err);
    return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
