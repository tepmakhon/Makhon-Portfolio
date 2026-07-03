import { useEffect, useState } from "react";

const sections = [
  "hero",
  "about",
  "skills",
  "experience",
  "education",
  "projects",
  "certificates",
  "contact",
];

export default function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}