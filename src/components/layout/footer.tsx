import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function Footer() {

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Coluna Sobre */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-20 w-20 items-center justify-center">
                <img src="./logo.png" alt="Logo" />
              </div>
            </div>
            <h2 className="text-sm leading-relaxed text-slate-400">
              Referência em saneamento, manutenção, tratamento de água e gestão de efluentes de Viamão.
            </h2>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#hero" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="#servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link href="#contratar" className="hover:text-white transition-colors">Contratar</Link></li>
              <li><Link href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Especialidades */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Tratamento de Efluentes</li>
              <li>Redes de Abastecimento</li>
              <li>Laudos e Licenciamento</li>
              <li>Projetos Hidráulicos</li>
            </ul>
          </div>

          {/* Atendimento RS */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Atendimento  </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Atendimento especializado para empresas, loteamentos e indústrias em todo o munícipio de Viamão.
            </p>
            <div className="text-xs text-slate-300 font-mono bg-slate-900 p-3 rounded-lg border border-slate-800">
              contato@rubemsaneamento.com
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0">Desenvolvido por Daniel Batista dos Santos.</p>
        </div>
      </div>
    </footer>
  );
}