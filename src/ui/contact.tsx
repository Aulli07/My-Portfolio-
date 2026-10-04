import { icons, socialIconColors, socialLinks } from "../data/links";



export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full gap-3 max-w-6xl bg-white px-4 mt-16 md:px-12 md:mt-20 lg:flex justify-center">
      <div className="grid gap-4 rounded-2xl md:rounded-3xl md:p-10">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-[#151618] md:text-5xl lg:text-6xl lg:flex justify-center">
          Want to talk?
        </h2>
        <p className="max-w-2xl lg:max-w-3xl text-base leading-7 text-[#6f7480] font-sans md:mt-5 lg:mt-7 md:text-xl lg:text-2xl md:leading-8 lg:text-center">
          Find me on any of these platforms. I&apos;m always open to a good conversation or a new idea.
        </p>

        <div className="flex justify-start lg:justify-center gap-2.5 md:mt-8 md:gap-4 lg:gap-7">
          {socialLinks.slice(0, 2).map(({ label, icon, href }) => {
            const Icon = icons[icon];
            const isExternal = href.endsWith(".com");

            return (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className={`
                  group flex w-32 md:w-44 lg:w-50 items-center gap-3 rounded-xl border border-[#ff5a3d]/30 
                  ${isExternal ? "bg-white text-[#51545b] hover:bg-[#fff1ec]" : "bg-[#ff5a3d] text-white hover:bg-[#f04a2c]"} 
                  px-3.5 py-2.5 text-sm md:text-lg lg:text-xl font-semibold font-sans transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d] md:gap-4 md:px-5 md:py-3.5`}
              >
                <Icon aria-hidden="true" className={`size-4 md:size-5 lg:size-6 ${isExternal ? "text-[#ff5a3d]" : "text-white"} transition-colors`}/>
                {label}
              </a> 
            )
          })}
        </div>
  
        <div className="w-[80%] lg:w-full flex flex-wrap justify-between lg:justify-center lg:gap-18 items-center mt-2 mb-12 md:mt-10">
          {socialLinks.slice(2).map(({ label, icon, href }) => {
            const Icon = icons[icon];
            const isExternal = href.startsWith("http");

            return (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                aria-label={label}
                title={label}
                className="grid size-10 place-items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d]"
              >
                <Icon aria-hidden="true" className={`size-6.5 md:size-9 lg:size-10 ${socialIconColors[icon]}`} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
