import { FileText, Lock, ShieldCheck } from "lucide-react";

export function PrivacyModal() {
  return (
    <>
      {/* 🟢 Checkbox invisível para controlar o Modal de Termos nativamente via CSS */}
      <input type="checkbox" id="terms-modal-checkbox" className="peer hidden" />

      {/* 🟢 Modal / Pop-up de Termos controlado por peer-checked */}
      <div className="fixed inset-0 z-50 hidden peer-checked:flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
          
          {/* Cabeçalho do Modal */}
          <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="size-5 text-blue-600" />
              Termos de Uso e Política de Privacidade
            </h3>
            <label
              htmlFor="terms-modal-checkbox"
              className="text-slate-400 hover:text-slate-600 font-bold p-1 rounded-lg cursor-pointer"
            >
              ✕
            </label>
          </div>

          {/* Conteúdo do Modal (Com Scroll) */}
          <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Lock className="size-4 text-blue-600" />
                1. Compromisso com a Privacidade
              </h4>
              <p>
                A sua privacidade é de extrema importância para nós. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações pessoais (como Nome Completo, CPF, Telefone, E-mail e Endereço) fornecidas através do nosso formulário de contato.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <FileText className="size-4 text-blue-600" />
                2. Finalidade da Coleta de Dados
              </h4>
              <p>
                Os dados informados no formulário são utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Elaboração de orçamentos e propostas técnicas de engenharia e saneamento.</li>
                <li>Atendimento regulatório, laudos e licenciamentos ambientais exigidos em Viamão.</li>
                <li>Comunicação direta via telefone, WhatsApp ou e-mail para alinhamento de projetos.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="size-4 text-blue-600" />
                3. Segurança e LGPD
              </h4>
              <p>
                Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), garantimos que suas informações são mantidas em ambiente seguro e sigiloso, sem compartilhamento com terceiros, exceto por obrigatoriedade legal.
              </p>
            </div>
          </div>

          {/* Rodapé do Modal com Botões de Ação */}
          <div className="p-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-end gap-3">
            <label
              htmlFor="terms-modal-checkbox"
              className="w-full sm:w-auto text-center px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors cursor-pointer select-none"
            >
              Fechar
            </label>
            {/*}
            <button
              type="button"
              onClick={() => {
                setFormData({ ...formData, acceptedTerms: true });
                const modalCheckbox = document.getElementById("terms-modal-checkbox") as HTMLInputElement | null;
                if (modalCheckbox) modalCheckbox.checked = false;
                if (errors.acceptedTerms) {
                  setErrors({ ...errors, acceptedTerms: "" });
                }
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm shadow-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Aceitar e Marcar no Formulário
            </button> */}
          </div>

        </div>
      </div>
    </>
  );
}
