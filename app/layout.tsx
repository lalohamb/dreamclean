import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:  `${BUSINESS.name} | Professional Cleaning Services in Michigan City, IN`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Dream Clean Shine offers professional residential cleaning, office cleaning, deep cleaning, move-in/move-out cleaning, and home organization in Michigan City, Indiana.",
  metadataBase: new URL("https://dreamcleanshine.com"),
  openGraph: {
    siteName: BUSINESS.name,
    locale:   "en_US",
    type:     "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-body antialiased">
        <StructuredData />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        {/* Mobile sticky CTA */}
        <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-slate-200 px-4 py-3 flex gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border-2 border-brand-blue text-brand-blue font-semibold text-sm"
            aria-label={`Call ${BUSINESS.phone}`}
          >
            Call Us
          </a>
          <a
            href="/quote"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-brand-pink text-white font-semibold text-sm"
          >
            Get a Quote
          </a>
        </div>
      </body>
    </html>
  );
}
