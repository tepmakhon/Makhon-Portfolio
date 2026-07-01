import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function ContactForm() {
  return (
    <Card>

      <form className="space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-xl border p-4"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-xl border p-4"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-xl border p-4"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full rounded-xl border p-4"
        />

        <Button>
          Send Message
        </Button>

      </form>

    </Card>
  );
}