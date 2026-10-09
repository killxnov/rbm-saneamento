import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/carousel";
import { AboutMe } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactForm } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-slate-50 text-slate-900">
      <Navbar />
      
      {/* O Hero Parallax ocupa largura total, então fica fora do container restrito */}
      <HeroSection />
      
      <div className="w-full max-w-md md:max-w-3xl lg:max-w-5xl mx-auto flex flex-col gap-16 pb-24 px-4">
        <AboutMe />
        <Testimonials />
        <ContactForm />
      </div>
    </main>
  );
}