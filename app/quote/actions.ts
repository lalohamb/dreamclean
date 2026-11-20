"use server";

import { quoteSchema } from "@/lib/quote-schema";
import nodemailer from "nodemailer";

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
    propertySize:  formData.get("propertySize")  || undefined,
    bedrooms:      formData.get("bedrooms")      || undefined,
    bathrooms:     formData.get("bathrooms")     || undefined,
    preferredDate: formData.get("preferredDate") || undefined,
    frequency:     formData.get("frequency")     || undefined,
    priorities:    formData.get("priorities")    || undefined,
    comments:      formData.get("comments")      || undefined,
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

  const d = parsed.data;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_TO } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_TO) {
    console.log("[quote] SMTP not configured. Submission received:", d);
    return { status: "success", message: "Your request has been received. We'll be in touch shortly." };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT ?? 587),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Dream Clean Shine" <${SMTP_USER}>`,
      to: SMTP_TO,
      replyTo: d.email,
      subject: `New Quote Request from ${d.fullName}`,
      text: `
New Quote Request — Dream Clean Shine
======================================
Name:           ${d.fullName}
Email:          ${d.email}
Phone:          ${d.phone}
Service:        ${d.service}
Property Type:  ${d.propertyType}
City:           ${d.city}
Size:           ${d.propertySize ?? "—"}
Bedrooms:       ${d.bedrooms ?? "—"}
Bathrooms:      ${d.bathrooms ?? "—"}
Preferred Date: ${d.preferredDate ?? "—"}
Frequency:      ${d.frequency ?? "—"}
Priorities:     ${d.priorities ?? "—"}
Comments:       ${d.comments ?? "—"}
      `.trim(),
      html: `
<h2 style="color:#263445">New Quote Request — Dream Clean Shine</h2>
<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">Name</td><td style="padding:8px">${d.fullName}</td></tr>
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">Email</td><td style="padding:8px"><a href="mailto:${d.email}">${d.email}</a></td></tr>
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">Phone</td><td style="padding:8px"><a href="tel:${d.phone}">${d.phone}</a></td></tr>
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">Service</td><td style="padding:8px">${d.service}</td></tr>
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">Property Type</td><td style="padding:8px">${d.propertyType}</td></tr>
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">City</td><td style="padding:8px">${d.city}</td></tr>
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">Size</td><td style="padding:8px">${d.propertySize ?? "—"}</td></tr>
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">Bedrooms</td><td style="padding:8px">${d.bedrooms ?? "—"}</td></tr>
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">Bathrooms</td><td style="padding:8px">${d.bathrooms ?? "—"}</td></tr>
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">Preferred Date</td><td style="padding:8px">${d.preferredDate ?? "—"}</td></tr>
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">Frequency</td><td style="padding:8px">${d.frequency ?? "—"}</td></tr>
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">Priorities</td><td style="padding:8px">${d.priorities ?? "—"}</td></tr>
  <tr><td style="padding:8px;background:#EFF8FF;font-weight:600">Comments</td><td style="padding:8px">${d.comments ?? "—"}</td></tr>
</table>
      `.trim(),
    });
  } catch (err) {
    console.error("[quote] Email send failed:", err);
    return { status: "error", message: "There was a problem sending your request. Please call us directly." };
  }

  return { status: "success", message: "Your request has been received. We'll be in touch shortly." };
}
