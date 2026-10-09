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
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
            Depoimentos e Confiança
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 mt-2">
            Reconhecido por Líderes do Setor em Viamão
          </h2>
          <p className="mt-4 text-slate-600 text-base">
            Descubra por que os clientes confiam na nosso trabalho para garantir segurança hídrica e conformidade.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm transition-all hover:shadow-md hover:border-slate-300"
            >
              <div className="absolute top-6 right-6 text-blue-200 pointer-events-none">
                <Quote className="size-10" />
              </div>

              <div>
                {/* Estrelas */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>

                {/* Conteúdo */}
                <p className="text-slate-700 text-sm leading-relaxed relative z-10">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Informações do Autor */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="font-semibold text-slate-900 text-sm">{item.author}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.role} - <span className="text-blue-600 font-medium">{item.company}</span></p>
                <p className="text-[11px] text-slate-400 mt-1 uppercase tracking-wide">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}