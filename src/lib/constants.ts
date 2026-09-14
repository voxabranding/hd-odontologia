export const PHONE_NUMBER = "5587988585207";
export const PHONE_DISPLAY = "(87) 98858-5207";
export const INSTAGRAM_HANDLE = "@drhermesdario";
export const INSTAGRAM_URL = "https://www.instagram.com/drhermesdario";
export const CRO = "CRO/PE 7716";
export const DOCTOR_NAME = "Dr. Hermes Dário de Azevedo Junior";

export const ADDRESS = {
  street: "Rua Joca Magalhães, 217",
  neighborhood: "Nossa Sra. da Penha",
  city: "Serra Talhada",
  state: "PE",
  zip: "56903-480",
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMessage =
    "Olá, gostaria de agendar uma avaliação na HD Odontologia.";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
}

export const WHATSAPP_MESSAGES = {
  default: "Olá, gostaria de agendar uma avaliação na HD Odontologia.",
  implants:
    "Olá, gostaria de saber mais sobre implantes dentários e agendar uma avaliação.",
  treatments:
    "Olá, gostaria de conhecer os tratamentos da HD Odontologia.",
  protocol:
    "Olá, gostaria de saber mais sobre prótese protocolo e dentes fixos.",
  aesthetics:
    "Olá, gostaria de saber mais sobre estética dental na HD Odontologia.",
  fear: "Olá, gostaria de agendar uma avaliação. Tenho receio de tratamento dentário e gostaria de saber mais sobre o atendimento da HD Odontologia.",
  aligners:
    "Olá, gostaria de saber mais sobre aparelho invisível e agendar uma avaliação.",
};

export const NAV_LINKS = [
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#transformacoes" },
  { label: "Contato", href: "#contato" },
];
