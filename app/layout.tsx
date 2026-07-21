import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost:3001";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogImage = `${protocol}://${host}/og.png`;

  return {
    title: "Barbearia Top | Estilo raiz, conforto moderno",
    description: "Cortes, barba e atendimento de primeira. Agende seu horário na Barbearia Top pelo WhatsApp.",
    openGraph: {
      title: "Barbearia Top",
      description: "Estilo raiz. Conforto moderno.",
      type: "website",
      locale: "pt_BR",
      images: [{ url: ogImage, width: 1776, height: 888, alt: "Barbearia Top — estilo raiz, conforto moderno" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Barbearia Top",
      description: "Estilo raiz. Conforto moderno.",
      images: [ogImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
