import { COMPANY_WHATSAPP } from "./constants";
import type { ContactFormData } from "./types";

export function openWhatsApp(data: ContactFormData): void {
  let message = `*NOVO ORÇAMENTO / LEAD (SITE)*\n\n`;

  // 1. DADOS
  message += `*DADOS*\n` +
             `*Nome:* ${data.fullName}\n` +
             `*CPF:* ${data.cpf}\n\n`;

  // 2. CONTATO
  message += `*CONTATO*\n` +
             `*Telefone:* ${data.phone}\n` +
             `*E-mail:* ${data.email}\n\n`;

  // 3. ENDEREÇO (Tudo junto na mesma linha para ficar compacto)
  message += `*ENDEREÇO*\n` +
             `*Local:* ${data.street}, Nº ${data.number}${data.complement ? ` (Comp: ${data.complement})` : ""} - ${data.neighborhood}, ${data.municipality} (CEP: ${data.cep})\n\n`;

  // 4. CONTRATO
  message += `*CONTRATO*\n` +
             `*Serviço:* ${data.serviceType}\n` +
             `*Urgência:* ${data.urgency}\n`;

  const requiresDateTime =
    data.urgency === "Não urgente (marcar uma data e hora)" ||
    data.urgency === "Urgente (agendar para hoje ou amanhã)";

  if (requiresDateTime && data.preferredDateTime) {
    const [datePart, timePart] = data.preferredDateTime.split("T");
    const [year, month, day] = datePart.split("-");
    message += `*Data Agendada:* ${day}/${month}/${year} às ${timePart}\n`;
  }

  // 5. DETALHES
  message += `\n*💬 DETALHES*\n` +
             `${data.message || "Não informado"}`;
  window.open(
    `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}
