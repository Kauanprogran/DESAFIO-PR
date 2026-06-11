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
});

export const metadata: Metadata = {
  title: "VetMóvel — Saúde Animal ao seu Alcance",
  description:
    "Plataforma brasileira de saúde animal que conecta tutores de pets a serviços veterinários móveis, adoção, banco de ração e emergências.",
  openGraph: {
    title: "VetMóvel — Saúde Animal ao seu Alcance",
    description:
      "Plataforma brasileira de saúde animal que conecta tutores de pets a serviços veterinários móveis, adoção, banco de ração e emergências.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
