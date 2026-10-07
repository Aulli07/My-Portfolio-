import { 
  FaHouse, FaBriefcase, FaLayerGroup, FaCode, 
  FaUserTie, FaLinkedinIn,
  FaWhatsapp, FaXTwitter, FaGithub, FaPhone, 
  FaFacebook
 } from "react-icons/fa6";
import { FiMail, FiMessageCircle } from "react-icons/fi";

import type { IconType } from "react-icons/lib";


export const primaryLinks: { label: string; icon: IconName; href: string }[] = [
  { label: "Home", icon: "home", href: "#home" },
  { label: "About", icon: "about", href: "#about" },
  { label: "Services", icon: "services", href: "#services" },
  { label: "Projects", icon: "projects", href: "#projects" },
  { label: "Skills", icon: "skills", href: "#skills" },
  { label: "Contact", icon: "contact", href: "#contact" },
];

export const socialLinks: { label: string; icon: IconName; href: string }[] = [
  { label: "Call me", icon: "phone", href: "tel:+2347068634604" },
  { label: "Send mail", icon: "email", href: "mailto:chukwukaaulli@gmail.com" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/alwell-chukwuka" },
  { label: "WhatsApp", icon: "whatsapp", href: "https://wa.me/2349153211007?text=Hi%20Alwell!" },
  { label: "X (Twitter)", icon: "twitter", href: "https://x.com/c_aulli" },
  { label: "GitHub", icon: "github", href: "https://github.com/Aulli07" },
  { label: "Facebook", icon: "facebook", href: "https://facebook.com/profile.php?id=61588795782793" },
];

export type IconName =
  | "home"
  | "projects"
  | "services"
  | "email"
  | "skills"
  | "about"
  | "contact"
  | "linkedin"
  | "whatsapp"
  | "twitter"
  | "phone"
  | "facebook"
  | "github";

export const icons: Record<IconName, IconType> = {
  home: FaHouse,
  projects: FaBriefcase,
  services: FaLayerGroup,
  email: FiMail,
  skills: FaCode,
  about: FaUserTie,
  contact: FiMessageCircle,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
  twitter: FaXTwitter,
  github: FaGithub,
  phone: FaPhone,
  facebook: FaFacebook
};

export const socialIconColors: Record<string, string> = {
  linkedin: "text-[#151618]/60 hover:text-[#0a66c2]",
  whatsapp: "text-[#151618]/60 hover:text-[#25d366]",
  twitter: "text-[#151618]/60 hover:text-[#151618]",
  github: "text-[#151618]/60 hover:text-[#181717]",
  email: "text-[#19ac32]",
  phone: "text-[#0a66c5]",
  facebook: "text-[#151618]/60 hover:text-[#0a66c2]"
};