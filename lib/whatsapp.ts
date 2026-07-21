export const WHATSAPP_NUMBER = '8764465110';

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE = "Hey Bet Vault, can I get a bit more info on this?";
