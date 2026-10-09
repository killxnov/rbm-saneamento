import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroSection() {
  return <HeroParallax products={services} />;
}

// Imagens corrigidas e validadas
export const services = [
  {
    title: "Instalação Elétrica",
    link: "#contato",
    thumbnail: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600",
  },
  {
    title: "Pintura Residencial", // Essa era a que estava quebrada! Link novo.
    link: "#contato",
    thumbnail: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600",
  },
  {
    title: "Hidráulica",
    link: "#contato",
    thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600",
  },
  {
    title: "Manutenção Geral",
    link: "#contato",
    thumbnail: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=600",
  },
  {
    title: "Projetos de Madeira",
    link: "#contato",
    thumbnail: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=600",
  },
  // Repetindo para preencher o grid de 15 cards
  { title: "Instalação Elétrica", link: "#contato", thumbnail: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600" },
  { title: "Pintura Residencial", link: "#contato", thumbnail: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600" },
  { title: "Hidráulica", link: "#contato", thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600" },
  { title: "Manutenção Geral", link: "#contato", thumbnail: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=600" },
  { title: "Projetos de Madeira", link: "#contato", thumbnail: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=600" },
  { title: "Instalação Elétrica", link: "#contato", thumbnail: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600" },
  { title: "Pintura Residencial", link: "#contato", thumbnail: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600" },
  { title: "Hidráulica", link: "#contato", thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600" },
  { title: "Manutenção Geral", link: "#contato", thumbnail: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=600" },
  { title: "Projetos de Madeira", link: "#contato", thumbnail: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=600" },
];