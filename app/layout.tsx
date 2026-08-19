import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import { headers } from "next/headers";
import { Footer, Header, WhatsAppCTA } from "@/components/SiteChrome";
import "./globals.css";

const archivo = Archivo({ variable: "--font-body", subsets: ["latin"] });
const archivoBlack = Archivo_Black({ variable: "--font-display", subsets: ["latin"], weight: "400" });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "weareworkflow.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const description = "E S T R A T E G I A , T E C N O L O G Í A Y O P E R A C I Ó N I N T E L I G E N T E";
  return {
    metadataBase,
    title: { default: "WORKFLOW INT.", template: "%s | WORKFLOW INT." },
    description,
    openGraph: { title: "WORKFLOW INT.", description, images: [{ url: new URL("/og.png", metadataBase).toString(), width: 1536, height: 1024 }] },
    twitter: { card: "summary_large_image", title: "WORKFLOW INT.", description, images: [new URL("/og.png", metadataBase).toString()] },
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
