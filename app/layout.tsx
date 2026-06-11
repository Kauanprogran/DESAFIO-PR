import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "VetMóvel — Saúde Animal ao seu Alcance",
    template: "%s | VetMóvel",
  },
  description:
    "Plataforma brasileira de saúde animal que conecta tutores de pets a serviços veterinários móveis, adoção, banco de ração e emergências. Cuidado veterinário perto de você.",
  keywords: ["veterinário", "pet", "saúde animal", "banco de ração", "adoção", "emergência veterinária"],
  openGraph: {
    title: "VetMóvel — Saúde Animal ao seu Alcance",
    description:
      "Plataforma brasileira de saúde animal que conecta tutores de pets a serviços veterinários móveis, adoção, banco de ração e emergências.",
    locale: "pt_BR",
    type: "website",
    siteName: "VetMóvel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
