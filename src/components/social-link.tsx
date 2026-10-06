import { Icon } from "../ui/side-menu";
import type { IconName } from "../data/links";

type SocialLinkProps = {
  label: string;
  icon: IconName;
  href: string;
  iconOnly?: boolean;
  iconClassName?: string;
  className?: string;
};

export function SocialLink({
  label,
  icon,
  href,
  iconOnly = false,
  iconClassName = "",
  className = "",
}: SocialLinkProps) {
  const isExternal = href.startsWith("http");

  if (iconOnly) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        aria-label={label}
        title={label}
        className={`grid size-10 place-items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d] ${className}`}
      >
        <Icon
          name={icon}
          className={`size-6.5 md:size-9 lg:size-10 ${iconClassName}`}
        />
      </a>
    );
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold font-sans transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d] md:gap-4 md:px-5 md:py-3.5 md:text-lg lg:text-xl ${className}`}
    >
      <Icon
        name={icon}
        className={`size-4 md:size-5 lg:size-6 ${iconClassName}`}
      />
      {label}
    </a>
  );
}
