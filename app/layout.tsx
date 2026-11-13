import type { Metadata } from "next";
import { Caveat, Francois_One, Inter, Lora } from "next/font/google";
import "./globals.css";
import { ModalsProvider } from "@/components/modals/modals-provider";
import { PrententiousGibberishProvider } from "@/app/pretentious-gibberish/_components/pretentious-gibberish-provider";
import { Analytics } from "@vercel/analytics/next";

const francois_font = Francois_One({
  variable: "--font-francois",
  subsets: ["latin"],
  weight: "400",
});

const font_inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const font_caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const font_lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sajawalhassan.vercel.app"),

  title: {
    default: "Sajawal's Den",
    template: "%s | Sajawal's Den",
  },
  description:
    "Wander here and you'll see coding projects, bash scripts, poems, quotes, and essays — made not for some career, but only for the desire of becoming human.",
  applicationName: "Sajawal's Den",
  authors: [{ name: "Sajawal Hassan", url: "https://sajawalhassan.vercel.app" }],
  creator: "Sajawal Hassan",
  keywords: [
    "Sajawal",
    "Sajawal Hassan",
    "developer portfolio",
    "philosophy",
    "literature",
    "poetry",
    "personal website",
  ],

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Sajawal's Den",
    title: "Sajawal's Den",
    description:
      "Wander here and you'll see coding projects, bash scripts, poems, quotes, and essays — made not for some career, but only for the desire of becoming human.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sajawal's Den",
    description:
      "Wander here and you'll see coding projects, bash scripts, poems, quotes, and essays — made not for some career, but only for the desire of becoming human.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },

  icons: {
    icon: [{ url: "/output.svg", type: "image/png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sajawal",
  url: "https://sajawalhassan.vercel.app",
  sameAs: ["https://github.com/sajawalhassan"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${font_inter.variable} ${francois_font.variable} ${font_caveat.variable} ${font_lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg">
        <ModalsProvider />
        <PrententiousGibberishProvider>{children}</PrententiousGibberishProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
      </body>
    </html>
  );
}
