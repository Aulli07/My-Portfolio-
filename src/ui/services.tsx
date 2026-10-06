import { buildClasses } from "../data/info";
import { ContentCard } from "../components/content-card";
import { SectionHeading } from "../components/section-heading";

export function BuildClasses() {
  return (
    <section
      id="services"
      className="mx-auto w-full max-w-6xl px-4 py-16 md:px-12 md:py-20 lg:py-30 lg:px-16"
    >
      <SectionHeading className="text-[#151618] lg:flex justify-center">
        What do I build
      </SectionHeading>

      <div className="mt-8 grid gap-4 md:mt-12 lg:mt-14 md:grid-cols-2 md:gap-8 lg:gap-12">
        {buildClasses.map(({ title, description, icon: Icon }) => (
          <ContentCard
            key={title}
            className="group flex items-start gap-4 p-5 transition duration-200 hover:-translate-y-2 hover:border-[#ff9b86] hover:shadow-md hover:shadow-[#ff5a3d]/10 md:gap-6 md:p-7"
          >
            <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#fff1ec] text-[#ff5a3d] transition-colors group-hover:bg-[#ff5a3d] group-hover:text-white md:size-16 md:rounded-2xl">
              <Icon aria-hidden="true" className="size-5 md:size-7 lg:size-9" />
            </div>

            <div className="space-y-1.5 pt-0.5 md:space-y-3 md:pt-1">
              <h3 className="font-sans text-lg font-bold tracking-tight text-[#151618] md:text-2xl lg:text-3xl">
                {title}
              </h3>
              <p className="text-sm leading-6 font-sans text-[#6f7480] md:text-lg lg:text-xl md:leading-7">
                {description}
              </p>
            </div>
          </ContentCard>
        ))}
      </div>
    </section>
  );
}
