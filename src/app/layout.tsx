import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HD Odontologia — Dr. Hermes Dário | Serra Talhada, PE",
  description:
    "Há mais de 18 anos cuidando de sorrisos em Serra Talhada. Implantes dentários, próteses, lentes de contato dental, aparelhos e estética. Mais de 25 mil pacientes tratados. Agende sua avaliação.",
  keywords: [
    "dentista Serra Talhada",
    "implante dentário Serra Talhada",
    "HD Odontologia",
    "Dr. Hermes Dário",
    "prótese dentária",
    "lentes de contato dental",
    "aparelho invisível",
    "odontologia Serra Talhada",
    "dentista Pernambuco",
  ],
  authors: [{ name: "HD Odontologia" }],
  openGraph: {
    title: "HD Odontologia — Dr. Hermes Dário | Serra Talhada, PE",
    description:
      "Há mais de 18 anos cuidando de sorrisos em Serra Talhada. Implantes dentários, próteses, lentes de contato dental, aparelhos e estética. Agende sua avaliação.",
    type: "website",
    locale: "pt_BR",
    siteName: "HD Odontologia",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <head>
        <meta name="theme-color" content="#faf8f5" />
      </head>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{
          fontFamily: "var(--font-body)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
