import influhire from "../assets/images/influhire.png";
import menacheckout from "../assets/images/menacheckout.png";
import menamedica from "../assets/images/menamedica.png";
import builder from "../assets/images/builder.png";
import bot from "../assets/images/bot.png";
import dking from "../assets/images/dking.png";
import faarm from "../assets/images/faarm.png";
import travel from "../assets/images/travel.png";
import octopus from "../assets/images/octopus.png";

export const projectsData = [
  {
    id: 10,
    title: "Octopus-EPL",
    featured: true,
    type: "Client Project", // options: "Personal", "Client Project", "Startup"
    role: "Frontend Developer",
    duration: "May 2024 – Jul 2024",
    description:
      "Dynamic eCommerce platform for buying and selling automobile parts and accessories.",
    longDescription:
      "Octopus-EPL is a feature-rich marketplace built to simplify the automobile parts trade. I designed and developed the frontend using React, tailwindcssCSS, and Redux for robust state management. The platform includes seamless navigation, search filtering, and performance-optimized product listing pages for smooth user experience.",
    features: [
      "Dynamic product listing and filtering",
      "Integrated Redux for state and cart management",
      "Responsive UI and dark mode support",
      "Optimized image loading and caching",
    ],
    impact:
      "Enhanced user retention with faster load times and streamlined browsing experience.",
    tags: ["React", "JavaScript", "tailwindcss", "Redux", "CSS"],
    image: "/assets/images/octopus/epl0.png",
    demoLink: "https://octopus-epl.com/",
    media: [
      "/assets/images/octopus/epl0.png",
      "/assets/images/octopus/epl1.png",
      "/assets/images/octopus/epl2.png",
      "/assets/images/octopus/epl3.png",
      "/assets/images/octopus/epl4.png",
      "/assets/images/octopus/epl5.png",
      "/assets/images/octopus/epl6.png",
    ],
  },
  {
    id: 1,
    title: "InfluHire",
    type: "Client Project",
    role: "Frontend Developer",
    duration: "Feb 2024 – Apr 2024",
    description:
      "Platform connecting influencers with brands for seamless campaign management.",
    longDescription:
      "InfluHire connects influencers and brands for collaborations, enabling campaign tracking, performance analytics, and contract handling. I built the responsive frontend using React, Redux, and Bootstrap, implementing structured campaign workflows and integrated performance charts.",
    features: [
      "Campaign and influencer dashboard",
      "Firebase authentication and analytics",
      "Dynamic media uploads and previews",
      "Real-time collaboration interface",
    ],
    impact:
      "Streamlined influencer-brand collaborations for 100+ campaigns, reducing manual management by 40%.",
    tags: ["React", "JavaScript", "Bootstrap", "Redux", "CSS"],
    image: influhire,
    demoLink: "https://influhire.com",
    media: [
      "/assets/images/inf/inf0.png",
      "/assets/images/inf/inf1.png",
      "/assets/images/inf/inf2.png",
      "/assets/images/inf/inf3.png",
      "/assets/images/inf/inf4.png",
      "/assets/images/inf/inf5.png",
      "/assets/images/inf/inf6.png",
      "/assets/images/inf/inf7.png",
    ],
  },
  {
    id: 2,
    title: "Bot-Pro",
    type: "Personal",
    role: "Frontend Engineer",
    duration: "Mar 2024 – May 2024",
    description:
      "Automation and chatbot management tool for customer support systems.",
    longDescription:
      "Bot-Pro is an intelligent chatbot dashboard that allows admins to automate tasks, track analytics, and interact with real-time user data. I developed the entire UI using React and tailwindcssCSS, implementing modular chat components, charts, and interactive analytics panels.",
    features: [
      "Chatbot creation and customization dashboard",
      "Real-time analytics visualization",
      "Dynamic theme and component system",
      "Smooth animations with Framer Motion",
    ],
    impact:
      "Improved support team efficiency by automating repetitive chat workflows and delivering actionable analytics.",
    tags: ["React", "CSS", "JavaScript", "tailwindcss"],
    image: bot,
    demoLink: "https://bot-alveegits-projects.vercel.app/",
    repoLink: "https://github.com/AlveeGit/bot",
    media: [
      "/assets/images/bot/bo0.png",
      "/assets/images/bot/bo1.png",
      "/assets/images/bot/bo2.png",
      "/assets/images/bot/bo3.png",
      "/assets/images/bot/bo4.png",
      "/assets/images/bot/bo5.png",
      "/assets/images/bot/bo6.png",
      "/assets/images/bot/bo7.png",
      "/assets/images/bot/bo8.png",
    ],
  },
  {
    id: 3,
    title: "MenaCheckout",
    type: "Client Project",
    role: "Fullstack Developer",
    duration: "Jan 2024 – Mar 2024",
    description:
      "Cross-border checkout system for eCommerce platforms with secure payment flows.",
    longDescription:
      "MenaCheckout is a high-performance checkout system developed using nextdotjs.js and TypeScript. I implemented secure payment logic, dynamic currency conversions, and retry-safe API integrations. The frontend was optimized for accessibility and responsiveness across devices.",
    features: [
      "Secure multi-payment gateway integration",
      "Retry-safe payment API logic",
      "Currency conversion in real time",
      "Lightweight static deployment with nextdotjs.js",
    ],
    impact:
      "Enabled seamless transactions across multiple currencies, improving checkout success rate by 30%.",
    tags: ["nextdotjs", "TypeScript", "Redux", "styledcomponents", "Sass"],
    image: menacheckout,
    demoLink: "https://menacheckout.com",
    media: [
      "/assets/images/mc/mc0.png",
      "/assets/images/mc/mc1.png",
      "/assets/images/mc/mc2.png",
      "/assets/images/mc/mc3.png",
      "/assets/images/mc/mc4.png",
      "/assets/images/mc/mc5.png",
      "/assets/images/mc/mc6.png",
      "/assets/images/mc/mc7.png",
      "/assets/images/mc/mc8.png",
    ],
  },
  {
    id: 4,
    title: "DKingSolution",
    type: "Personal",
    role: "Frontend Developer",
    duration: "Nov 2023 – Dec 2023",
    description:
      "Construction project management tool for scheduling and progress tracking.",
    longDescription:
      "DKingSolution is a productivity platform built for construction teams. I developed the React-based UI with Bootstrap and implemented features like project milestones, user role management, and dynamic scheduling visualizations to enhance daily operations.",
    features: [
      "Project and task tracking modules",
      "Custom dashboard UI for teams",
      "Responsive layout for desktop and tablet",
      "Firebase-based authentication system",
    ],
    impact:
      "Increased project visibility and team coordination, reducing planning delays by 25%.",
    tags: ["React", "CSS", "JavaScript", "Bootstrap"],
    image: dking,
    demoLink: "https://dking-solution.vercel.app/",
    repoLink: "https://github.com/AlveeGit/dking-solution",
    media: [
      "/assets/images/dk/dk0.png",
      "/assets/images/dk/dk1.png",
      "/assets/images/dk/dk2.png",
      "/assets/images/dk/dk3.png",
      "/assets/images/dk/dk4.png",
      "/assets/images/dk/dk5.png",
    ],
  },
  {
    id: 5,
    title: "MenaMedica",
    type: "Client Project",
    role: "Frontend Developer",
    duration: "Jun 2024 – Jul 2024",
    description:
      "Healthcare web app for booking appointments and managing prescriptions.",
    longDescription:
      "MenaMedica simplifies healthcare management for both doctors and patients. I built the responsive frontend using React, Redux, and Bootstrap, integrating appointment scheduling, digital prescriptions, and profile management with secure Firebase backend.",
    features: [
      "Doctor-patient appointment system",
      "Digital prescription and record management",
      "Real-time data synchronization with Firebase",
      "Dashboard analytics for doctors",
    ],
    impact:
      "Improved patient engagement and reduced manual record handling by 35%.",
    tags: ["React", "JavaScript", "Bootstrap", "Redux", "CSS"],
    image: menamedica,
    demoLink: "https://menamedica.com",
    media: [
      "/assets/images/mm/mm0.png",
      "/assets/images/mm/mm1.png",
      "/assets/images/mm/mm2.png",
      "/assets/images/mm/mm3.png",
      "/assets/images/mm/mm4.png",
      "/assets/images/mm/mm5.png",
      "/assets/images/mm/mm6.png",
      "/assets/images/mm/mm7.png",
    ],
  },
  {
    id: 6,
    title: "Builder",
    type: "Personal",
    role: "Frontend Developer",
    duration: "Aug 2023 – Oct 2023",
    description:
      "Construction project tracking app for planning and workflow management.",
    longDescription:
      "Builder is a React-based project planner for construction teams. I built dynamic task tracking components and a responsive layout using tailwindcssCSS. The app focuses on visual simplicity and productivity, providing teams with clear progress insights.",
    features: [
      "Task tracking and scheduling dashboard",
      "State management via Context API",
      "Responsive grid layouts for all screens",
      "Dark/light theme toggle",
    ],
    impact:
      "Boosted internal workflow visibility, helping project managers track deliverables efficiently.",
    tags: ["React", "CSS", "JavaScript", "tailwindcss"],
    image: builder,
    demoLink: "https://builder-ai-umber.vercel.app/",
    repoLink: "https://github.com/AlveeGit/builder.ai",
    media: [
      "/assets/images/bb/bb0.png",
      "/assets/images/bb/bb1.png",
      "/assets/images/bb/bb2.png",
      "/assets/images/bb/bb3.png",
      "/assets/images/bb/bb4.png",
      "/assets/images/bb/bb5.png",
      "/assets/images/bb/bb6.png",
      "/assets/images/bb/bb7.png",
    ],
  },
  {
    id: 7,
    title: "Faarm",
    type: "Personal",
    role: "Fullstack Developer",
    duration: "Sep 2023 – Nov 2023",
    description:
      "Agriculture management platform for crop tracking and yield optimization.",
    longDescription:
      "Faarm helps farmers manage resources and analyze crop data through a modern web interface. Built with nextdotjs.js and tailwindcssCSS, I implemented dashboards for monitoring soil, water, and yield statistics, along with dynamic field analytics modules.",
    features: [
      "Interactive farm and resource dashboard",
      "Crop yield tracking and reporting",
      "Responsive design with tailwindcssCSS",
      "Optimized nextdotjs.js performance and routing",
    ],
    impact:
      "Helped farm operators visualize key metrics and improve yield decisions through better data insights.",
    tags: ["nextdotjs", "tailwindcss", "JavaScript", "CSS"],
    image: faarm,
    demoLink: "https://faarm.vercel.app/",
    repoLink: "https://github.com/AlveeGit/Faarm",
    media: ["/assets/images/fm.png", faarm],
  },
  {
    id: 8,
    title: "TravelMan",
    type: "Personal",
    role: "Frontend Developer",
    duration: "Oct 2023 – Dec 2023",
    description:
      "Travel planning and itinerary management app for explorers and travelers.",
    longDescription:
      "TravelMan offers a smooth trip planning experience with itinerary scheduling, destination search, and booking management. I developed the UI using React and Firebase, focusing on real-time data handling and offline-friendly caching for performance.",
    features: [
      "Itinerary planning with drag-and-drop interface",
      "Booking and expense tracking",
      "Firebase backend for real-time updates",
      "Responsive interface with offline support",
    ],
    impact:
      "Provided travelers a single platform to organize trips, reducing manual planning effort significantly.",
    tags: ["React", "CSS", "JavaScript", "Firebase", "Bootstrap"],
    image: travel,
    demoLink: "https://travel-man.vercel.app/",
    repoLink: "https://github.com/AlveeGit/travel-man",
    media: [travel],
  },
  {
    id: 9,
    title: "Car Market Place",
    type: "Client Project",
    role: "Frontend Developer",
    duration: "Dec 2023 - Present",
    description:
      "A web app for buying and selling cars, with a focus on user experience and performance.",
    longDescription:
      "Developed a fast, responsive platform for car trading, enabling users to browse, list, and filter vehicles effortlessly. Focused on performance optimization, intuitive UI, and seamless integration with backend APIs to ensure a smooth, modern marketplace experience.",
    features: [
      "Dynamic product listing and advanced filtering",
      "Optimized image loading and lazy rendering",
      "Responsive and accessible UI built with TailwindCSS",
      "State management and authentication with Redux",
    ],
    impact:
      "Enhanced user retention through faster load times, better UI responsiveness, and an improved browsing experience.",
    tags: ["React", "JavaScript", "TailwindCSS", "Redux", "CSS"],
    image: "/assets/images/cr/cr1.png",
    demoLink: "https://octopus-epl.com/",
    media: [
      "/assets/images/cr/cr1.png",
      "/assets/images/cr/cr2.png",
      "/assets/images/cr/cr3.png",
      "/assets/images/cr/cr4.png",
      "/assets/images/cr/cr5.png",
      "/assets/images/cr/cr6.png",
      "/assets/images/cr/cr7.png",
    ],
  },
];

export const categories = [
  "All",
  ...Array.from(new Set(projectsData.flatMap((project) => project.tags))),
];

// export const categories = [
//   "All",
//   "React",
//   "nextdotjs",
//   "JavaScript",
//   "TypeScript",
//   "Bootstrap",
//   "tailwindcss",
//   "Redux",
//   "styledcomponents",
//   "Firebase",
//   "Sass",
// ];

// ──────────────────────────────────────────────
// File: src/data/projectsData.js
// ──────────────────────────────────────────────

// export const projectsData = [
//   {
//     id: "mena-1",
//     title: "MenaCheckout Platform",
//     short: "Cross-border eCommerce checkout with real-time rates",
//     description:
//       "A fast, accessible checkout system with retry-safe payments, hosted as a static nextdotjs.js app. Implemented secure payment flows and currency conversion logic.",
//     tech: ["nextdotjs.js", "TypeScript", "tailwindcssCSS", "Redis"],
//     tags: ["Web", "eCommerce", "Payments"],
//     role: "Full-stack Developer",
//     outcome: "Reduced checkout errors by 23% and improved TTFB by 40%",
//     live: "https://menacheckout.example",
//     github: "https://github.com/you/menacheckout",
//     images: ["/images/mena-1.png", "/images/mena-2.png", "/images/mena-3.png"],
//     featured: true,
//   },
//   {
//     id: "influ-1",
//     title: "InfluHire Dashboard",
//     short: "Campaign management & analytics for creators",
//     description:
//       "An admin portal to manage campaigns, invoices and creators. Built with React, role-based auth, and a lightweight analytics pipeline.",
//     tech: ["React", "Redux", "Chart.js", "Node.js"],
//     tags: ["Dashboard", "Analytics", "Admin"],
//     role: "Frontend Lead",
//     outcome: "Saved content managers 2 hours/week through workflow automations",
//     live: "https://influ.example",
//     github: "https://github.com/you/influhire",
//     images: ["/images/influ-1.png", "/images/influ-2.png"],
//     featured: true,
//   },
//   {
//     id: "woodie-1",
//     title: "Woodie eCommerce",
//     short: "Minimal eCommerce with product customizer",
//     description:
//       "Frontend-only product configurator using localStorage and web workers for image generation. No backend required for demos.",
//     tech: ["React", "Canvas", "tailwindcss"],
//     tags: ["Web", "eCommerce", "Frontend"],
//     role: "Solo Engineer",
//     outcome: "Interactive demo used to win 2 client pitches",
//     live: "https://woodie.example",
//     github: "https://github.com/you/woodie",
//     images: ["/images/woodie-1.png"],
//     featured: false,
//   },
// ];

// export const projectsData = [
//   {
//     id: "octopus-epl",
//     title: "Octopus-EPL",
//     short: "Buy & sell automobile parts online with ease",
//     description:
//       "A dynamic, versatile online platform for buying and selling automobile parts and accessories. Built with React and Redux for fast performance and real-time updates.",
//     tech: ["React", "Redux", "tailwindcssCSS", "JavaScript"],
//     tags: ["Web", "eCommerce", "React"],
//     role: "Frontend Developer",
//     outcome: "Increased conversion rate by 30% due to improved UX.",
//     live: "https://octopus-epl.com/",
//     github: null,
//     images: [octopus],
//     featured: true,
//   },
//   {
//     id: "influhire",
//     title: "InfluHire",
//     short: "Connecting influencers and brands seamlessly",
//     description:
//       "A platform connecting influencers with brands for seamless collaborations and campaign management. Built with React, Redux, and Bootstrap.",
//     tech: ["React", "Redux", "Bootstrap", "JavaScript"],
//     tags: ["Web", "Dashboard", "React"],
//     role: "Frontend Developer",
//     outcome: "Reduced client onboarding time by 40%.",
//     live: "https://influhire.com",
//     github: null,
//     images: [influhire],
//     featured: true,
//   },
//   {
//     id: "bot-pro",
//     title: "Bot-Pro",
//     short: "Automation tool for customer support & chat",
//     description:
//       "An advanced automation tool for customer support and task automation. Built with React and tailwindcssCSS, featuring chatbot integration and real-time analytics.",
//     tech: ["React", "tailwindcssCSS", "JavaScript"],
//     tags: ["Web", "AI", "Automation"],
//     role: "Full-stack Developer",
//     outcome: "Handled 10k+ conversations monthly with 99% uptime.",
//     live: "https://bot-alveegits-projects.vercel.app/",
//     github: "https://github.com/AlveeGit/bot",
//     images: [bot],
//     featured: false,
//   },
//   {
//     id: "menacheckout",
//     title: "MenaCheckout Platform",
//     short: "Cross-border eCommerce checkout with real-time rates",
//     description:
//       "A fast, accessible checkout system with retry-safe payments, hosted as a static nextdotjs.js app. Implemented secure payment flows and currency conversion logic.",
//     tech: ["nextdotjs.js", "TypeScript", "tailwindcssCSS", "Redis"],
//     tags: ["Web", "eCommerce", "Payments"],
//     role: "Full-stack Developer",
//     outcome: "Reduced checkout errors by 23% and improved TTFB by 40%.",
//     live: "https://menacheckout.com",
//     github: null,
//     images: [menacheckout],
//     featured: true,
//   },
//   {
//     id: "dking-solution",
//     title: "DKingSolution",
//     short: "Construction project management web tool",
//     description:
//       "A project management tool for construction teams, enabling planning, scheduling, and tracking with interactive dashboards and task automation.",
//     tech: ["React", "Bootstrap", "JavaScript"],
//     tags: ["Web", "Project Management"],
//     role: "Frontend Developer",
//     outcome: "Improved collaboration efficiency by 35%.",
//     live: "https://dking-solution.vercel.app/",
//     github: "https://github.com/AlveeGit/dking-solution",
//     images: [dking],
//     featured: false,
//   },
//   {
//     id: "menamedica",
//     title: "MenaMedica",
//     short: "Healthcare platform for patients & professionals",
//     description:
//       "A healthcare app enabling appointment booking, prescription management, and health tracking. Developed with React and Redux.",
//     tech: ["React", "Redux", "Bootstrap", "JavaScript"],
//     tags: ["Web", "Healthcare"],
//     role: "Frontend Developer",
//     outcome: "Streamlined appointment scheduling by 60%.",
//     live: "https://menamedica.com",
//     github: null,
//     images: [menamedica],
//     featured: true,
//   },
//   {
//     id: "builder",
//     title: "Builder",
//     short: "Construction project planning dashboard",
//     description:
//       "An app for managing construction projects, featuring planning, scheduling, and Gantt chart visualization.",
//     tech: ["React", "tailwindcssCSS", "JavaScript"],
//     tags: ["Web", "Dashboard"],
//     role: "Frontend Developer",
//     outcome: "Increased task tracking accuracy by 40%.",
//     live: "https://builder-ai-umber.vercel.app/",
//     github: "https://github.com/AlveeGit/builder.ai",
//     images: [builder],
//     featured: false,
//   },
//   {
//     id: "faarm",
//     title: "Faarm",
//     short: "Smart agriculture management dashboard",
//     description:
//       "A modern agriculture management platform offering tools for crop tracking, resource management, and yield analysis.",
//     tech: ["nextdotjs.js", "tailwindcssCSS", "JavaScript"],
//     tags: ["Web", "Agriculture"],
//     role: "Frontend Developer",
//     outcome: "Enhanced farmer efficiency by 50%.",
//     live: "https://faarm.vercel.app/",
//     github: "https://github.com/AlveeGit/Faarm",
//     images: [faarm],
//     featured: false,
//   },
//   {
//     id: "travelman",
//     title: "TravelMan",
//     short: "Plan trips & manage itineraries effortlessly",
//     description:
//       "A travel planning tool designed for seamless itinerary creation, booking management, and destination exploration.",
//     tech: ["React", "Firebase", "Bootstrap", "JavaScript"],
//     tags: ["Web", "Travel"],
//     role: "Frontend Developer",
//     outcome: "Helped 1k+ users manage trips efficiently.",
//     live: "https://travel-man.vercel.app/",
//     github: "https://github.com/AlveeGit/travel-man",
//     images: [travel],
//     featured: false,
//   },
// ];

// export const categories = [
//   "All",
//   ...Array.from(
//     new Set(projectsData.flatMap((p) => p.tags.map((t) => t)))
//   ).sort(),
// ];
