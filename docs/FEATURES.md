# Dream Clean Shine — Feature Documentation

---

## 1. Hero Image Slideshow

**File:** `components/sections/Hero.tsx`

All hero images are pre-rendered stacked in the DOM. Only the active image has `opacity-100`; the rest are `opacity-0`. A `setInterval` cycles the active index every 4 seconds. Images are shuffled once on mount. This approach avoids network-latency flash issues that occur when dynamically loading images.

---

## 2. Admin Dashboard

**Files:** `app/admin/page.tsx`, `app/admin/login/page.tsx`, `middleware.ts`, `app/api/admin/login/route.ts`, `app/api/admin/logout/route.ts`, `app/api/admin/settings/route.ts`, `lib/settings.ts`, `data/settings.json`

Password-protected dashboard at `/admin`. Login posts to `/api/admin/login`, which validates against the `ADMIN_PASSWORD` env var and sets an `admin_session` httpOnly cookie (8-hour expiry). `middleware.ts` protects all `/admin/*` and `/api/admin/*` routes, allowing only `/admin/login` and `/api/admin/login` through unauthenticated.

The dashboard has collapsible sections for each integration (Calendly, Resend, MailerLite, Google SEO, Stripe). Settings are saved to `data/settings.json` via a POST to `/api/admin/settings`. The GET endpoint masks secret values with `••••••••` to avoid exposing them in the browser. The POST endpoint skips overwriting any field that still contains the masked value.

**Managed settings:** `calendlyUrl`, `resendApiKey`, `resendFromEmail`, `quoteToEmail`, `mailerliteApiKey`, `mailerliteGroupId`, `googleSiteVerification`, `googleSearchConsoleUrl`, `stripePublishableKey`, `stripeSecretKey`, `stripeWebhookSecret`.

---

## 3. Pricing Page with Calendly Integration

**Files:** `app/pricing/page.tsx`, `app/pricing/PricingClient.tsx`, `app/pricing/PricingComponents.tsx`, `app/pricing/EstimateContext.tsx`

The pricing page is a client-side interactive estimator. Users select a service and add-ons; the `EstimateContext` tracks selections and the Calendly URL from settings. The `SelectedSummary` component builds a Calendly URL with `utm_source`, `utm_medium`, and `utm_content` query params encoding the selected service, add-ons, and estimated total. The CTA button reads "Schedule Now →" and opens the pre-filled Calendly booking page.

The Calendly URL is read from `data/settings.json` via `getSettings()` on the server and passed as a prop to `PricingClient`.

---

## 4. Quote Form with Nodemailer SMTP

**Files:** `app/quote/actions.ts`, `app/quote/page.tsx`, `app/quote/QuoteForm.tsx`, `lib/quote-schema.ts`

The quote form is a Next.js Server Action. On submission, it validates input with Zod (`lib/quote-schema.ts`) then sends an HTML + plain-text email via Nodemailer using Gmail SMTP (`smtp.gmail.com:587`). Credentials come from env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_TO`. If env vars are missing, the submission is logged to the server console only — the form never shows a false success state.

The quote page includes a "What happens next?" section explaining the video consultation walkthrough process.

---

## 5. Newsletter Signup with MailerLite

**Files:** `app/api/subscribe/route.ts`, `components/sections/NewsletterSignup.tsx`, `components/layout/Footer.tsx`

The `/api/subscribe` route accepts a POST with `{ email }`, reads the MailerLite API key and group ID from `getSettings()`, and posts to `connect.mailerlite.com/api/subscribers`. A 409 response (already subscribed) is treated as success. The `NewsletterSignup` component is a form-only component styled for the dark footer background. It lives in the footer as a top band with a pink gradient wash.

---

## 6. Thank-You Page

**File:** `app/thank-you/page.tsx`

Post-submission confirmation page with a 5-step video consultation flow. Includes a Calendly CTA (URL from `getSettings()`), a practical tip for the video call, and guidance on what to expect. Designed to reinforce the video walkthrough as a core business process.

---

## 7. Facebook Messenger Chat Widget

**Files:** `components/MessengerChat.tsx`, `app/layout.tsx`

The `MessengerChat` component injects the Facebook Customer Chat SDK via a `<script>` tag. It extracts the numeric page ID from the `BUSINESS.facebook` URL in `lib/constants.ts`. The widget uses `brand-pink` as the theme color. The component is imported in `app/layout.tsx` so it appears on every page.

> Note: The Facebook URL uses a username (`Dreamcleanshine`). The SDK requires a numeric page ID — this may need to be updated manually.

---

## 8. FAQ Page

**File:** `app/faq/page.tsx`

Redesigned with a dramatic dark hero section. FAQs are grouped into three categories: Services, Booking & Scheduling, and Pricing & Policies. All answers are always visible (no accordion). Questions are displayed in a 2-column card grid. A `FAQSchema` component injects a `FAQPage` JSON-LD structured data block for SEO. Includes a "Is a Zoom walkthrough required?" entry.

---

## 9. SEO & Structured Data

**Files:** `components/StructuredData.tsx`, `lib/metadata.ts`, `app/services/[slug]/page.tsx`, `app/locations/[city]/page.tsx`, `app/faq/page.tsx`, `app/sitemap.ts`, `app/robots.ts`

- **`StructuredData.tsx`**: Full `LocalBusiness` schema with 10-city `areaServed`, geo coordinates, opening hours, `offerCatalog`, `aggregateRating`, and 2 reviews.
- **`lib/metadata.ts`**: Shared metadata helper with `keywords` param, GEO meta tags (`geo.region`, `geo.placename`, `geo.position`, `ICBM`), and improved OG image alt.
- **Service pages**: `ServiceSchema` component with `BreadcrumbList` + `Service` JSON-LD.
- **Location pages**: `LocationSchema` component with `BreadcrumbList` + `CleaningService` JSON-LD.
- **FAQ page**: `FAQSchema` component with `FAQPage` JSON-LD.
- **`sitemap.ts`**: Includes static pages, 5 service pages, 9 location pages, and `/pricing` at priority 0.9.
- **`robots.ts`**: Blocks `/admin/` and `/api/` from crawlers.

---

## 10. Location Landing Pages

**Files:** `lib/locations.ts`, `app/locations/[city]/page.tsx`

9 location pages generated dynamically from `lib/locations.ts`. Each page has a hero, services grid, why-DCS section, and cross-links to other locations. Locations: Michigan City IN, La Porte IN, Valparaiso IN, Portage IN, Merrillville IN, Hammond IN, Chicago IL, Dyer IN, Calumet City IL.

> Gary IN is present in `StructuredData.tsx` areaServed but has no landing page — pending decision.

---

## 11. Navbar

**File:** `components/layout/Navbar.tsx`

Full-width layout (`w-full px-5 sm:px-8 lg:px-10`). Logo is `h-[88px]` on mobile, `h-[110px]` on desktop. Nav height is `h-[90px]` / `h-[116px]`. Navigation uses a group bubble (`bg-brand-ice-blue p-1.5`) with individual active items getting a white pill background.

---

## 12. Footer with Newsletter

**File:** `components/layout/Footer.tsx`

Top band: newsletter signup with pink gradient wash, heading, copy about discounts, and the `NewsletterSignup` form. Below: 4-column grid (brand, nav, services, contact). Bottom bar with copyright.

---

## 13. Mobile Sticky CTA Bar

**File:** `app/layout.tsx`

A sticky bottom bar on mobile with a "Schedule Now" CTA linking to the Calendly URL from settings. Visible only on small screens.

---

## 14. Settings Persistence

**Files:** `lib/settings.ts`, `data/settings.json`

`lib/settings.ts` exports `getSettings()` (reads `data/settings.json`) and `saveSettings()` (writes to it). Used server-side across the app to access Calendly URL, email config, MailerLite keys, and Stripe keys without hardcoding them. The admin dashboard is the UI for managing this file.

---

## 15. Favicon

**File:** `app/icon.svg`

Custom SVG favicon: ice blue background, large blue bubble, medium pink bubble, small blue bubble, white shine dots.

---

## Environment Variables

| Variable | Purpose |
|---|---|
| `ADMIN_PASSWORD` | Admin dashboard login password |
| `SMTP_HOST` | SMTP server (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | SMTP port (e.g. `587`) |
| `SMTP_USER` | SMTP username / sender email |
| `SMTP_PASS` | SMTP app password |
| `SMTP_TO` | Recipient email for quote submissions |

All other integration keys (Resend, MailerLite, Stripe, Calendly, Google) are managed via the admin dashboard and stored in `data/settings.json`.
