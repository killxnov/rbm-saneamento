import { ArrowRight, CheckCircle2, Droplets, ShieldAlert, Award } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-32 bg-slate-950 text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/header.png"
          alt="Infraestrutura de Saneamento e Engenharia Hídrica"
          className="h-full w-full object-cover object-center opacity-30 scale-105 transform transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/35 to-slate-950/70" />
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
            Encanamento, limpeza de fossa, instalação de rede e manutenções hidráulicas em geral. Atendimento técnico especializado para resolver qualquer problema no seu imóvel.
          </h2>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contratar"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-[#2d6fffcc] px-8 py-4 text-sm font-semibold backdrop-blur-sm text-slate-200 transition-all hover:bg-blue-500 active:scale-95"
              >
                Faça um orçamento
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/10 px-8 py-4 text-sm font-semibold backdrop-blur-sm text-slate-200 transition-all hover:bg-slate-800/50 hover:text-white"
              >
                Conheça nosso trabalho
              </Link>
            </div>

            <div className="flex flex-col justify-center sm:justify-start sm:ml-2 pt-5 sm:pt-0 sm:pl-6">
              <span className="text-[11px] font-medium text-slate-400/80 uppercase tracking-wider mb-3 text-center sm:text-left">
                Acompanhe nosso instagram <br className="hidden sm:block" />
              </span>
              
              <div className="flex items-center justify-center sm:justify-start gap-3">

                {/*
                <a 
                  href="https://wa.me/5551997947527" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Fale conosco no WhatsApp"
                  className="group flex items-center justify-center h-11 w-11 rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 backdrop-blur-sm transition-all hover:border-emerald-500 hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95"
                >
                  <svg className="size-4.5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                  */}

                <a 
                  href="https://instagram.com/rubem.do.saneamento" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Siga-nos no Instagram"
                  className="group flex items-center justify-center h-11 w-11 rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 backdrop-blur-sm transition-all hover:border-pink-500 hover:bg-gradient-to-tr hover:from-pink-600 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-pink-500/25 active:scale-95"
                >
                  <svg className="size-4.5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}