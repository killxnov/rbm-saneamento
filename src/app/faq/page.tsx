"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, HelpCircle, ChevronDown, ShieldCheck, PhoneCall, Mail } from "lucide-react";

const faqItems = [
  {
    question: "Quais documentos são necessários para o licenciamento ambiental de um loteamento?",
    answer: "Para iniciar o processo de licenciamento ambiental de loteamentos ou empreendimentos imobiliários, geralmente são exigidos documentos como a Matriz da Área (Certidão de Registro de Imóveis), levantamento planialtimétrico, projeto urbanístico preliminar, caracterização da vegetação e corpos hídricos locais, além de Anotações de Responsabilidade Técnica (ART/RRT) dos profissionais envolvidos."
  },
  {
    question: "Como funciona o projeto e dimensionamento de uma Estação de Tratamento de Efluentes (ETE)?",
    answer: "O projeto de uma ETE começa com o estudo de vazão e carga orgânica gerada pelo empreendimento (residencial, comercial ou industrial). Com base nisso, dimensionamos os tratamentos primário, secundário e terciário necessários para atender rigorosamente aos padrões de lançamento exigidos pelos órgãos ambientais do estado e do município."
  },
  {
    question: "Qual é o prazo médio para a emissão de laudos técnicos e aprovação de projetos?",
    answer: "O prazo varia conforme a complexidade do projeto e o escopo da demanda técnica. Laudos e vistorias pontuais costumam ser entregues em poucos dias úteis, enquanto projetos completos de infraestrutura de saneamento e licenciamentos dependem dos trâmites de análise dos órgãos fiscalizadores competentes."
  },
  {
    question: "A empresa atende em toda a região de Viamão e municípios vizinhos?",
    answer: "Sim! Possuímos ampla atuação técnica em todo o município de Viamão e regiões metropolitanas do Rio Grande do Sul, oferecendo suporte completo in loco, consultoria regulatória e execução de obras de saneamento."
  },
  {
    question: "Como posso solicitar um orçamento personalizado para o meu projeto?",
    answer: "Você pode preencher o formulário diretamente na nossa página inicial na seção de contato, informando os dados básicos, o município e o serviço de interesse. Nossa equipe técnica analisará a demanda e retornará rapidamente com uma proposta detalhada."
  },
  {
    question: "Os projetos atendem às normas da FEPAM e legislações ambientais vigentes?",
    answer: "Absolutamente. Todos os nossos projetos de engenharia hídrica, redes de água e esgoto e licenciamentos são elaborados em estrita conformidade com as normas da ABNT, resoluções do CONSEMA, legislações municipais e diretrizes da FEPAM."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Botão de Voltar */}
        <div>
          <Link
            href="/#contato"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm"
          >
            <ArrowLeft className="size-4" />
            Voltar para a Página Principal
          </Link>
        </div>

        {/* Cabeçalho */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
            <HelpCircle className="size-6" />
          </div>
          <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
            Tire suas dúvidas
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Perguntas Frequentes (FAQ)
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
            Respostas claras e objetivas sobre nossos serviços de engenharia de saneamento, licenciamento ambiental, ETEs e infraestrutura hídrica.
          </p>
        </div>

        {/* Lista de Acordeões */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-semibold text-slate-900 text-base sm:text-lg pr-4">
                    {item.question}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""}`}>
                    <ChevronDown className="size-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in slide-in-from-top-2">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Card de Atendimento Extra */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-8 rounded-2xl shadow-sm space-y-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold">Ainda tem dúvidas sobre o seu projeto?</h3>
            <p className="text-sm text-slate-300 max-w-md">
              Nossa equipe de engenheiros está pronta para esclarecer todas as especificações técnicas da sua demanda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
            >
              <PhoneCall className="size-4" />
              Falar com Especialista
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}