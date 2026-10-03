import type { IconType } from "react-icons";
import { FaCalendarDays, FaFolderOpen } from "react-icons/fa6"
import {
  FaBuilding, FaCode,
  FaRegAddressCard, FaRocket,
} from "react-icons/fa6";

import mainMe from "../assets/me-pics/main-me.jpg";
import secondMe from "../assets/me-pics/second-me.jpg";
import thirdMe from "../assets/me-pics/third-me.jpg";



export const statClasses : { title: string; count: number; icon: IconType }[] = [
  {
    title: "Projects built",
    count: 5,
    icon: FaFolderOpen,
  },
  {
    title: "Years of experience",
    count: 2,
    icon: FaCalendarDays,
  },
];



type Project = {
  name: string;
  repoUrl: string;
  siteLink?: string;
  skills: string[];
  images: string[];
  description: string;
  devtComplete: boolean;
};

export const myProjects: Project[] = [
  {
    name: "FootyDebates",
    repoUrl: "https://github/.",
    siteLink: "#",
    skills: ["React", "TypeScript", "Football"],
    images: [mainMe, secondMe, thirdMe],
    description:
      "A web app for comparing football players, sharing opinions, and sparking better football debates.",
    devtComplete: false,
  },
  {
    name: "NameGenius",
    repoUrl: "https://github/.",
    siteLink: "#",
    skills: ["React", "TypeScript", "Javascript"],
    images: [mainMe, secondMe, thirdMe],
    description:
      "A web app for comparing football players, sharing opinions, and sparking better football debates.",
    devtComplete: true,
  },
  {
    name: "BankDash",
    repoUrl: "https://github/.",
    siteLink: "#",
    skills: ["React", "TypeScript", "Figma"],
    images: [mainMe, secondMe, thirdMe],
    description:
      "A web app for comparing football players, sharing opinions, and sparking better football debates.",
    devtComplete: true,
  },
];



export const buildClasses: { title: string; description: string; icon: IconType }[] = [
  {
    title: "Portfolio sites",
    description: "Personal sites that present your work, skills, and story clearly.",
    icon: FaRegAddressCard,
  },
  {
    title: "Landing pages",
    description: "Focused, high-impact pages built to introduce and launch ideas.",
    icon: FaRocket,
  },
  {
    title: "Web applications",
    description: "Useful, responsive products designed around real user needs.",
    icon: FaCode,
  },
  {
    title: "Business sites",
    description: "Professional websites that help businesses build trust online.",
    icon: FaBuilding,
  },
];




export const skillRows = [
  ["React", "TypeScript", "JavaScript"],
  ["HTML", "CSS", "Tailwind CSS", "Node.js"],
  ["Git", "GitHub", "Figma"],
];

export const pillStyles = [
  "bg-[#fff1ec] text-[#b3432f] hover:bg-[#ff5a3d] hover:text-white",
  "bg-[#ffe8e0] text-[#9f3c2a] hover:bg-black hover:text-white",
  "bg-[#fff7f3] text-[#b3432f] hover:bg-[#ff7a61] hover:text-white",
  "bg-[#ffe0d7] text-[#943322] hover:bg-[#d9412a] hover:text-white",
];