import Section from "../../components/layout/Section";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Have an internship opportunity or a project in mind? Let’s talk."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <ContactInfo />

        <ContactForm />
      </div>
    </Section>
  );
}
