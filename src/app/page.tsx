import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesCarousel } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactForm } from "@/components/contact/form";
import { FAQ } from "@/components/sections/faq";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:text-white">
      <Navbar />

      <Hero />

      <ServicesCarousel />

      <ContactForm />
      
      {/* Próximas seções a serem desenvolvidas */}
      {/* <ServicesCarousel /> */}
      <Testimonials />

      

      <FAQ />

      <Footer />
    </main>
  );
}