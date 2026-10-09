"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react"; // Mantendo motion/react do seu setup anterior
import { Wrench, Menu } from "lucide-react"; // Troquei o ícone Navigation por Wrench (Chave inglesa) para combinar com manutenção
import { cn } from "@/lib/utils";
import Link from "next/link";

// Links adaptados para sua Landing Page de prestação de serviços
const navItems = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#sobre" },
  { name: "Avaliações", href: "#avaliacoes" },
  { name: "Contato", href: "#contato" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const containerVariants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
    transition: {
      y: { type: "spring", damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      type: "spring",
      damping: 20,
      stiffness: 300,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3.5rem", // Ligeiramente maior para toque mobile
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const logoVariants = {
  expanded: { opacity: 1, x: 0, rotate: 0, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -25, rotate: -180, transition: { duration: 0.3 } },
};

const itemVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const collapsedIconVariants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  collapsed: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      delay: 0.15,
    }
  },
}

export function Navbar() {
  const [isExpanded, setExpanded] = React.useState(true);
  
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    
    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest; 
    } 
    else if (!isExpanded && latest < previous && (scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD)) {
      setExpanded(true);
    }
    
    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.1 } : {}}
        whileTap={!isExpanded ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={cn(
          "flex items-center overflow-hidden rounded-full border border-slate-200/50 bg-white/80 shadow-lg backdrop-blur-md h-12 md:h-14",
          !isExpanded && "cursor-pointer justify-center bg-blue-600/90 border-blue-500 shadow-blue-500/20 text-white" // Quando recolhe, fica azul com ícone branco para destaque
        )}
      >
        <motion.div
          variants={logoVariants}
          className="flex-shrink-0 flex items-center font-bold pl-4 pr-2 text-blue-600"
        >
          {/* Logo Ícone */}
          <Wrench className="h-5 w-5 mr-1" />
          <span className="hidden sm:inline-block text-slate-900">Rubem</span>
        </motion.div>
        
        <motion.div
          className={cn(
            "flex items-center gap-1 sm:gap-4 pr-2 sm:pr-4",
            !isExpanded && "pointer-events-none" 
          )}
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                href={item.href}
                onClick={(e) => {
                  e.stopPropagation(); // Evita que clicar no link dispare o clique do nav inteiro
                }}
                className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors px-3 py-2 rounded-full"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          
          {/* Botão de Destaque Extra para Orçamento (opcional, só aparece quando expandido) */}
          <motion.div variants={itemVariants} className="hidden md:block pl-2">
            <Link 
              href="#contato"
              onClick={(e) => e.stopPropagation()}
              className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              Orçamento Rápido
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            variants={collapsedIconVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
            className={!isExpanded ? "text-white" : "text-slate-800"} // Cor do ícone hamburguer
          >
            <Menu className="h-6 w-6" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}