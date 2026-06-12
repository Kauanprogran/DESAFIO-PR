import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Help Pet — Saúde Animal no Paraná",
    template: "%s | Help Pet",
  },
  description:
    "Plataforma brasileira de saúde animal que conecta tutores de pets a serviços veterinários móveis, adoção, banco de ração e emergências no Paraná.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
