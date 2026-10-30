"use client";

import { ContactInfo } from "./info";
import { ContactFields } from "./contactInput";
import { PrivacyModal } from "./PrivacyModal";
import { useContactForm } from "./useForm";

export function ContactForm() {
  const form = useContactForm();

  return (
    <section id="contratar" className="py-20 md:py-28 bg-background dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <ContactInfo />
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <ContactFields {...form} />
          </div>
        </div>
      </div>
      <PrivacyModal />
    </section>
  );
}