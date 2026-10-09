"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  fullName: z.string().min(3),
  cpf: z.string().min(14),
  phone: z.string().min(14),
  email: z.string().email(),
  address: z.string().min(5),
  municipality: z.string().min(3),
  neighborhood: z.string().min(2),
  serviceType: z.string(),
  message: z.string().optional(),
  acceptedTerms: z.literal(true),
  urgency: z.string().min(2),
  preferredDateTime: z.string().optional(),
});

export async function sendContactForm(formData: any) {
  try {
    const safeData = formSchema.parse(formData);

    // 1. E-mail principal enviado para você (Administrador)
    const adminEmailHtml = `
      <h2>Novo Pedido de Orçamento - AquaSul</h2>
      <p><strong>Nome:</strong> ${safeData.fullName}</p>
      <p><strong>CPF:</strong> ${safeData.cpf}</p>
      <p><strong>Telefone:</strong> ${safeData.phone}</p>
      <p><strong>E-mail:</strong> ${safeData.email}</p>
      <p><strong>Endereço:</strong> ${safeData.address}, ${safeData.neighborhood} - ${safeData.municipality}</p>
      <p><strong>Serviço:</strong> ${safeData.serviceType}</p>
      <p><strong>Mensagem:</strong> ${safeData.message || "Não informado."}</p>
    `;

    await resend.emails.send({
      from: "Site AquaSul <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL as string,
      subject: `Novo Lead: ${safeData.serviceType} - ${safeData.fullName}`,
      html: adminEmailHtml,
    });

    // 2. E-mail automático de confirmação enviado para o Cliente
    const clientEmailHtml = `
      <div style="font-family: sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #2563eb; margin-top: 0;">Solicitação Recebida com Sucesso!</h2>
        <p>Olá, <strong>${safeData.fullName}</strong>,</p>
        <p>Agradecemos o seu contato com a <strong>AquaSul Engenharia & Saneamento</strong>.</p>
        <p>Confirmamos que recebemos a sua solicitação referente ao serviço de <strong>${safeData.serviceType}</strong> para o município de <strong>${safeData.municipality}</strong>.</p>
        <p>Nossa equipe técnica já está a analisar os dados fornecidos e entraremos em contacto brevemente através do telefone ou e-mail informados.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        <p style="font-size: 12px; color: #64748b;">Este é um e-mail automático gerado pelo sistema de atendimento da AquaSul.</p>
      </div>
    `;

    await resend.emails.send({
      from: "Rubem Saneamento <onboarding@resend.dev>",
      to: safeData.email,
      subject: "Recebemos sua solicitação de orçamento - AquaSul",
      html: clientEmailHtml,
    });

    // 3. Disparo para o WhatsApp (Webhook opcional)
    if (process.env.WHATSAPP_API_URL) {
      const waMessage = `*Novo Lead no Site!*\n\n*Nome:* ${safeData.fullName}\n*Serviço:* ${safeData.serviceType}\n*Telefone:* ${safeData.phone}\n*Cidade:* ${safeData.municipality}`;
      
      await fetch(process.env.WHATSAPP_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.WHATSAPP_API_TOKEN}`,
        },
        body: JSON.stringify({
          phone: "5551997947527",
          message: waMessage,
        }),
      }).catch(e => console.error("Falha silenciosa no WhatsApp:", e));
    }

    return { success: true };
  } catch (error) {
    console.error("Erro no servidor:", error);
    return { success: false, error: "Falha ao processar a requisição." };
  }
}