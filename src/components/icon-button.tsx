import type { ReactNode } from "react";

type IconButtonProps = {
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  className?: string;
};

const sharedClasses =
  "grid place-items-center rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d]";

export function IconButton({
  icon,
  label,
  href,
  onClick,
  target,
  rel,
  className = "",
}: IconButtonProps) {
  const classes = `${sharedClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={label}
        title={label}
        className={classes}
      >
        {icon}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={classes}
    >
      {icon}
    </button>
  );
}
