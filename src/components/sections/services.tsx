"use client";

import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, ShieldCheck, Wrench, FileText, Droplets } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
}

const servicesData: ServiceItem[] = [
  {
    id: "manutencao",
    title: "Manutenção",
    subtitle: "Serviços de reparo e otimização",
    description: "Atendimento técnico especializado em manutenção preventiva e corretiva de sistemas.",
    features: [
      "Reparo de redes de água e esgoto",
      "Troca de válvulas e bombas, chuveiros e registros",
      "Limpeza de fossas sépticas e caixas de gordura",
      "Detecção de vazamentos e inspeção de tubulações"
    ],
    image: "manutencao.jpg",
    icon: <Wrench className="size-4" /> 
  },
  {
    id: "projetos",
    title: "Esgoto e Água",
    subtitle: "Limpeza e tratamento de água e esgoto",
    description: "Limpeza de fossas sépticas, caixas de gordura e sistemas de esgoto.",
    features: [
      "Limpeza de fossas sépticas e caixas de gordura",
      "Desobstrução de tubulações e redes de esgoto",
      "Tratamento de água e esgoto",
      "Manutenção de sistemas de drenagem e escoamento"
    ],
    image: "/fossa.jpg",
    icon: <FileText className="size-4" />
  }
];

export function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-1.5 block">
              Serviços
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              O que a gente opera e oferece para você
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white p-5 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              {activeService.icon}
              <span>{activeService.subtitle}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {activeService.title}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {activeService.description}
            </p>

            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 block">
                tipos de serviços incluídos:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="size-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-16/10 sm:aspect-16/10 overflow-hidden rounded-xl border border-slate-100 shadow-sm bg-slate-100">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          {servicesData.map((service, index) => {
            const isSelected = activeIndex === index;
            return (
              <button
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected 
                    ? "bg-blue-600 border-blue-600 text-white shadow-sm" 
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-bold ${isSelected ? "text-blue-100" : "text-slate-400"}`}>
                    0{index + 1}
                  </span>
                  <div className={`p-1 rounded-md ${isSelected ? "bg-white/10 text-white" : "bg-slate-100 text-blue-600"}`}>
                    {service.icon}
                  </div>
                </div>
                <span className="text-xs font-bold line-clamp-1">
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}