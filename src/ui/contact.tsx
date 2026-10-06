import { socialIconColors, socialLinks } from "../data/links";
import { SectionHeading } from "../components/section-heading";
import { SocialLink } from "../components/social-link";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full gap-3 max-w-6xl bg-white px-4 mt-16 md:px-12 md:mt-20 lg:flex justify-center"
    >
      <div className="grid gap-4 rounded-2xl md:rounded-3xl md:p-10">
        <SectionHeading className="text-[#151618] lg:flex justify-center">
          Want to talk?
        </SectionHeading>
        <p className="max-w-2xl lg:max-w-3xl text-base leading-7 text-[#6f7480] font-sans md:mt-5 lg:mt-7 md:text-xl lg:text-2xl md:leading-8 lg:text-center">
          Find me on any of these platforms. I&apos;m always open to a good
          conversation or a new idea.
        </p>

        <div className="flex justify-start lg:justify-center gap-2.5 md:mt-8 md:gap-4 lg:gap-7">
          {socialLinks.slice(0, 2).map(({ label, icon, href }) => (
            <SocialLink
              key={label}
              label={label}
              icon={icon}
              href={href}
              className={`w-32 md:w-44 lg:w-50 border border-[#ff5a3d]/30 ${href.endsWith(".com") ? "bg-white text-[#51545b] hover:bg-[#fff1ec]" : "bg-[#ff5a3d] text-white hover:bg-[#f04a2c]"}`}
              iconClassName={`${href.endsWith(".com") ? "text-[#ff5a3d]" : "text-white"} transition-colors`}
            />
          ))}
        </div>

        <div className="w-[80%] lg:w-full flex flex-wrap justify-between lg:justify-center lg:gap-18 items-center mt-2 mb-12 md:mt-10">
          {socialLinks.slice(2).map(({ label, icon, href }) => (
            <SocialLink
              key={label}
              label={label}
              icon={icon}
              href={href}
              iconOnly
              iconClassName={socialIconColors[icon]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
