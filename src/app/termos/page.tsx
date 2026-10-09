"use client";

import Link from "next/link";
import { ShieldCheck, ArrowLeft, Lock, FileText, CheckCircle2 } from "lucide-react";

export default function TermosDeUsoPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Botão de Voltar
        <div>
          <Link
            href="/#contato"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm"
          >
            <ArrowLeft className="size-4" />
            Voltar para o Formulário de Contato
          </Link>
        </div> */}

        {/* Cabeçalho */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
            <ShieldCheck className="size-6" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Termos de Uso e Política de Privacidade
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>
        </div>

        {/* Conteúdo Detalhado */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="size-5 text-blue-600" />
              1. Compromisso com a Privacidade
            </h2>
            <p>
              A sua privacidade é de extrema importância para nós. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações pessoais (como Nome Completo, CPF, Telefone, E-mail e Endereço) fornecidas através do nosso formulário de contato e orçamento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="size-5 text-blue-600" />
              2. Coleta e Uso das Informações
            </h2>
            <p>
              Os dados solicitados no formulário são estritamente necessários para:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Elaboração de propostas comerciais e orçamentos personalizados para serviços de saneamento e engenharia em Viamão e região.</li>
              <li>Conformidade com exigências regulatórias, laudos técnicos e licenciamentos ambientais exigidos pelos órgãos competentes.</li>
              <li>Comunicação direta via telefone, WhatsApp ou e-mail para alinhamento técnico do seu projeto.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="size-5 text-blue-600" />
              3. Armazenamento e Segurança dos Dados
            </h2>
            <p>
              Adotamos rigorosas medidas técnicas e administrativas de segurança para proteger os seus dados contra acesso não autorizado, perda, destruição ou alteração. Suas informações não serão comercializadas, cedidas ou repassadas a terceiros sob nenhuma hipótese, exceto por obrigação legal ou regulatória.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-blue-600" />
              4. Direitos do Titular (LGPD)
            </h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados, você tem o direito de solicitar a qualquer momento a confirmação da existência de tratamento, acesso aos seus dados, correção de dados incompletos ou a exclusão de suas informações de nossa base de contato, enviando uma solicitação para nosso e-mail institucional: <strong>contato@rubemsaneamento.com</strong>.
            </p>
          </section>
        
        {/* Botão de Concordância
          <div className="pt-6 border-t border-slate-200">
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
            >
              Concordo e Desejo Retornar
            </Link>
          </div> */}

        </div>

      </div>
    </main>
  );
}