import { useRef, useState } from "react";
import { sendEmail } from "../services/email";
import type { ContactForm } from "../types/contact";
export default function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const busy = useRef(false);
  async function submit(values: ContactForm) {
    if (busy.current) return false;
    busy.current = true;
    setLoading(true);
    setStatus("Sending your message…");
    try {
      await sendEmail(values);
      setStatus("Message sent. Thank you for reaching out.");
      return true;
    } catch {
      setStatus(
        "Your message could not be sent. Please try again or email tepmakhon199@gmail.com directly.",
      );
      return false;
    } finally {
      busy.current = false;
      setLoading(false);
    }
  }
  return { loading, status, submit };
}
