import type { IconType } from "react-icons";
import { FaCalendarDays, FaFolderOpen } from "react-icons/fa6";
import {
  FaBuilding,
  FaCode,
  FaRegAddressCard,
  FaRocket,
  FaLaptopCode,
} from "react-icons/fa6";

import mainMe from "../assets/me-pics/main-me.jpg";
import secondMe from "../assets/me-pics/second-me.jpg";
import thirdMe from "../assets/me-pics/third-me.jpg";

export const statClasses: { title: string; count: number; icon: IconType }[] = [
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
  {
    title: "Technologies used",
    count: 8,
    icon: FaLaptopCode,
  },
];

type Project = {
  name: string;
  repoUrl: string;
  siteLink?: string;
  skills: string[];
  images: string[];
  description: string;
  extraInfo: string;
  devtComplete: boolean;
};

export const myProjects: Project[] = [
  {
    name: "FootyDebates",
    repoUrl: "https://github/Aulli07/FootyIQ.git",
    siteLink: "#",
    skills: ["React", "TypeScript", "REST API"],
    images: [mainMe, secondMe, thirdMe],
    description:
      "A football discussion platform for comparing players, exploring stats, and turning opinions into better debates.",
    extraInfo:
      "Built with React and TypeScript, with REST API integration planned to bring player data and comparisons into the experience. This project is currently in development.",
    devtComplete: false,
  },
  {
    name: "BalanceMe",
    repoUrl: "https://github/Aulli07/BalanceMe.git",
    siteLink: "#",
    skills: ["React", "TypeScript", "Tailwind"],
    images: [mainMe, secondMe, thirdMe],
    description:
      "A wellbeing-focused web app designed to help people build healthier routines and keep everyday life in balance.",
    extraInfo:
      "I used React, TypeScript, and Tailwind CSS to create a clear, responsive interface that makes personal wellbeing goals easier to understand and manage.",
    devtComplete: true,
  },
  {
    name: "BankDash",
    repoUrl: "https://github/Aulli07/Dashboard-UI-Clone.git",
    siteLink: "#",
    skills: ["React", "JavaScript", "Figma"],
    images: [mainMe, secondMe, thirdMe],
    description:
      "A modern banking dashboard concept that presents account activity, balances, cards, and financial actions in one focused workspace.",
    extraInfo:
      "Designed from a Figma concept and implemented with React and JavaScript, this project focuses on translating a polished visual design into a responsive dashboard interface.",
    devtComplete: true,
  },
];

export const buildClasses: {
  title: string;
  description: string;
  icon: IconType;
}[] = [
  {
    title: "Portfolio sites",
    description:
      "Personal sites that present your work, skills, and story clearly.",
    icon: FaRegAddressCard,
  },
  {
    title: "Landing pages",
    description:
      "Focused, high-impact pages built to introduce and launch ideas.",
    icon: FaRocket,
  },
  {
    title: "Web applications",
    description: "Useful, responsive products designed around real user needs.",
    icon: FaCode,
  },
  {
    title: "Business sites",
    description:
      "Professional websites that help businesses build trust online.",
    icon: FaBuilding,
  },
];

export const skillRows = [
  ["React", "TypeScript", "JavaScript"],
  ["HTML", "CSS", "Tailwind CSS", "Node.js"],
  ["Git", "GitHub", "Figma"],
  ["Framer Motion", "Zustand"],
];

export const pillStyles = [
  "bg-[#fff1ec] text-[#b3432f] hover:bg-[#ff5a3d] hover:text-white",
  "bg-[#ffe8e0] text-[#9f3c2a] hover:bg-black hover:text-white",
  "bg-[#fff7f3] text-[#b3432f] hover:bg-[#ff7a61] hover:text-white",
  "bg-[#ffe0d7] text-[#943322] hover:bg-[#d9412a] hover:text-white",
];

export const aboutSlides = [
  {
    image: mainMe,
    alt: "A photo of me, smiling and looking confident.",
  },
  {
    image: secondMe,
    alt: "A photo of me, smiling and looking confident.",
  },
  {
    image: thirdMe,
    alt: "A photo of me, smiling and looking confident.",
  },
];
