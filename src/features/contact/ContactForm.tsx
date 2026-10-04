import { useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Textarea from "../../components/ui/Textarea";
import useContactForm from "../../hooks/useContactForm";
import { emailConfigured } from "../../services/email";
import { profile } from "../../data/profile";
const empty = { name: "", email: "", subject: "", message: "" };
export default function ContactForm() {
  const { loading, status, submit } = useContactForm();
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const values = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, value.trim()]),
    ) as typeof empty;
    if (Object.values(values).some((value) => !value)) {
      setError("Please complete all fields with more than spaces.");
      return;
    }
    setError("");
    if (await submit(values)) setForm(empty);
  }
  if (!emailConfigured)
    return (
      <Card>
        <h3 className="text-2xl font-semibold">Email me directly</h3>
        <p className="mt-4 text-[var(--color-muted)]">
          For internship opportunities, project questions, or collaboration,
          send me an email.
        </p>
        <a className="action-link mt-6" href={`mailto:${profile.email}`}>
          Write an email
        </a>
        <p className="mt-4 break-all text-sm">{profile.email}</p>
      </Card>
    );
  return (
    <Card>
      <h3 className="mb-6 text-2xl font-semibold">Send a message</h3>
      <form onSubmit={handleSubmit} className="space-y-5" aria-busy={loading}>
        <fieldset disabled={loading} className="space-y-5">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-medium"
            >
              Your name
            </label>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-medium"
            >
              Email address
            </label>
            <Input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              maxLength={254}
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="contact-subject"
              className="mb-2 block text-sm font-medium"
            >
              Subject
            </label>
            <Input
              id="contact-subject"
              name="subject"
              required
              maxLength={150}
              value={form.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-medium"
            >
              Message
            </label>
            <Textarea
              id="contact-message"
              name="message"
              rows={6}
              required
              minLength={10}
              maxLength={5000}
              value={form.message}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <p
          role="status"
          aria-live="polite"
          className="text-sm text-[var(--color-muted)]"
        >
          {error || status}
        </p>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Sending…" : "Send Message"}
        </Button>
        <p className="text-sm text-[var(--color-muted)]">
          Prefer email?{" "}
          <a
            className="break-all underline underline-offset-4"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
        </p>
      </form>
    </Card>
  );
}
