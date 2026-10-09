import type { ContactFormData, ContactFormErrors } from "./types";

export function isValidCPF(cpf: string): boolean {
  const cleanCpf = cpf.replace(/\D/g, "");

  if (cleanCpf.length !== 11 || /^(\d)\1+$/.test(cleanCpf)) {
    return false;
  }

  let sum = 0;
  for (let i = 1; i <= 9; i++) {
    sum += Number(cleanCpf[i - 1]) * (11 - i);
  }

  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== Number(cleanCpf[9])) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += Number(cleanCpf[i - 1]) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;

  return remainder === Number(cleanCpf[10]);
}

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.fullName.trim()) errors.fullName = "Por favor, preencha seu nome completo.";
  if (!data.cpf.trim() || !isValidCPF(data.cpf)) errors.cpf = "Informe um CPF válido.";
  if (!data.phone.trim() || data.phone.replace(/\D/g, "").length < 10) errors.phone = "Informe o telefone com DDD.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Informe um e-mail válido.";
  if (data.cep.replace(/\D/g, "").length !== 8) errors.cep = "Informe um CEP válido.";
  if (!data.street.trim()) errors.street = "Informe o nome da rua.";
  if (!data.number.trim()) errors.number = "Informe o número.";
  if (!data.neighborhood.trim()) errors.neighborhood = "Informe o bairro.";
  if (!data.urgency.trim()) errors.urgency = "Selecione o nível de urgência.";

  const requiresDateTime =
    data.urgency === "Não urgente (marcar uma data e hora)" ||
    data.urgency === "Urgente (agendar para hoje ou amanhã)";

  if (requiresDateTime && !data.preferredDateTime) {
    errors.preferredDateTime = "Por favor, escolha uma data e hora.";
  }

  if (!data.acceptedTerms) errors.acceptedTerms = "Você deve concordar com os Termos.";

  return errors;
}
