"use client";

import { useState } from "react";
import { formatCEP, formatCPF, formatPhone } from "@/lib/contact/formatters";
import { validateContactForm } from "@/lib/contact/validators";
import { openWhatsApp } from "@/lib/contact/whatsapp";
import type { ContactFormData, ContactFormErrors } from "@/lib/contact/types";

const initialFormData: ContactFormData = {
  fullName: "",
  cpf: "",
  phone: "",
  email: "",
  cep: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  municipality: "Viamão",
  serviceType: "Tratamento de Efluentes (ETEs)",
  urgency: "",
  preferredDateTime: "",
  message: "",
  acceptedTerms: false,
};

export function useContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [lastSubmittedData, setLastSubmittedData] = useState<ContactFormData | null>(null);
  const [loadingCep, setLoadingCep] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((previous) => ({ ...previous, [name]: checked }));
    } else {
      let formattedValue = value;
      if (name === "cpf") formattedValue = formatCPF(value);
      if (name === "phone") formattedValue = formatPhone(value);
      if (name === "cep") formattedValue = formatCEP(value);
      setFormData((previous) => ({ ...previous, [name]: formattedValue }));
    }

    setErrors((previous) => ({ ...previous, [name]: "" }));
    setServerError("");
  }

  async function handleCepBlur(e: React.FocusEvent<HTMLInputElement>) {
    const cepValue = e.target.value.replace(/\D/g, "");
    if (cepValue.length !== 8) return;

    setLoadingCep(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
      if (!response.ok) throw new Error("Falha na consulta do CEP");
      const data = await response.json();

      if (data.erro) {
        setErrors((previous) => ({ ...previous, cep: "CEP não encontrado." }));
        return;
      }

      setFormData((previous) => ({
        ...previous,
        street: data.logradouro || "",
        neighborhood: data.bairro || "",
        municipality: data.localidade || "Viamão",
      }));
      setErrors((previous) => ({
        ...previous,
        cep: "",
        street: "",
        neighborhood: "",
      }));
    } catch {
      setErrors((previous) => ({ ...previous, cep: "Erro ao buscar o CEP." }));
    } finally {
      setLoadingCep(false);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setServerError("");
    setIsSubmitting(true);
    setLastSubmittedData(formData);
    setSubmitted(true);
    openWhatsApp(formData);
    setIsSubmitting(false);
  }

  function handleSendAgain() {
    if (lastSubmittedData) openWhatsApp(lastSubmittedData);
  }

  function resetSubmission() {
    setSubmitted(false);
    setFormData(initialFormData);
    setErrors({});
    setLastSubmittedData(null);
  }

  return {
    submitted,
    setSubmitted,
    isSubmitting,
    serverError,
    loadingCep,
    formData,
    setFormData,
    errors,
    setErrors,
    lastSubmittedData,
    handleChange,
    handleCepBlur,
    handleSubmit,
    handleSendAgain,
    resetSubmission,
  };
}
