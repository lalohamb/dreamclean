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
  googleSiteVerification: "",
  googleSearchConsoleUrl: "",
  stripePublishableKey:   "",
  stripeSecretKey:        "",
  stripeWebhookSecret:    "",
};

export type Settings = typeof SETTINGS_DEFAULTS;

export function getSettings(): Settings {
  try {
    const raw = fs.readFileSync(SETTINGS_PATH, "utf-8");
    return { ...SETTINGS_DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return { ...SETTINGS_DEFAULTS };
  }
}

export function saveSettings(data: Partial<Settings>): Settings {
  const current = getSettings();
  const next = { ...current, ...data };
  fs.mkdirSync(path.dirname(SETTINGS_PATH), { recursive: true });
  fs.writeFileSync(SETTINGS_PATH, JSON.stringify(next, null, 2));
  return next;
}
