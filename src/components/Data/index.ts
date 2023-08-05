import { IHowWork, Project } from "../Interface";

export const projects: Project[] = [
  {
    name: "Project 1",
    img: "https://example.com/project1.jpg",
    liveLink: "https://example.com/project1-live",
    description:
      "This is the description for Project 1. It is a dummy project for demonstration purposes.",
    type: "All",
  },
  {
    name: "Project 2",
    img: "https://example.com/project2.jpg",
    liveLink: "https://example.com/project2-live",
    description:
      "This is the description for Project 2. It is a dummy project for demonstration purposes.",
    type: "All",
  },
  {
    name: "Project 3",
    img: "https://example.com/project3.jpg",
    liveLink: "https://example.com/project3-live",
    description:
      "This is the description for Project 3. It is a dummy project for demonstration purposes.",
    type: "All",
  },
  {
    name: "Project 4",
    img: "https://example.com/project4.jpg",
    liveLink: "https://example.com/project4-live",
    description:
      "This is the description for Project 4. It is a dummy project for demonstration purposes.",
    type: "All",
  },
];

export const options: string[] = [
  "All",
  "Full Stack",
  "Front End",
  "Back End",
  "Mobile",
  "Desktop",
];
export const howWorks: IHowWork[] = [
  {
    title: "Business",
    description: "Understand & PLanning",
  },
  {
    title: "Development",
    description: "Design & Develop",
  },
  {
    title: "Deployment",
    description: "Testing & Deploying",
  },
  {
    title: "Monitoring",
    description: "Monitoring & Consultancy",
  },
];

export const sliderData: IHowWork[] = [
  {
    title: "WEB SOLUTION",
    description: "We design and develop interactive we apps",
  },
  {
    title: "APPS DEVELOPMENT",
    description: "We design and develop interactive we apps",
  },
  {
    title: "CUSTOMIZED SOLUTION",
    description: "We design and develop interactive we apps",
  },
];

export const navLink = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Project", link: "/projects" },
  { name: "Contact", link: "/contact-us" },
];
