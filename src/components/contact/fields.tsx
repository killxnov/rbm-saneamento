"use client";

import { AlertCircle, CheckCircle2, ChevronDown, Loader2, MessageSquare, Send } from "lucide-react";
import { serviceOptions } from "@/lib/contact/constants";
import type { ContactFormData, ContactFormErrors } from "@/lib/contact/types";

type Props = {
  submitted: boolean;
  isSubmitting: boolean;
  serverError: string;
  lastSubmittedData: ContactFormData | null;
  loadingCep: boolean;
  formData: ContactFormData;
  errors: ContactFormErrors;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleCepBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleSendAgain: () => void;
  resetSubmission: () => void;
};

export function ContactFields(props: Props) {
  const { submitted, isSubmitting, serverError, lastSubmittedData, loadingCep, formData, errors,
    handleChange, handleCepBlur, handleSubmit, handleSendAgain, resetSubmission } = props;
  return (
    <>
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-2">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Solicitação Enviada com Sucesso!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm">
                  Os dados serão enviados para o nosso atendimento, o WhatsApp foi aberto automaticamente com o resumo do seu orçamento.
                </p>
                
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {lastSubmittedData && (
                    <button
                      onClick={handleSendAgain}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                    >
                      <MessageSquare className="size-4" />
                      Abrir WhatsApp Novamente
                    </button>
                  )}
                  <button
                    onClick={resetSubmission}
                    className="inline-flex items-center justify-center rounded-lg bg-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-300 transition-colors"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Nome Completo e CPF */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ex: Carlos Eduardo Silveira"
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 transition-colors ${
                        errors.fullName 
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500 bg-rose-50/30" 
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="size-3.5 shrink-0" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cpf" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      CPF *
                    </label>
                    <input
                      type="text"
                      id="cpf"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleChange}
                      placeholder="000.000.000-00"
                      maxLength={14}
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 transition-colors ${
                        errors.cpf 
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500 bg-rose-50/30" 
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                      }`}
                    />
                    {errors.cpf && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="size-3.5 shrink-0" />
                        {errors.cpf}
                      </p>
                    )}
                  </div>
                </div>

                {/* Telefone e E-mail */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Número de Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(51) 99999-9999"
                      maxLength={15}
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone 
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500 bg-rose-50/30" 
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="size-3.5 shrink-0" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@empresa.com.br"
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 transition-colors ${
                        errors.email 
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500 bg-rose-50/30" 
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="size-3.5 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* LINHA DE ENDEREÇO 1: CEP + Rua (Read-Only automática) */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-4">
                    <label htmlFor="cep" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center justify-between">
                      <span>CEP *</span>
                      {loadingCep && <Loader2 className="size-3 animate-spin text-blue-600" />}
                    </label>
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      value={formData.cep}
                      onChange={handleChange}
                      onBlur={handleCepBlur}
                      placeholder="00000-000"
                      maxLength={9}
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 transition-colors ${
                        errors.cep ? "border-rose-500 bg-rose-50/30" : "border-slate-300 focus:border-blue-600"
                      }`}
                    />
                    {errors.cep && <p className="mt-1 text-xs font-medium text-rose-600">{errors.cep}</p>}
                  </div>

                  <div className="sm:col-span-8">
                    <label htmlFor="street" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Rua *
                    </label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      value={formData.street}
                      readOnly
                      placeholder="Preenchida automaticamente via CEP"
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-700 bg-slate-100 cursor-not-allowed select-none ${
                        errors.street ? "border-rose-500 bg-rose-50/30" : "border-slate-300"
                      }`}
                    />
                    {errors.street && <p className="mt-1 text-xs font-medium text-rose-600">{errors.street}</p>}
                  </div>
                </div>

                {/* LINHA DE ENDEREÇO 2: Número + Complemento + Bairro + Município (Grid de 4 colunas) */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-3">
                    <label htmlFor="number" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Número *
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Ex: 1500"
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 transition-colors ${
                        errors.number ? "border-rose-500 bg-rose-50/30" : "border-slate-300 focus:border-blue-600"
                      }`}
                    />
                    {errors.number && <p className="mt-1 text-xs font-medium text-rose-600">{errors.number}</p>}
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="complement" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Compl. <span className="text-slate-400 font-normal lowercase">(opc.)</span>
                    </label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={formData.complement}
                      onChange={handleChange}
                      placeholder="Ex: Apto 204"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="neighborhood" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Bairro *
                    </label>
                    <input
                      type="text"
                      id="neighborhood"
                      name="neighborhood"
                      value={formData.neighborhood}
                      readOnly
                      placeholder="Via CEP"
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-700 bg-slate-100 cursor-not-allowed select-none ${
                        errors.neighborhood ? "border-rose-500 bg-rose-50/30" : "border-slate-300"
                      }`}
                    />
                    {errors.neighborhood && <p className="mt-1 text-xs font-medium text-rose-600">{errors.neighborhood}</p>}
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="municipality" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Município *
                    </label>
                    <input
                      type="text"
                      id="municipality"
                      name="municipality"
                      value={formData.municipality}
                      readOnly
                      className="w-full rounded-lg border border-slate-300 bg-slate-100 px-4 py-2.5 text-sm text-slate-700 cursor-not-allowed select-none"
                    />
                  </div>
                </div>

                {/* Urgência do Serviço */}
                <div>
                  <label htmlFor="urgency" className="block text-xs font-semibold uppercade tracking-wider text-slate-700 mb-1.5">
                    Urgencia do Serviço *
                  </label>
                  <div className="relative">
                    <select 
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className={`w-full appearance-none rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 transition-colors ${
                      errors.urgency
                        ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                    }`}

                    >
                      <option value="" disabled>Selecione a urgência...</option>
                      <option value="Urgencia extrema">Urgência extrema (o mais rápido possível)</option>
                      <option value="Urgente (agendar para hoje ou amanhã)">Urgente (agendar para hoje ou amanhã)</option>
                      <option value="Não urgente (marcar uma data e hora)">Não urgente (marcar uma data e hora)</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 size-4 text-slate-500 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {errors.urgency && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 animate-in fade-in slide-in-from-top-1">
                      <AlertCircle className="size-3.5 shrink-0" />
                      {errors.urgency}
                    </p>
                  )}
                </div>

                <div>
                    <label htmlFor="serviceType" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Serviço de Interesse *
                    </label>
                    <div className="relative">
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={`w-full appearance-none rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 transition-colors ${
                          errors.serviceType 
                            ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500 bg-rose-50/30" 
                            : "border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                        }`}
                      >
                        <option value="" disabled>Selecione o serviço...</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-500 pointer-events-none" />
                    </div>
                    {errors.serviceType && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="size-3.5 shrink-0" />
                        {errors.serviceType}
                      </p>
                    )}
                  </div>


                {/* Seleção de Data e Hora Condicional (Aparece apenas se for "Não urgente") */}
                {(formData.urgency === "Não urgente (marcar uma data e hora)" || formData.urgency === "Urgente (agendar para hoje ou amanhã)") && (
                  <div className="animate-in fade-in slide-in-from-top-2">
                    <label htmlFor="preferredDateTime" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Data e Hora Desejada *
                    </label>
                    <input
                      type="datetime-local"
                      id="preferredDateTime"
                      name="preferredDateTime"
                      value={formData.preferredDateTime}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 transition-colors ${
                        errors.preferredDateTime 
                          ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500 bg-rose-50/30" 
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-600"
                      }`}
                    />
                    {errors.preferredDateTime && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="size-3.5 shrink-0" />
                        {errors.preferredDateTime}
                      </p>
                    )}
                  </div>
                )}

                {/* Mensagem / Detalhes */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                    Detalhes do Projeto ou Demanda
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva brevemente o escopo do projeto, porte ou necessidade técnica..."
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 resize-none"
                  ></textarea>
                </div>

                {/* Termos de Privacidade e LGPD com Checkbox Hack para o Modal */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="acceptedTerms"
                      name="acceptedTerms"
                      checked={formData.acceptedTerms}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600 cursor-pointer shrink-0"
                    />
                    <label htmlFor="acceptedTerms" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                      Concordo com o tratamento dos meus dados pessoais (CPF, e-mail, telefone e endereço) para contato comercial e conformidade regulatória, conforme os{" "}
                      
                      {/* Label que aciona o Checkbox Hack do Modal */}
                      <label
                        htmlFor="terms-modal-checkbox"
                        className="text-blue-600 font-semibold underline hover:text-blue-800 transition-colors cursor-pointer inline"
                      >
                        Termos de Uso e Política de Privacidade
                      </label>
                      .*
                    </label>
                  </div>
                  {errors.acceptedTerms && (
                    <p className="flex items-center gap-1.5 text-xs font-medium text-rose-600 animate-in fade-in slide-in-from-top-1">
                      <AlertCircle className="size-3.5 shrink-0" />
                      {errors.acceptedTerms}
                    </p>
                  )}
                </div>

                {/* Mensagem de Erro do Servidor */}
                {serverError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2 text-rose-700 text-sm font-medium">
                    <AlertCircle className="size-4 shrink-0" />
                    {serverError}
                  </div>
                )}

                {/* Mensagem de Envio em Progresso / Botão Único */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Processando Dados Seguros...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Enviar Solicitação de Orçamento
                    </>
                  )}
                </button>
              </form>
            )}
    </>
  );
}
