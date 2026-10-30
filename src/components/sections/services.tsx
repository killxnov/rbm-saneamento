"use client";

import { ArrowRight, CheckCircle2, FileText, Wrench } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
  formKeyword: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "manutencao",
    title: "Manutenção hidráulica",
    subtitle: "Diagnóstico e reparo",
    description: "Diagnóstico e reparo de problemas hidráulicos, com serviços de manutenção e substituição de componentes conforme a necessidade técnica.",
    features: [
      "Reparos em pias, sifões e tubulações",
      "Troca de registros, torneiras, válvulas e chuveiros",
      "Desentupimento de vasos sanitários e ralos",
      "Identificação de vazamentos e inspeção de redes"
    ],
    image: "/manutencao.jpg",
    icon: <Wrench className="size-4" />,
    formKeyword: "Manutenção",
  },
  {
    id: "esgoto",
    title: "Esgoto, fossas e drenagem",
    subtitle: "Limpeza e desobstrução",
    description: "Limpeza técnica de fossas sépticas, caixas de gordura e desobstrução de sistemas de esgoto e drenagem, conforme a necessidade do local.",
    features: [
      "Limpeza de fossas sépticas e caixas de gordura",
      "Desobstrução de tubulações e redes de esgoto",
      "Manutenção de sistemas de drenagem e escoamento",
      "Avaliação e reparo de problemas estruturais em esgotos"
    ],
    image: "/fossa.jpg",
    icon: <FileText className="size-4" />,
    formKeyword: "Esgoto",
  }
];

export function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  const handleRequestQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formSection = document.getElementById("contratar");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const select = document.getElementById("serviceType") as HTMLSelectElement;
        if (select) {
          const optionToSelect = Array.from(select.options).find(opt => 
            opt.value.toLowerCase().includes(activeService.formKeyword.toLowerCase())
          );
          if (optionToSelect) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value")?.set;
            nativeInputValueSetter?.call(select, optionToSelect.value);
            select.dispatchEvent(new Event("change", { bubbles: true }));
            select.focus();
            setTimeout(() => select.blur(), 150);
          }
        }
      }, 150); 
    }
  };

  return (
    <section id="servicos" className="relative w-full overflow-hidden bg-slate-950 min-h-[100vh] lg:min-h-[750px] flex flex-col justify-center">
      
      {/* 1. TRANSIÇÃO SUPERIOR (Hero -> Serviços) */}
      <div className="absolute top-0 inset-x-0 h-32 md:h-56 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent z-15 pointer-events-none"></div>

      {/* IMAGEM DE FUNDO EM TODA A SEÇÃO (Crossfade) */}
      {servicesData.map((service, index) => (
        <div 
          key={service.image}
          className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ease-in-out ${
            activeIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={service.image}
            alt={`Ilustração do serviço: ${service.title}`}
            fill
            priority={index === 0}
            className="object-cover object-center sm:object-right"
            sizes="100vw"
          />
        </div>
      ))}

      {/* GRADIENTE PROFISSIONAL E CONTRASTE */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b md:bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/30 md:to-transparent pointer-events-none"></div>

      {/* 2. TRANSIÇÃO INFERIOR (Serviços -> Contratação) */}
      <div className="absolute bottom-0 inset-x-0 h-32 md:h-56 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-15 pointer-events-none"></div>

      {/* Container Principal de Conteúdo */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        
        <div className="flex flex-col lg:w-[60%]">
          
          <div className="mb-6">
            <span className="text-xs font-bold tracking-widest text-blue-500 uppercase mb-3 block">
              Serviços
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Serviços de manutenção hidráulica e saneamento
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Conheça nossas soluções técnicas e encontre o serviço adequado para sua necessidade.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-12" role="tablist">
            {servicesData.map((service, index) => {
              const isSelected = activeIndex === index;
              return (
                <button
                  key={service.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(index)}
                  className={`inline-flex items-center gap-3 px-5 py-3.5 rounded-xl border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isSelected
                      ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/40"
                      : "bg-slate-900/50 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white backdrop-blur-md"
                  }`}
                >
                  <span className={`${isSelected ? "text-white" : "text-slate-400"}`}>
                    {service.icon}
                  </span>
                  <span className="text-sm font-semibold whitespace-nowrap">
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div key={activeService.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both">
            <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              {activeService.icon}
              <span>{activeService.subtitle}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {activeService.title}
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              {activeService.description}
            </p>

            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 block">
              O que está incluído no serviço:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-2xl">
              {activeService.features.map((feature, idx) => (
                <div 
                  key={`${activeService.id}-feature-${idx}`} 
                  className="flex items-start gap-3 text-sm text-slate-200 bg-slate-900/40 backdrop-blur-sm p-3.5 rounded-xl border border-white/5 transition-colors hover:bg-white/5"
                >
                  <CheckCircle2 className="size-4 text-blue-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <a
                href="#contratar"
                onClick={handleRequestQuote}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all hover:bg-blue-500 hover:shadow-blue-900/60 active:scale-[0.98] w-full sm:w-auto"
                aria-label={`Solicitar orçamento para ${activeService.title}`}
              >
                Solicitar orçamento
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}