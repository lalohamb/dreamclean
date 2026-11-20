import fs from "fs";
import path from "path";

const SETTINGS_PATH = path.join(process.cwd(), "data", "settings.json");

export const SETTINGS_DEFAULTS = {
  calendlyUrl:        "https://calendly.com/lalohambrickday/mvp-feasibility-diagnostic",
  resendApiKey:       "",
  resendFromEmail:    "",
  quoteToEmail:       "",
  mailerliteApiKey:   "",
  mailerliteGroupId:  "",
  googleSiteVerification:      "",
  googleSearchConsoleUrl:      "",
  googleAnalyticsMeasurementId: "",
  googleTagManagerId:           "",
  stripePublishableKey:   "",
  stripeSecretKey:        "",
  stripeWebhookSecret:    "",
};

export type Settings = typeof SETTINGS_DEFAULTS;

/** Values seeded from environment variables (lowest priority). */
function envDefaults(): Partial<Settings> {
  return {
    resendApiKey:       process.env.RESEND_API_KEY       || "",
    quoteToEmail:       process.env.QUOTE_TO_EMAIL       || "",
    mailerliteApiKey:   process.env.MAILERLITE_API_KEY   || "",
    mailerliteGroupId:  process.env.MAILERLITE_GROUP_ID  || "",
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || "",
    stripeSecretKey:      process.env.STRIPE_SECRET_KEY      || "",
    stripeWebhookSecret:  process.env.STRIPE_WEBHOOK_SECRET  || "",
    googleSiteVerification:       process.env.GOOGLE_SITE_VERIFICATION        || "",
    googleAnalyticsMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID   || "",
    googleTagManagerId:           process.env.NEXT_PUBLIC_GTM_ID              || "",
  };
}

export function getSettings(): Settings {
  let fromFile: Partial<Settings> = {};
  try {
    const raw = fs.readFileSync(SETTINGS_PATH, "utf-8");
    fromFile = JSON.parse(raw);
  } catch { /* file missing — fine */ }
  // Priority: settings.json > env vars > hardcoded defaults
  return { ...SETTINGS_DEFAULTS, ...envDefaults(), ...fromFile };
}

export function saveSettings(data: Partial<Settings>): Settings {
  const current = getSettings();
  const next = { ...current, ...data };
  fs.mkdirSync(path.dirname(SETTINGS_PATH), { recursive: true });
  fs.writeFileSync(SETTINGS_PATH, JSON.stringify(next, null, 2));
  return next;
}
