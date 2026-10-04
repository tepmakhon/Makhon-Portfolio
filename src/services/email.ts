import emailjs from "@emailjs/browser";
import type { ContactForm } from "../types/contact";
const service = import.meta.env.VITE_EMAIL_SERVICE_ID;
const template = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
export const emailConfigured = Boolean(service && template && publicKey);
export async function sendEmail(data: ContactForm) {
  if (!emailConfigured) throw new Error("Email service is not configured.");
  return emailjs.send(
    service,
    template,
    {
      name: data.name,
      email: data.email,
      reply_to: data.email,
      subject: data.subject,
      message: data.message,
    },
    {
      publicKey,
      blockHeadless: true,
      limitRate: { id: "portfolio-contact", throttle: 10000 },
    },
  );
}
