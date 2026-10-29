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
  // Estado para controlar qual aba está aberta (null = todas fechadas)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-background dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase block">
            Tire as suas dúvidas
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
            Respostas diretas sobre os nossos serviços de saneamento.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={index}
              // O open é true apenas se o índice atual for igual ao openIndex do estado
              open={openIndex === index}
              className="group bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all duration-200"
            >
              <summary 
                // Previne o toggle nativo do HTML e usa a nossa lógica do React
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === index ? null : index);
                }}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer list-none select-none" 
                style={{ touchAction: 'manipulation' }}
              >
                <span className="font-semibold text-slate-900 dark:text-white text-base sm:text-lg pr-4">
                  {item.question}
                </span>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-transform duration-200 group-open:rotate-180 group-open:bg-blue-50 dark:group-open:bg-blue-900/30 group-open:text-blue-600 dark:group-open:text-blue-400">
                  <ChevronDown className="size-5 pointer-events-none" />
                </div>
              </summary>
              <div className="px-6 pb-6 pt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/60 dark:border-slate-800">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}