import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DPhack Services - Servicios de Seguridad Informática",
  description: "Servicios especializados de seguridad informática y hacking ético",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
