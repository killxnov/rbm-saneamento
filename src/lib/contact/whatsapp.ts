import { COMPANY_WHATSAPP } from "./constants";
import type { ContactFormData } from "./types";

export function openWhatsApp(data: ContactFormData): void {
  let message =
    `*Novo Orçamento / Lead (Site)*\n\n` +
    `*Nome:* ${data.fullName}\n` +
    `*CPF:* ${data.cpf}\n` +
    `*Telefone:* ${data.phone}\n` +
    `*E-mail:* ${data.email}\n` +
    `*CEP:* ${data.cep}\n` +
    `*Endereço:* ${data.street}, Nº ${data.number}${data.complement ? ` (Comp: ${data.complement})` : ""}\n` +
    `*Bairro:* ${data.neighborhood}\n` +
    `*Município:* ${data.municipality}\n` +
    `*Serviço:* ${data.serviceType}\n` +
    `*Urgência:* ${data.urgency}\n`;

  const requiresDateTime =
    data.urgency === "Não urgente (marcar uma data e hora)" ||
    data.urgency === "Urgente (agendar para hoje ou amanhã)";

  if (requiresDateTime && data.preferredDateTime) {
    const [datePart, timePart] = data.preferredDateTime.split("T");
    const [year, month, day] = datePart.split("-");
    message += `*Data/Hora Agendada:* ${day}/${month}/${year} às ${timePart}\n`;
  }

  message += `*DETALHES:* ${data.message || "Não informado"}`;
  window.open(
    `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}
