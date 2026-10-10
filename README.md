# Dream Clean Shine — Website

Professional cleaning services website for **Dream Clean Shine**, Michigan City, Indiana.

Built with Next.js 14 · TypeScript · Tailwind CSS 3 · Zod · Resend

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/                        # Next.js App Router pages
  page.tsx                  # Homepage
  about/                    # About page
  services/[slug]/          # Dynamic service pages (5 services)
  quote/                    # Quote request form + server action
  contact/                  # Contact page
  faq/                      # FAQ page
  thank-you/                # Post-submission confirmation
  sitemap.ts                # Auto-generated XML sitemap
  robots.ts                 # robots.txt

components/
  layout/                   # Navbar, Footer
  sections/                 # Homepage sections (Hero, TrustBar, etc.)
  ui/                       # Button, ServiceCard, SectionHeading, icons

lib/
  constants.ts              # All business info, nav links, services data
  metadata.ts               # Shared SEO metadata helper
  quote-schema.ts           # Zod validation schema for quote form
```

**Single source of truth:** all business details, service content, and navigation
live in `lib/constants.ts`. Update there; changes propagate site-wide.

---

## Email Configuration (Quote Form)

The quote form uses a server action (`app/quote/actions.ts`) with [Resend](https://resend.com).

1. Copy `.env.local.example` to `.env.local`
2. Add your Resend API key and destination email:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
QUOTE_TO_EMAIL=owner@dreamcleanshine.com
```

Until these are set, submissions are logged to the server console only.
The form will never show a false success state.

---

## Before Publishing

Items marked `[NEEDS BUSINESS CONFIRMATION]` in the codebase:

- Exact service territory (`lib/constants.ts` → `serviceArea`)
- Business email address (`lib/constants.ts` → `email`)
- Business hours (`lib/constants.ts` → `hours`)
- Cleaning checklists on each service page (marked in `lib/constants.ts`)
- FAQ answers for pricing, supplies, and rescheduling policies
- Structured data address (`components/StructuredData.tsx`)
- Owner photo and biography (`app/about/page.tsx`)
- All Unsplash placeholder images — replace with licensed or owned photography

---

## Deployment

The site is ready to deploy to [Vercel](https://vercel.com) or any Node.js host.

```bash
npm run build   # production build
npm run start   # start production server
```

Set `RESEND_API_KEY` and `QUOTE_TO_EMAIL` as environment variables in your hosting dashboard.
