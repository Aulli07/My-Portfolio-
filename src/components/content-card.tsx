import type { ReactNode } from "react";

type ContentCardProps = {
  children: ReactNode;
  className?: string;
};

export function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <article
      className={`rounded-2xl border border-[#f3dfd8] bg-white shadow-sm shadow-[#2c1a1510] ${className}`}
    >
      {children}
    </article>
  );
}
