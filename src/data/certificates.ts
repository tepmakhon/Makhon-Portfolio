import type { Certificate } from "../types/certificate";

import Python1 from "../assets/images/certificates/python1.webp";
import Python2 from "../assets/images/certificates/python2.webp";
import English1 from "../assets/images/certificates/english1.webp";
import English2 from "../assets/images/certificates/english2.webp";
import Html from "../assets/images/certificates/html.webp";
import CSS from "../assets/images/certificates/css.webp";
import Javascript1 from "../assets/images/certificates/javascript1.webp";
import Javascript2 from "../assets/images/certificates/javascript2.webp";
import Mooc from "../assets/images/certificates/mooc.webp";
import Etec from "../assets/images/certificates/etec.webp";
export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Basic /Advance Python / Flask",
    issuer: "ETEC-Engineering Technology Electronic Center",
    issueDate: "2024",
    credentialUrl: "",
    image: Etec,
    featured: false,
  },

  {
    id: 2,
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    issueDate: "2025",
    credentialUrl:
      "https://www.credly.com/badges/222d48d5-6e3a-40c1-b3f1-7380452946e7",
    image: Python1,
    featured: false,
  },

  {
    id: 3,
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    issueDate: "2025",
    credentialUrl:
      "https://www.credly.com/badges/ac18c95d-2546-46c1-bf30-b1a421907e64",
    image: Python2,
    featured: false,
  },

  {
    id: 4,
    title: "English for IT 1",
    issuer: "Cisco Networking Academy",
    issueDate: "2025",
    credentialUrl:
      "https://www.credly.com/badges/f04e70e2-fcc1-41e3-bfd0-5fa0ad924c23",
    image: English1,
    featured: false,
  },

  {
    id: 5,
    title: "English for IT 2",
    issuer: "Cisco Networking Academy",
    issueDate: "2025",
    credentialUrl:
      "https://www.credly.com/badges/d729eec3-1fef-4fa3-810a-0fee554da39d",
    image: English2,
    featured: false,
  },

  {
    id: 6,
    title: "HTML Essentials",
    issuer: "Cisco Networking Academy",
    issueDate: "2025",
    credentialUrl:
      "https://www.credly.com/badges/4e51e162-3267-4b5e-b6b6-60e5b9fd7ea1",
    image: Html,
    featured: false,
  },

  {
    id: 7,
    title: "CSS Essentials",
    issuer: "Cisco Networking Academy",
    issueDate: "2025",
    credentialUrl:
      "https://www.credly.com/badges/8977be58-6ac6-4cca-8360-ce4f2d930a29",
    image: CSS,
    featured: false,
  },

  {
    id: 8,
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    issueDate: "2026",
    credentialUrl:
      "https://www.credly.com/badges/7f73abdc-06ea-4481-a292-377282dc598f",
    image: Javascript1,
    featured: false,
  },

  {
    id: 9,
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    issueDate: "2026",
    credentialUrl:
      "https://www.credly.com/badges/da4dd46c-16f1-4113-8cc4-1cebd2c8e36e",
    image: Javascript2,
    featured: false,
  },

  {
    id: 10,
    title: "English for Business and Entrepreneurship MOOC",
    issuer: "Massive Open Online Course",
    issueDate: "2026",
    credentialUrl:
      "https://api.badgr.io/public/assertions/8SfqDaKnQx-ujfXfEzRhqQ",
    image: Mooc,
    featured: false,
  },
];
