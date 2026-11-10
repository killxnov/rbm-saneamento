"use client";

import { ArrowRight, Droplets } from "lucide-react";
import Link from "next/link";

export function Hero() {
  // Função simplificada: apenas rola suavemente até a seção de contrato
  const handleRequestQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formSection = document.getElementById("contratar");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-32 bg-slate-950 text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/header.png"
          alt="Infraestrutura de Saneamento e Engenharia Hídrica"
          className="h-full w-full object-cover object-center opacity-30 scale-105 transform transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl lg:text-left">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs md:text-sm font-medium text-blue-300 backdrop-blur-sm mb-6">
            <Droplets className="size-4 text-blue-400" />
            <span>Referência em manutenção de saneamento em Viamão</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.15] text-white">
            Serviços especializados em <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">SANEAMENTO</span>
          </h1>

          <h2 className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Encanamento, limpeza de fossa, instalação de rede e manutenções hidráulicas em geral. Atendimento técnico especializado para resolver qualquer problema no seu imóvel ou microempreendimento.
          </h2>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contratar"
                onClick={handleRequestQuote}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all hover:bg-blue-500 hover:shadow-blue-900/60 active:scale-[0.98] w-full sm:w-auto"
                aria-label="Solicitar orçamento"
              >
                Solicitar orçamento
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
{/* Botão para rolar até a seção de serviços 
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                href="#servicos"
                onClick={handleRequestQuote}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-900/50 px-8 py-4 text-sm font-semibold backdrop-blur-sm text-slate-200 transition-all hover:bg-white/10 hover:text-white"
                aria-label="Nossas soluções">
                Nossas soluções
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}