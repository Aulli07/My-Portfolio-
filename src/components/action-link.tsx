import type { ReactNode } from "react";

type ActionLinkProps = {
  children: ReactNode;
  href?: string;
  icon?: ReactNode;
  onClick?: () => void;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

const variants = {
  primary: "bg-[#ff5a3d] text-white hover:bg-[#ef482d]",
  secondary:
    "border border-[#ff5a3d] bg-white text-[#ff5a3d] hover:bg-[#fff1ec]",
  light:
    "border border-[#ff5a3d]/30 bg-white text-[#51545b] hover:bg-[#fff1ec]",
};

export function ActionLink({
  children,
  href,
  icon,
  onClick,
  target,
  rel,
  variant = "primary",
  className = "",
}: ActionLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-bold font-sans transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d] focus-visible:ring-offset-2 md:gap-4 md:px-5 md:py-3 md:text-2xl ${variants[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
