import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import { type IconName, icons } from "../data/links"
import { FaXmark } from "react-icons/fa6";

import { primaryLinks} from "../data/links";




export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const IconComponent = icons[name];
  return <IconComponent aria-hidden="true" className={className} />;
}

export function SideMenu({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const closeMenu = () => setIsOpen(false);
  const navigationLinkClass =
    "group flex items-center gap-3 rounded-xl px-3 py-2 text-lg font-semibold tracking-[0.01em] text-[#161719] transition-colors hover:bg-[#fff1ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d]";

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          aria-label="Site navigation"
          className="fixed inset-0 z-50 border-l border-[#f3dfd8] bg-[#fffdfb] shadow-2xl shadow-slate-300/25 md:hidden"
        >
          <div className="mx-auto flex h-full w-full max-w-xl flex-col px-5 mt-8 sm:px-10">
            <div className="flex items-center justify-between">
              <a
                href="#home"
                onClick={closeMenu}
                className="font-sans text-xl font-bold tracking-tight text-[#151618]"
              >
                <span className="text-[#ff5a3d]">Alwell</span>.dev
              </a>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
                className="grid size-9 place-items-center rounded-lg border border-[#ff9b86] text-[#51545a] transition hover:bg-[#fff1ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d]"
              >
                <FaXmark aria-hidden="true" className="size-6" />
              </button>
            </div>

            <p className="mt-5 max-w-sm text-md leading-6 text-[#6f7480]">
              Explore my work, growth, and the ideas I am building into impact.
            </p>

            <nav className="mt-7" aria-label="Primary navigation">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#ff5a3d]">
                Explore
              </p>

              <div className="space-y-2">
                {primaryLinks.map(({ label, icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={closeMenu}
                    className={navigationLinkClass}
                  >
                    <Icon
                      name={icon}
                      className="size-5 text-[#737985] transition-colors group-hover:text-[#ff5a3d]"
                    />
                    {label}
                  </a>
                ))}
              </div>
            </nav>

            {/* <section className="mt-10" aria-labelledby="socials-heading">
              <p
                id="socials-heading"
                className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#ff5a3d]"
              >
                My socials
              </p>

              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map(({ label, icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-[#51545a] transition-colors hover:bg-[#fff1ec] hover:text-[#151618] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d]"
                  >
                    <Icon
                      name={icon}
                      className={`size-5 shrink-0 ${socialIconColors[icon]}`}
                    />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </section> */}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>,
    document.body,
  );
}
