import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import { headers } from "next/headers";
import { Footer, Header, WhatsAppCTA } from "@/components/SiteChrome";
import "./globals.css";

const SITE_TITLE = "Workflow International | Soluciones integrales con IA";

const archivo = Archivo({ variable: "--font-body", subsets: ["latin"] });
const archivoBlack = Archivo_Black({ variable: "--font-display", subsets: ["latin"], weight: "400" });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "weareworkflow.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const description = "ESTRATEGIA, TECNOLOGÍA Y OPERACIÓN INTELIGENTE";
  return {
    metadataBase,
    title: SITE_TITLE,
    description,
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png", sizes: "64x62" }],
      apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
    },
    openGraph: { title: SITE_TITLE, description, images: [{ url: new URL("/og.jpg", metadataBase).toString(), width: 1536, height: 864 }] },
    twitter: { card: "summary_large_image", title: SITE_TITLE, description, images: [new URL("/og.jpg", metadataBase).toString()] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${archivo.variable} ${archivoBlack.variable}`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
