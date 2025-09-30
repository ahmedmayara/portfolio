import { SkillCategory } from "@/types";

export const config: {
  name: string;
  title: string;
  description: string;
  bio: string;
  location: string;
  locationUrl: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    resume: string;
  };
  work: {
    company: string;
    location: string;
    role: string;
    type: string;
    period: string;
    companyUrl: string;
    logo: string;
    highlights: string[];
  }[];
  projects: {
    name: string;
    href: string;
    image: string;
    alt: string;
    description: string;
  }[];
  skills: SkillCategory[];
} = {
  name: "Ahmed Mayara",
  title: "Software Engineer",
  description: "Building scalable software solutions for the web.",
  bio: "My name is Ahmed Mayara and I’m a software engineer. My main focus is building high-quality, scalable software solutions that meet and exceed client expectations.",
  location: "Nabeul, Tunisia",
  locationUrl: "https://www.google.com/maps/place/Nabeul/",
  email: "ahmedmayara789@gmail.com",
  socials: {
    github: "https://github.com/ahmedmayara",
    linkedin: "https://www.linkedin.com/in/ahmed-mayara-1393882a0",
    resume: "https://ahmedmayara.netlify.app/resume.pdf",
  },
  work: [
    {
      company: "Devoxys",
      location: "Ben Arous, Tunisia",
      role: "Software Engineer",
      type: "Full-time",
      period: "Sep 2024 - Present",
      companyUrl: "https://devoxys.com",
      logo: "https://avatars.githubusercontent.com/u/196986389?s=200&v=4",
      highlights: [
        "Created SheapIt, an advanced logistics platform at Devoxys, leveraging React, Next.js.",
        "Operated and implemented core features including team management, shipment tracking, and automated logistics document generation, reducing manual workload by 30% and accelerating document processing time by 40%.",
        "Engineered a scalable and high-performance architecture, achieving a 25% improvement in platform speed and ensuring seamless functionality during rigorous testing across multiple devices and environments.",
        "Conducted rigorous performance assessments that uncovered critical bottlenecks, resolved more than 95% of reported issues to drastically improve system stability.",
        "Oversaw the deployment process, ensuring that the build pipelines were optimised and that there was no disruption during the launch. Achieved a 30% reduction in deployment times to facilitate future growth and scalability.",
      ],
    },
    {
      company: "Dreamwod",
      location: "Remote",
      role: "Frontend Consultant",
      type: "Contract",
      period: "Feb 2025 - Apr 2025",
      companyUrl: "https://www.dreamwod.app",
      logo: "/images/dreamwod-logo.jpg",
      highlights: [
        "Consulted for Dreamwod, a workout management platform for gyms and athletes, delivering high-impact frontend features using React, Next.js, Tailwind CSS, and Framer Motion.",
        "Designed and implemented intuitive monthly and daily calendar views to allow users to plan and view workouts efficiently.",
        "Built a dynamic Kanban board with drag-and-drop functionality to manage workout routines with ease and flexibility.",
        "Developed and refined the Box TV feature, which presents daily workouts in a large-screen TV-friendly display tailored for gym environments.",
        "Collaborated directly with stakeholders to translate business needs into fluid UI/UX interactions, ensuring the app met both performance and usability standards.",
      ],
    },
    {
      company: "Freelance",
      location: "Remote",
      role: "Software Engineer",
      type: "Freelance",
      period: "2023 – Present",
      companyUrl: "https://ahmedmayara.netlify.app",
      logo: "/images/logo.png",
      highlights: [
        "Delivered end-to-end software engineering solutions for startups and founders across diverse domains including fitness, logistics, and e-commerce.",
        "Designed and implemented full-stack features using React, Next.js, Tailwind CSS, Framer Motion, and integrated third-party APIs to enable seamless user workflows.",
        "Led architectural decisions, performance tuning, and scalable component design to ensure robust and maintainable codebases.",
        "Provided consulting on UX, feature planning, and MVP strategy—contributing to successful product launches and user adoption.",
        "Collaborated in agile remote environments, ensuring technical alignment with business goals and maintaining high client satisfaction through reliable delivery.",
      ],
    },
  ],
  projects: [
    {
      name: "Devoxys",
      href: "https://www.devoxys.com",
      image: "/images/devoxys.png",
      alt: "Devoxys website screenshot",
      description:
        "Discover Devoxys: Your Strategic Partner in AI, Automation, and Logistics Optimization",
    },
    {
      name: "Shadcn Vue",
      href: "https://www.shadcn-vue.com",
      image: "/images/shadcn-vue.png",
      alt: "Shadcn Vue website screenshot",
      description:
        "An unofficial, community-led Vue port of shadcn/ui. This project was born out of the need for a similar project for the Vue ecosystem.",
    },
    {
      name: "SheapIt International",
      href: "https://sheap-it.vercel.app",
      image: "/images/sheapit-international.png",
      alt: "Sheapit International website screenshot",
      description:
        "Sheapit is a flagship solution, a revolutionary freight exchange platform connecting shippers and carriers with unmatched efficiency.",
    },
    {
      name: "SheapIt Tunisia",
      href: "https://sheapit-local.vercel.app",
      image: "/images/sheapit-tunisia.png",
      alt: "Sheapit Tunisia website screenshot",
      description:
        "The local version of Sheapit, a freight exchange platform tailored for Tunisia, connecting shippers and carriers with unmatched efficiency.",
    },
    {
      name: "Oladoc",
      href: "https://oladoc.vercel.app",
      image: "/images/oladoc.png",
      alt: "Oladoc website screenshot",
      description:
        "Oladoc is a platform that connects patients with doctors and helps them book appointments online.",
    },
  ],
  skills: [
    {
      languages: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
    },
    {
      frameworks: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        },
        {
          name: "Hono",
          icon: "https://upload.wikimedia.org/wikipedia/commons/6/60/Hono-logo.svg",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Expo",
          icon: "https://www.svgrepo.com/show/341805/expo.svg",
        },
      ],
    },
    {
      databases: [
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Prisma ORM",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        },
        {
          name: "Drizzle ORM",
          icon: "https://images.opencollective.com/drizzle-orm/9405e48/logo/256.png",
        },
      ],
    },
    {
      runtimeEnvironments: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Bun",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",
        },
      ],
    },
    {
      librariesAndTools: [
        {
          name: "Tanstack Query",
          icon: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*elhu-42TzQEdsFjKDbQhhA.png",
        },
        {
          name: "Zustand",
          icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
        },
        {
          name: "Framer",
          icon: "https://www.svgrepo.com/show/452207/framer.svg",
        },
        {
          name: "Vite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ],
    },
    {
      softwares: [
        {
          name: "Visual Studio Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "IntelliJ IDEA",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
        },
        {
          name: "Postman",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
    {
      devops: [
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "GitHub Actions (CI/CD)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
      ],
    },
    {
      testing: [
        {
          name: "Vitest",
          icon: "https://vitest.dev/logo.svg",
        },
      ],
    },
  ],
} as const;
