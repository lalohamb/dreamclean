import { NextResponse } from "next/server";
import { getSettings, saveSettings, SETTINGS_DEFAULTS } from "@/lib/settings";

const SECRET_FIELDS = ["resendApiKey", "stripeSecretKey", "stripeWebhookSecret", "mailerliteApiKey"];

function maskSecrets(settings: typeof SETTINGS_DEFAULTS) {
  const out: Record<string, string> = { ...settings };
  for (const key of SECRET_FIELDS) {
    if (out[key]) out[key] = "••••••••";
  }
  return out;
}

export async function GET() {
  return NextResponse.json(maskSecrets(getSettings()));
}

export async function POST(req: Request) {
  const body = await req.json() as Partial<typeof SETTINGS_DEFAULTS>;

  if (body.calendlyUrl !== undefined && !body.calendlyUrl.startsWith("https://calendly.com/")) {
    return NextResponse.json({ error: "Invalid Calendly URL" }, { status: 400 });
  }

  // Don't overwrite secrets if the masked placeholder was sent back
  const current = getSettings();
  const cleaned: Partial<typeof SETTINGS_DEFAULTS> = { ...body };
  for (const key of SECRET_FIELDS) {
    const k = key as keyof typeof SETTINGS_DEFAULTS;
    if (cleaned[k] === "••••••••") cleaned[k] = current[k];
  }

  const updated = saveSettings(cleaned);
  return NextResponse.json(maskSecrets(updated));
}
