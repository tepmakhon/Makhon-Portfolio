export const caseStudies: Record<string, { title: string; body: string }[]> = {
  "developer-portfolio": [
    {
      title: "Problem & audience",
      body: "Recruiters and collaborators need a quick way to understand my skills and inspect my work. This portfolio brings projects, education, certificates, and contact information into one place.",
    },
    {
      title: "My responsibilities",
      body: "This is my personal project. I built the React interface, organized the project and certificate data, and integrated theme switching and an EmailJS contact form.",
    },
    {
      title: "Architecture & choices",
      body: "React and TypeScript provide reusable, typed components. React Router handles project pages; Tailwind CSS and shared CSS variables support responsive layouts and two themes. Vite generates the client bundle and a build-time server bundle that renders each public page to HTML.",
    },
    {
      title: "Challenge & solution",
      body: "Client-only metadata left the initial HTML without useful page content and had conflicting canonical domains. Build-time rendering now generates the content and Helmet metadata for every real route using one production origin.",
    },
    {
      title: "Technical takeaway",
      body: "A useful portfolio needs more than a visual showcase: semantic links, readable screenshots, keyboard access, and crawlable content make the work easier to evaluate.",
    },
  ],
  "rupp-student-conference-platform": [
    {
      title: "Problem & intended users",
      body: "RUPP students need a central place to find conferences, scholarships, internships, competitions, and career opportunities. The platform organizes these opportunities alongside conference registration.",
    },
    {
      title: "My responsibilities",
      body: "My project experience includes system architecture, database design, authentication, and full-stack development for this university platform.",
    },
    {
      title: "Architecture & choices",
      body: "The React interface communicates with an Express backend. Prisma provides access to PostgreSQL data. JWT authentication and role-based access control support separate student and administrator workflows.",
    },
    {
      title: "Engineering considerations",
      body: "Authentication and authorization serve different purposes: signing in identifies a user, while role checks restrict administrative actions. Opportunity management and conference registration need consistent records across the interface, API, and database.",
    },
    {
      title: "Technical takeaway",
      body: "This project connects frontend development with API design, relational data, and permission-sensitive workflows. The source repository provides the implementation context beyond the screenshot.",
    },
  ],
  "smart-classroom-ai-iot": [
    {
      title: "Problem & intended users",
      body: "Teachers need tools for attendance and classroom management. This university group project combines QR attendance, face recognition, classroom monitoring, and a teacher dashboard.",
    },
    {
      title: "Group project context",
      body: "This project was developed as a university group project. The features and technologies on this page describe the shared system; they are not a claim that I individually implemented every subsystem.",
    },
    {
      title: "System & technologies",
      body: "The recorded project stack includes Python, a Flutter mobile application, a JavaScript and HTML/CSS interface, and Raspberry Pi 5 integration. The repository contains the team's implementation.",
    },
    {
      title: "Engineering considerations",
      body: "A connected classroom brings together software interfaces and physical hardware. QR attendance, recognition, and monitoring each need clear user feedback and consistent attendance records.",
    },
    {
      title: "Technical takeaway",
      body: "The project shows how classroom software can extend beyond a web interface to mobile and connected devices. See the shared repository for the scope of each part.",
    },
  ],
};
