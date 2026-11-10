"use client";

import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "Como posso solicitar um serviço?",
    answer: "Você pode solicitar um serviço preenchendo o formulário de contato acima, nós o responderemos o mais rápido possível. *ATENÇÃO: Sempre fique atento ao seu celular, podemos entrar em contato com você"
  },
  {
    question: "Como funciona o atendimento e o serviço?",
    answer: "Após o confirmar o pedido, nosso especialista irá até o local na data e horário informado, se for de urgência extrema o especialista irá o mais rápido possível.",
  },
  {
    question: "O site não possui método de pagamento, como posso pagar pelos serviços?",
    answer: "O orçamento é feito a partir das respostas do formulário acima, e os preços são negociados diretamente pelo nosso WhatsApp."
  },
  {
    question: "A empresa atua em regiões vizinhas?",
    answer: "Não. Atualmente atendemos exclusivamente o município de Viamão, garantindo um serviço especializado e focado na realidade local."
  },
  {
    question: "Como posso solicitar um orçamento personalizado para o meu projeto?",
    answer: "Preencha o formulário de acima, indicando os dados básicos, o bairro e o serviço pretendido. A nossa equipa técnica analisará a solicitação com brevidade."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    // Fundo rigidamente escuro (slate-950) para ancorar perfeitamente a transição dos depoimentos
    <section id="faq" className="py-24 md:py-32 bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-wider text-blue-500 uppercase block">
            Tire as suas dúvidas
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
            Respostas diretas sobre os nossos serviços de saneamento.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="bg-white/5 rounded-2xl border border-white/10 shadow-sm overflow-hidden"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer select-none" 
                  style={{ touchAction: 'manipulation' }}
                >
                  <span className="font-semibold text-white text-base sm:text-lg pr-4">
                    {item.question}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-slate-400 transition-all duration-300 ${
                    isOpen ? "rotate-180 bg-blue-500/20 text-blue-400" : ""
                  }`}>
                    <ChevronDown className="size-5 pointer-events-none" />
                  </div>
                </button>
                
                {/* Contêiner com animação suave de altura que resolve o tranco no rodapé */}
                <div className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-4 text-sm text-slate-400 leading-relaxed border-t border-white/10">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
