import { useEffect, useState } from "react";
import { Icon, SideMenu } from "./side-menu";
import { primaryLinks } from "../data/links";

function MenuIcon() {
  return <svg 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" 
    className="size-7"><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-40 bg-[#fffdfb]/15 pt-3 backdrop-blur px-3 md:px-8 lg:px-32">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-[#f3dfd8] bg-white/50 backdrop-blur-md px-3 shadow-sm shadow-[#2c1a1510] md:px-7">
        <a href="#home" className="text-lg font-bold tracking-tight text-[#151618] md:text-xl lg:text-2xl">
          <span className="text-[#ff5a3d] tracking-tight font-bold font-sans text-xl md:text-2xl lg:text-3xl">Alwell</span>.dev
        </a>

        <nav className="hidden md:flex items-center justify-between w-[60%]">
          {primaryLinks.map(({ icon, label, href }) => (
            <a key={label} href={href} className="group grid size-10 place-items-center rounded-xl transition-colors">
              <Icon name={icon} className="size-6 lg:size-7 transition-colors text-[#151618]/70 group-hover:text-[#ff5a3d]" />
            </a>
            
          ))}
        </nav>

        <button type="button" onClick={() => setIsOpen(true)} aria-label="Open menu" aria-expanded={isOpen} className="grid size-11 place-items-center rounded-xl text-[#17181a] transition hover:bg-[#fff1ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d md:hidden">
          <MenuIcon />
        </button>
      </div>
      
      {typeof document !== "undefined" && <SideMenu setIsOpen={setIsOpen} isOpen={isOpen} />}
    </header>
  );
}
