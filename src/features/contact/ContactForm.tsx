import { useState } from "react";

import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import MotionCard from "../../components/common/MotionCard";

import useContactForm from "../../hooks/useContactForm";

export default function ContactForm() {
  const { loading, submit } = useContactForm();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    const success = await submit(form);

    if (success) {
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }

  return (
    <MotionCard>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />

          <Textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Card>
    </MotionCard>
  );
}
