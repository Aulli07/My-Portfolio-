import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`px-1 text-3xl font-bold tracking-tight font-sans md:px-2 md:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </h2>
  );
}
