"use client";

import Link from "next/link";
import { Menu, X, ShieldCheck, PhoneCall } from "lucide-react";

export function Navbar() {
  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contratar", href: "#contratar" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQ", href: "#faq" },
  ];

  // Apenas a função de rolagem (sem depender de state para fechar o menu)
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Fecha o menu nativamente pelo ID
    const toggle = document.getElementById("mobile-menu-toggle") as HTMLInputElement;
    if (toggle) toggle.checked = false;
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full  bg-[#020618]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo Institucional */}
        <a 
          href="#hero" 
          onClick={(e) => handleScrollTo(e, "#hero")}
          className="flex items-center gap-2.5 group cursor-pointer relative z-50"
        >
          <div className="flex h-20 w-20 items-center justify-center">
            <img src="./logo.png" alt="Logo" />
          </div>
          {/* Logo Textual
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">
              Rubem<span className="text-blue-600">.</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-500 uppercase mt-1 font-medium">
              Saneamento
            </span>
          </div> */}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium text-[#ffffff] transition-colors hover:text-[#5393f8] cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/5551997947527"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#23a82e] px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-emerald-500/20 transition-all hover:bg-[#2fbd3b] active:scale-95 cursor-pointer"
          >
            <svg className="size-4.5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* ========================================================
            SISTEMA MOBILE NATIVO (ZERO USESTATE, ZERO CONFLITOS)
            ======================================================== */}
        <div className="md:hidden flex items-center">
          
          {/* O "Cérebro" Invisível do Menu */}
          <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
          
          {/* O Overlay Invisível para fechar ao tocar fora */}
          <label 
            htmlFor="mobile-menu-toggle" 
            className="fixed inset-0 top-[73px] z-40 hidden peer-checked:block bg-[#02061800] cursor-default"
          ></label>

          {/* Botão de ABRIR (Menu Hambúrguer) */}
          <label 
            htmlFor="mobile-menu-toggle" 
            className="block peer-checked:hidden relative z-50 rounded-lg p-2 text-white hover:bg-[#020618] cursor-pointer select-none"
            style={{ touchAction: 'manipulation' }}
          >
            <Menu className="size-6" />
          </label>

          {/* Botão de FECHAR (X) */}
          <label 
            htmlFor="mobile-menu-toggle" 
            className="hidden peer-checked:block relative z-50 rounded-lg p-2 text-white hover:bg-[#020618] cursor-pointer select-none"
            style={{ touchAction: 'manipulation' }}
          >
            <X className="size-6" />
          </label>

          {/* O Menu em Si (Abre suavemente quando o checkbox é ativado) */}
          <div className="absolute top-full left-0 z-50 w-full bg-[#020618] px-6 py-6 shadow-xl hidden peer-checked:block animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-base font-medium text-white hover:text-blue-600 py-1 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 ">
                <a
                  href="https://wa.me/5551997947527"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#23a82e] py-3 text-sm font-medium text-white shadow-md shadow-emerald-500/20 cursor-pointer"
                >
                  <svg className="size-4.5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}