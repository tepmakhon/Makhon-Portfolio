import { useState } from "react";
import { toast } from "sonner";

import { sendEmail } from "../services/email";
import type { ContactForm } from "../types/contact";

export default function useContactForm() {
  const [loading, setLoading] = useState(false);

  async function submit(values: ContactForm) {
    setLoading(true);

    try {
      await sendEmail(values);

      toast.success("Message sent successfully.", {
        description:
          "Thank you for reaching out. I'll get back to you as soon as possible.",
      });

      return true;
    } catch (error) {
      console.error(error);

      toast.error("Unable to send message.", {
        description:
          "Please try again in a few moments.",
      });

      return false;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    submit,
  };
}