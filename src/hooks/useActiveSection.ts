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
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (section && scrollPosition >= section.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}