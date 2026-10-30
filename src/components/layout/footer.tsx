
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  MapPin,
} from "lucide-react";

const navigationLinks = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contratar", href: "#contratar" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Perguntas frequentes", href: "#faq" },
];

const specialties = [
  "Manutenção hidráulica",
  "Água e esgoto",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/[0.08] bg-black text-slate-400"
      aria-label="Rodapé do site"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-6">

          {/* Marca e apresentação */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-4">
            <Link
              href="#hero"
              aria-label="Rubem Saneamento — voltar ao início"
              className="inline-flex rounded-lg transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >

            </Link>

            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Soluções em saneamento, manutenção hidráulica,
              tratamento de água e gestão de efluentes, com
              atendimento em Viamão, RS.
            </p>

            <div className="flex items-start gap-2 text-sm text-slate-400">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-blue-400"
                aria-hidden="true"
              />
              <span>Atendimento em todo o município de Viamão.</span>
            </div>
          </div>

          {/* Navegação */}
          <nav
            aria-label="Navegação do rodapé"
            className="lg:col-span-2"
          >
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Navegação
            </h2>

            <ul className="space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-blue-400 focus-visible:outline-none focus-visible:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Especialidades */}
          <div className="lg:col-span-3">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Especialidades
            </h2>

            <ul className="space-y-3">
              {specialties.map((specialty) => (
                <li
                  key={specialty}
                  className="text-sm leading-5 text-slate-400"
                >
                  {specialty}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Consulte nossas opções de atendimento pelo formulário
              de orçamento.
            </p>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Fale conosco
            </h2>

            <p className="mb-4 text-sm leading-6 text-slate-400">
              Precisa de uma avaliação técnica ou deseja solicitar
              um orçamento? Entre em contato conosco.
            </p>

            <a
              href="mailto:contato@rubemsaneamento.com"
              className="group inline-flex items-center gap-2 break-all text-sm text-slate-200 transition-colors hover:text-blue-400"
            >
              <Mail
                className="size-4 shrink-0 text-blue-400"
                aria-hidden="true"
              />
              <span>contato@rbmsaneamento.com</span>
              <ArrowUpRight
                className="size-3.5 shrink-0 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            <Link
              href="#contratar"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Solicitar orçamento
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Copyright e créditos */}
        <div className="flex flex-col gap-4 border-t border-white/[0.08] py-6 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center sm:text-left">
            © {currentYear} RBM Saneamento.
            {" "}Todos os direitos reservados.
          </p>

          <p className="text-center">
            Desenvolvido por{" "}
            <Link 
            href="https://github.com/killxnov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 underline">
              Daniel Batista dos Santos
            </Link>.
          </p>

          <Link
            href="#hero"
            aria-label="Voltar ao topo da página"
            className="inline-flex items-center justify-center gap-2 self-center transition-colors hover:text-white sm:self-auto"
          >
            Voltar ao topo
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
