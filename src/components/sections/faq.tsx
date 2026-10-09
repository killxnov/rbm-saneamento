"use client";

import { HelpCircle, ChevronDown } from "lucide-react";

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
  return (
    <section id="faq" className="py-20 md:py-28 bg-background text-slate-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center space-y-3">
{/*}
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600 mx-auto">
            <HelpCircle className="size-6" />
          </div>
*/}
          <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase block">
            Tire as suas dúvidas
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Respostas diretas sobre os nossos serviços de saneamento.
          </p>
        </div>

        {/* Lista de Acordeões com Details/Summary Nativo */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
            >
              <summary className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer list-none select-none" style={{ touchAction: 'manipulation' }}>
                <span className="font-semibold text-slate-900 text-base sm:text-lg pr-4">
                  {item.question}
                </span>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200/60 text-slate-600 transition-transform duration-200 group-open:rotate-180 group-open:bg-blue-50 group-open:text-blue-600">
                  <ChevronDown className="size-5 pointer-events-none" />
                </div>
              </summary>
              <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}