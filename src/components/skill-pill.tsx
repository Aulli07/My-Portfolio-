import type { ReactNode } from "react";

type SkillPillProps = {
  children: ReactNode;
  className?: string;
};

export function SkillPill({ children, className = "" }: SkillPillProps) {
  return (
    <span
      className={`rounded-full font-semibold font-sans transition duration-200 ${className}`}
    >
      {children}
    </span>
  );
}
