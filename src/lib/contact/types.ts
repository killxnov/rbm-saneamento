export type ContactFormData = {
  fullName: string;
  cpf: string;
  phone: string;
  email: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  municipality: string;
  serviceType: string;
  urgency: string;
  preferredDateTime: string;
  message: string;
  acceptedTerms: boolean;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
