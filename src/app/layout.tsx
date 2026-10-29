import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
// 1. Faltava importar o componente aqui no topo (ajuste o caminho se necessário)
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rubem Saneamento",
  description: "Soluções completas de engenharia sanitária e tratamento de efluentes em Viamão.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white`}>
        {/* Ativa o smooth scroll global em toda a aplicação */}
        <ReactLenis root>
          {children}
        </ReactLenis>
        
        {/* 2. Faltava a barra "/" no final para fechar a tag do botão */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}