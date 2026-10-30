"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const toggle = document.getElementById("mobile-menu-toggle") as HTMLInputElement;

      // Trava de segurança: Se o menu mobile estiver aberto, a navbar fica fixa.
      if (toggle && toggle.checked) {
        setLastScrollY(currentScrollY);
        return;
      }

      // Se rolou para baixo e passou de 80px (altura do topo), esconde.
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        // Se rolou para cima, mostra novamente.
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contratar", href: "#contratar" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Perguntas frequentes", href: "#faq" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const toggle = document.getElementById("mobile-menu-toggle") as HTMLInputElement;
    if (toggle) toggle.checked = false;
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full bg-[#020618] transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo Institucional */}
        <a 
          href="#hero" 
          onClick={(e) => handleScrollTo(e, "#hero")}
          className="flex items-center gap-2.5 group cursor-pointer relative z-50"
        >
          <div className="flex h-20 w-20 items-center justify-center">
            <img src="./RS.svg" alt="Logo" />
          </div>
        </a>

        {/* Desktop Navigation (Centralizada Absolutamente) */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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

        {/* Desktop CTA - Instagram Puro */}
        <div className="hidden md:flex items-center gap-4 relative z-50">
          <a
            href="https://www.instagram.com/rubem.do.saneamento"
            target="_blank"
            rel="noreferrer"
            aria-label="Visite nosso Instagram"
            className="group inline-flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 text-pink-500 transition-transform group-hover:scale-110"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>

        {/* ========================================================
            SISTEMA MOBILE NATIVO
            ======================================================== */}
        <div className="md:hidden flex items-center">
          
          <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
          
          {/* Overlay invisível usando top-28 */}
          <label 
            htmlFor="mobile-menu-toggle" 
            className="fixed inset-0 top-28 z-40 hidden peer-checked:block bg-[#02061800] cursor-default"
          ></label>

          <label 
            htmlFor="mobile-menu-toggle" 
            className="block peer-checked:hidden relative z-50 rounded-lg p-2 text-white hover:bg-white/5 cursor-pointer select-none"
            style={{ touchAction: 'manipulation' }}
          >
            <Menu className="size-6" />
          </label>

          <label 
            htmlFor="mobile-menu-toggle" 
            className="hidden peer-checked:block relative z-50 rounded-lg p-2 text-white hover:bg-white/5 cursor-pointer select-none"
            style={{ touchAction: 'manipulation' }}
          >
            <X className="size-6" />
          </label>

          {/* Menu Dropdown corrigido - largura 100% ancorada ao header sticky */}
          <div className="absolute top-full left-0 z-50 w-full bg-[#020618] px-6 py-6 shadow-xl hidden peer-checked:block animate-in fade-in slide-in-from-top-2 border-t border-white/5">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-base font-medium text-white hover:text-[#5393f8] transition-colors py-1 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 mt-2 border-t border-white/10 flex justify-center">
                <a
                  href="https://www.instagram.com/rubem.do.saneamento"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visite nosso Instagram"
                  className="group inline-flex items-center justify-center transition-transform active:scale-95 cursor-pointer pt-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-6 text-pink-500 transition-transform group-hover:scale-110"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}