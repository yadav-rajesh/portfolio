export const profile = {
  name: "Rajesh Yadav",
  role: "Full-Stack Developer",
  tagline: "I build scalable software systems with clean architecture and robust backend services.",
  location: "Pune, India",
  email: "yrajesh0127@gmail.com",
  resumeLink: "/Rajesh_Yadav_Resume.pdf",
  social: [
    { name: "GitHub", link: "https://github.com/yadav-rajesh" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/rajesh-yadav-j2ee/" },
    { name: "Mail", link: "mailto:yrajesh0127@gmail.com" },
  ],
};

export const skills = [
  { title: "Backend", items: ["Java", "Python", "C++", "Spring Boot"] },
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "Database", items: ["MySQL", "MongoDb"] },
  { title: "Tools", items: ["IntelliJ IDEA", "VS Code", "Git", "AWS"] },
];

export const projects = [
  {
    name: "Real Estate CRM",
    description:
      "A full-stack real estate management system that allows users to manage property listings, search by location, and view analytics.",
    stack: ["Java", "Spring Boot","ReactJs", "MySQL"],
    live: "#",
    code: "https://github.com/yadav-rajesh",
  },
  {
    name: "Scrap Application",
    description:
      "A full-stack app for managing scrap products, user accounts, cart, and pickup orders, with admin controls for product management.",
    stack: ["ReactJs", "NodeJs", "MongoDB"],
    live: "#",
    code: "https://github.com/yadav-rajesh",
  },
  {
    name: "Employee Payroll System",
    description:
      "Developed a Java payroll app to manage employees, attendance, salaries, and generate pay slips using MySQL via JDBC",
    stack: ["Java", "Java Swing", "MySQL"],
    live: "#",
    code: "https://github.com/yadav-rajesh",
  },
];

export const experience = [
  // {
  //   role: "Full-Stack Developer",
  //   company: "Freelance",
  //   period: "2024 - Present",
  //   highlights: [
  //     "Delivered software products with modular architecture and reusable component systems.",
  //     "Built secure APIs and improved response times by query tuning.",
  //     "Handled deployment workflow, testing, and production issue resolution.",
  //   ],
  // },
  {
    role: "Software Developer Intern",
    company: "Payas Technologies pvt. ltd.",
    period: "April 2023 - August 2023",
    highlights: [
      "Enhanced proficiency in Java, Python, and SQL through projects, refining software development skills.",
      "Contributed to development across frontend and backend modules, wrote maintainable code and code reviews.",
      "Actively participated in meetings, offering ideas and support in planning, execution, and issue resolution.",
    ],
  },
];

export const sectionIds = ["about", "skills", "projects", "experience", "contact"];

export const aboutText =
  "I am a results-driven Software Developer focused on building robust, scalable applications.\n\nMy expertise spans the entire development lifecycle, from designing responsive frontends to architecting secure backends.\n\nI am committed to writing production-ready code that is maintainable, secure, and aligned with real business goals.";

export const aboutNote =
  "I love to code & learn new technologies.";

export const aboutLearning = [
  "Designing scalable Spring Boot applications.",
  "Deployment and production-readiness practices.",
];

export const aboutWorkStyle = [
  "Write clear, maintainable, and testable code.",
  "Break large problems into practical deliverables.",
  "Collaborative and consistent communication.",
];
