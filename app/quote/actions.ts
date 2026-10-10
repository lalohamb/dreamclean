"use server";

import { quoteSchema } from "@/lib/quote-schema";
import { BUSINESS } from "@/lib/constants";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitQuote(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    fullName:      formData.get("fullName"),
    email:         formData.get("email"),
    phone:         formData.get("phone"),
    service:       formData.get("service"),
    propertyType:  formData.get("propertyType"),
    city:          formData.get("city"),
    propertySize:  formData.get("propertySize") || undefined,
    bedrooms:      formData.get("bedrooms")     || undefined,
    bathrooms:     formData.get("bathrooms")    || undefined,
    preferredDate: formData.get("preferredDate")|| undefined,
    frequency:     formData.get("frequency")    || undefined,
    priorities:    formData.get("priorities")   || undefined,
    comments:      formData.get("comments")     || undefined,
    consent:       formData.get("consent") === "true" ? true : undefined,
  };

  const parsed = quoteSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const data = parsed.data;

  // ── Email delivery ────────────────────────────────────────────────────────
  // Requires RESEND_API_KEY environment variable.
  // Set RESEND_API_KEY and QUOTE_TO_EMAIL in .env.local before deploying.
  // Until configured, submissions are logged server-side only.
  // ─────────────────────────────────────────────────────────────────────────
  const apiKey    = process.env.RESEND_API_KEY;
  const toEmail   = process.env.QUOTE_TO_EMAIL || BUSINESS.email;
  let emailSent   = false;

  if (apiKey && toEmail) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      const body = `
New Quote Request — Dream Clean Shine
======================================
Name:          ${data.fullName}
Email:         ${data.email}
Phone:         ${data.phone}
Service:       ${data.service}
Property Type: ${data.propertyType}
City:          ${data.city}
Size:          ${data.propertySize ?? "—"}
Bedrooms:      ${data.bedrooms ?? "—"}
Bathrooms:     ${data.bathrooms ?? "—"}
Preferred Date:${data.preferredDate ?? "—"}
Frequency:     ${data.frequency ?? "—"}
Priorities:    ${data.priorities ?? "—"}
Comments:      ${data.comments ?? "—"}
      `.trim();

      await resend.emails.send({
        from:    `Dream Clean Shine <noreply@dreamcleanshine.com>`,
        to:      [toEmail],
        replyTo: data.email,
        subject: `New Quote Request from ${data.fullName}`,
        text:    body,
      });

      emailSent = true;
    } catch (err) {
      console.error("[quote] Email send failed:", err);
    }
  } else {
    // Log to server console until email is configured
    console.log("[quote] RESEND_API_KEY not configured. Submission received:", data);
  }

  return {
    status: "success",
    message: emailSent
      ? "Your request has been received. We'll be in touch shortly."
      : "Your request has been received. We'll be in touch shortly. (Note to admin: configure RESEND_API_KEY and QUOTE_TO_EMAIL to enable email delivery.)",
  };
}
