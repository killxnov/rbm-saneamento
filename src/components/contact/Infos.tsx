import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="lg:col-span-5 space-y-6">
      <div>
        <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">Contratar</span>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white mt-2">Solicite uma análise técnica ou orçamento</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          Preencha todo o formulário parar gerar automáticamente um serviço personalizado, ao finalizar você será redirecionado automáticamente para nosso WhatsApp com a mensagem pronta para fecharmos um orçamento de acordo com seu serviço solicitado.
        </p>
      </div>
      
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        {/*
        <a href="https://wa.me/5551995225470" target="_blank" rel="noreferrer" className="flex items-start gap-4 cursor-pointer group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors"><Phone className="size-5" /></div>
          <div><h3 className="text-sm font-semibold text-slate-900 dark:text-white">Atendimento WhatsApp</h3><p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">(51) 99522-5470</p></div>
        </a>
        */}
        <a href="mailto:dropxitado@gmail.com" className="flex items-start gap-4 cursor-pointer group">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors"><Mail className="size-5" /></div>
          <div><h3 className="text-sm font-semibold text-slate-900 dark:text-white">E-mail</h3><p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">dropxitado@gmail.com</p></div>
        </a>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"><MapPin className="size-5" /></div>
          <div><h3 className="text-sm font-semibold text-slate-900 dark:text-white">Área de Atuação</h3><p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">Cobertura completa em todo o município de Viamão.</p></div>
        </div>
      </div>
    </div>
  );
}