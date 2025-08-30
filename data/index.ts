// * I Was trying  import icons for navigation items
export const navItems = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Projects", link: "#projects" },
  { title: "Experience", link: "#experience" },
  { title: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I focus on building scalable, user-friendly interfaces",
    description: "",
    className: "md:col-span-4 md:row-span-2 lg:col-span-4 lg:row-span-2",
    imgClassName: "w-full h-full ",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to remote opportunities worldwide",
    description: "",
    className: "md:col-span-4 md:row-span-1 lg:col-span-4 lg:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center items-center ",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "React, Next.js, TypeScript, TailwindCSS, Node.js",
    className: "md:col-span-4 md:row-span-1 lg:col-span-4 lg:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "md:col-span-3 md:row-span-1 lg:col-span-3 lg:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Building the Ultimate AI SaaS Project",
    description:
      "in progress: A full-stack AI SaaS platform featuring AI-powered interviews, resume reviews, and technical question assessments with credits system and payments integration.",
    className: "md:col-span-5 md:row-span-2 lg:col-span-5 lg:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s build something impactful together 🚀",
    description: "",
    className: "md:col-span-3 md:row-span-1 lg:col-span-3 lg:row-span-1 ",
    imgClassName: "",
    titleClassName: "justify-center md:min-w-full min-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    des: "A complete e-commerce web app with authentication, cart, checkout, wishlist, and product filtering. Built using React & TailwindCSS without Redux.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg", "/vercel.svg"],
    link: "https://github.com/ahmedmostafa-io/E-Commerce-React",
    liveLink: "https://e-commerce-react-xi-khaki.vercel.app/",
  },
  {
    id: 2,
    title: "Redux Bank",
    des: "A banking simulation app showcasing Redux Toolkit for state management and handling complex user flows.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/redux.png", "/js.png", "/tail.svg", "/vercel.svg"],
    link: "https://github.com/ahmedmostafa-io/Redux-Bank",
    liveLink: "https://redux-bank-pi.vercel.app/",
  },
  {
    id: 3,
    title: "AI Interviews, Resume Reviews, Technical Questions",
    des: "A full-stack AI SaaS platform featuring AI-powered interviews, resume reviews, and technical question assessments with credits system and payments integration.",
    img: "/p3.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/ai.svg", "/vercel.svg"],
    link: "https://github.com/ahmedmostafa-io",
    liveLink: "https://github.com/ahmedmostafa-io",
  },
  {
    id: 4,
    title: "Eat n Split",
    des: "A React app to split bills between friends. Focused on state management with props and component design.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/js.png", "/tail.svg", "/vercel.svg"],
    link: "https://github.com/ahmedmostafa-io/eat-n-split",
    liveLink: "https://eat-n-split-self-five.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Ahmed is one of the best in projects at Route Academy, always delivering with high quality and dedication.",
    name: "Basil Nagah",
    title: "Mentor at Route Academy",
  },
];

export const companies = [
  {
    id: 1,
    name: "Route Academy",
    img: "/route.jpeg",
    nameImg: "Route",
  },
  {
    id: 2,
    name: "Udemy",
    img: "/uLogo.jpeg",
    nameImg: "Udemy",
  },
  {
    id: 3,
    name: "GitHub",
    img: "/git.svg",
    nameImg: "GitHub",
  },
  {
    id: 4,
    name: "LinkedIn",
    img: "/link.svg",
    nameImg: "LinkedIn",
  },
  {
    id: 5,
    name: "OpenAI",
    img: "/openLogo.png",
    nameImg: "OpenAI",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern - Microsoft Web Development Sprints",
    desc: "Completed an intensive sprints program with Microsoft, focusing on modern web development practices, scalable architectures, and best coding standards.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer - Route Academy",
    desc: "Graduated after building multiple real-world projects using React, Next.js, and TailwindCSS with a strong focus on performance and clean UI/UX.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    desc: "Developed a full e-commerce application with JWT authentication, checkout flow, wishlist, and cart management using Redux Toolkit & RTK Query.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "AI Interviews, Resume Reviews, Technical Questions (In Progress)",
    desc: "Currently developing a SaaS platform with AI-powered interviews, resume reviews, and technical question assessments with credits system and payments integration.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ahmedmostafa-io",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/AhmedMostafa_io", // لو عندك تويتر أضف اللينك
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ahmed-mostafa-582378373/",
  },
];
