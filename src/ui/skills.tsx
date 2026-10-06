import { skillRows, pillStyles } from "../data/info";
import { SectionHeading } from "../components/section-heading";
import { SkillPill } from "../components/skill-pill";

export function Skills() {
  return (
    <main className="bg-gradient-to-b from-[#ff5a3d]/[0.1] via-[#fff6f3]/30 to-[#ff5a3d]/[0.01]">
      <section
        id="skills"
        className="mx-auto w-full max-w-6xl px-4 py-16 md:px-12 lg:px-16 md:py-20 lg:py-30"
      >
        <SectionHeading className="text-[#151618] lg:flex justify-center">
          Skills I work with
        </SectionHeading>

        <div className="mt-10 max-w-6xl space-y-10 md:mt-12 lg:mt-14  md:space-y-8 lg:pb-10">
          {skillRows.map((row, rowIndex) => (
            <div
              key={row.join("-")}
              className={`flex flex-wrap gap-2 md:gap-4 lg:gap-6 ${
                rowIndex === 0
                  ? "justify-center"
                  : rowIndex === 1
                    ? "justify-center"
                    : "justify-center"
              }`}
            >
              {row.map((skill, skillIndex) => (
                <SkillPill
                  key={skill}
                  className={`px-4 py-2 text-sm md:text-xl lg:text-2xl shadow-sm shadow-[#ff5a3d]/5 hover:-translate-y-1 md:px-6 lg:px-8 md:py-3 ${
                    pillStyles[(rowIndex + skillIndex) % pillStyles.length]
                  }`}
                >
                  {skill}
                </SkillPill>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
