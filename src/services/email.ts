import emailjs from "@emailjs/browser";

import type { ContactForm } from "../types/contact";

export async function sendEmail(data: ContactForm) {
  return emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    },
    import.meta.env.VITE_EMAIL_PUBLIC_KEY,
  );
}
