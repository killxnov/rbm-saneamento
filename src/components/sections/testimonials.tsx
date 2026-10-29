"use client";

import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: "01",
    content: "Rubem conduziu todo o processo de licenciamento ambiental e instalação da nossa ETE industrial com extrema competência técnica e prazo cumprido. Rigor absoluto com as normativas do estado.",
    author: "Eng. Sérgio Serafim Jr.",
    role: "Empreendedor",
    company: "Indústria Metalúrgica RS",
    location: "Jardim Fiuza, Viamão/RS",
  },
  {
    id: "02",
    content: "Fundamental para o nosso condomínio de alto padrão. A gestão e implantação das redes de saneamento e drenagem trouxeram total tranquilidade técnica e jurídica para a entrega do empreendimento.",
    author: "Elisangela S. Miranda",
    role: "Gerente de Engenharia",
    company: "Construtora Vale Verde",
    location: "Jardim Krahe, Viamão/RS",
  },
  {
    id: "03",
    content: "O suporte em outorgas e macromedição foi impecável. Uma empresa séria que entende profundamente a complexidade e a legislação hídrica de Viamão.",
    author: "Daniel B. Santos",
    role: "Diretor Executivo",
    company: "Complexo Logístico Sul",
    location: "Santa Cecília, Viamão/RS",
  },
];

export function Testimonials() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-slate-50 text-slate-900 overflow-hidden">
      
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - 1.5rem)); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
            Depoimentos e Confiança
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 mt-2">
            Reconhecido por Líderes do Setor em Viamão
          </h2>
          <p className="mt-4 text-slate-600 text-base">
            Descubra por que os clientes confiam no nosso trabalho para garantir segurança hídrica e conformidade.
          </p>
        </div>
      </div>

      <div 
        className="flex overflow-hidden pause-on-hover w-full relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <div className="flex gap-6 animate-marquee shrink-0 pr-6">
          {marqueeItems.map((item, index) => (
            <TestimonialCard key={`track1-${item.id}-${index}`} item={item} />
          ))}
        </div>
        
        <div aria-hidden="true" className="flex gap-6 animate-marquee shrink-0 pr-6">
          {marqueeItems.map((item, index) => (
            <TestimonialCard key={`track2-${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-slate-300 w-[320px] md:w-100 shrink-0">
      <div className="absolute top-6 right-6 text-blue-100 pointer-events-none transition-colors">
        <Quote className="size-10" />
      </div>

      <div>
        <div className="flex items-center gap-1 mb-6 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-4 fill-current" />
          ))}
        </div>
        <p className="text-slate-700 text-sm leading-relaxed relative z-10">
          &ldquo;{item.content}&rdquo;
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200">
        <p className="font-semibold text-slate-900 text-sm">
          {item.author}
        </p>
        <p className="text-xs text-slate-500 mt-0.5">
          {item.role} &bull; <span className="text-blue-600 font-medium">{item.company}</span>
        </p>
        <p className="text-[11px] text-slate-400 mt-1 uppercase tracking-wide">
          {item.location}
        </p>
      </div>
    </div>
  );
}