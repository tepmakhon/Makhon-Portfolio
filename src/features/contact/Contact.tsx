import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
    >
      <Container>

        <SectionTitle
          title="Contact"
          subtitle="Let's build something amazing together."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>
    </section>
  );
}