import { useState } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaGithub,
} from "react-icons/fa6";

import { myProjects } from "../data/info";
import { ContentCard } from "../components/content-card";
import { IconButton } from "../components/icon-button";
import { SectionHeading } from "../components/section-heading";
import { SkillPill } from "../components/skill-pill";

export function Projects() {
  const [imageSlot, setImageSlot] = useState<number>(0);

  const wrap = (index: number, length: number) =>
    ((index % length) + length) % 3;

  return (
    <main className="bg-gradient-to-b from-[#ffffff] via-[#fff6f3]/[0.1] to-[#ff5a3d]/[0.1]">
      <section
        id="projects"
        className="mx-auto w-full max-w-6xl px-4 py-16 md:px-12 md:py-20 lg:py-30 lg:px-16"
      >
        <SectionHeading className="text-[#151618] lg:flex justify-center">
          What I have built
        </SectionHeading>

        <div className="mt-8 grid gap-6 md:mt-12 lg:mt-14 md:gap-10 lg:gap-12">
          {myProjects.map((project) => (
            <ContentCard
              key={project.name}
              className="overflow-hidden p-4 transition duration-200 hover:border-[#ff9b86] hover:shadow-md hover:shadow-[#ff5a3d]/10 md:rounded-3xl md:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-sans text-2xl font-bold tracking-tight text-[#151618] md:text-4xl lg:text-4.5xl">
                  {project.name}
                </h3>

                <div
                  className="flex shrink-0 items-center gap-2 md:gap-3 lg:gap-9"
                  aria-label={`${project.name} links`}
                >
                  {project.siteLink && (
                    <IconButton
                      icon={
                        <FaArrowUpRightFromSquare
                          aria-hidden="true"
                          className="size-4 md:size-5 lg:size-7"
                        />
                      }
                      label={`View ${project.name} live preview`}
                      href={project.siteLink}
                      className="size-10 border border-[#f3dfd8] text-[#ff5a3d] hover:border-[#ff5a3d] hover:bg-[#fff1ec] md:size-12"
                    ></IconButton>
                  )}
                  <IconButton
                    icon={
                      <FaGithub
                        aria-hidden="true"
                        className="size-5 md:size-6 lg:size-8"
                      />
                    }
                    label={`View ${project.name} source code on GitHub`}
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="size-10 border border-[#f3dfd8] text-[#151618] hover:border-[#ff5a3d] hover:bg-[#fff1ec] hover:text-[#ff5a3d] md:size-12"
                  ></IconButton>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 md:mt-5 md:gap-3">
                {project.skills.map((skill) => (
                  <SkillPill
                    key={skill}
                    className="bg-[#fff1ec] px-3 py-1 text-xs font-medium text-[#b3432f] md:px-4 md:py-1.5 md:text-sm lg:text-lg"
                  >
                    {skill}
                  </SkillPill>
                ))}
              </div>

              <div className="mt-4 grid gap-5 md:mt-7 md:grid-cols-2 md:items-stretch md:gap-8 lg:mt-9 lg:gap-12">
                <div className="md:order-2 md:flex md:flex-col">
                  <p className="max-w-3xl font-sans text-base leading-6 text-[#6f7480] md:text-xl lg:text-2xl md:leading-8 flex">
                    {project.description}
                  </p>
                  <p className="hidden md:lg:block max-w-3xl mt-5 font-sans text-base leading-6 text-[#6f7480] md:text-xl lg:text-2xl md:leading-8 flex-1">
                    {project.extraInfo}
                  </p>
                </div>

                <div className="relative md:order-1">
                  <img
                    src={project.images.at(imageSlot)}
                    alt={`${project.name} project preview`}
                    className="h-45 w-full rounded-xl border border-[#ffded5] object-cover shadow-sm shadow-[#2c1a1510] md:h-90 md:self-stretch md:rounded-2xl"
                  />

                  <IconButton
                    icon={
                      <FaArrowLeft
                        aria-hidden="true"
                        className="size-3 md:size-4 lg:size-6"
                      />
                    }
                    label="Show previous project image"
                    onClick={() =>
                      setImageSlot((prev) =>
                        wrap(prev - 1, project.images.length),
                      )
                    }
                    className="absolute left-2 top-1/2 z-10 size-8 -translate-y-1/2 border border-white/25 bg-[#151618]/10 text-white backdrop-blur-sm hover:bg-[#151618]/50 focus-visible:ring-white md:left-4 md:size-11 lg:size-15"
                  />

                  <IconButton
                    icon={
                      <FaArrowRight
                        aria-hidden="true"
                        className="size-3 md:size-4 lg:size-6"
                      />
                    }
                    label="Show next project image"
                    onClick={() =>
                      setImageSlot((prev) =>
                        wrap(prev + 1, project.images.length),
                      )
                    }
                    className="absolute right-2 top-1/2 z-10 size-8 -translate-y-1/2 border border-white/25 bg-[#151618]/10 text-white backdrop-blur-sm hover:bg-[#151618]/50 focus-visible:ring-white md:right-4 md:size-11 lg:size-15"
                  />
                </div>
              </div>

              {!project.devtComplete && (
                <div className="flex mt-2 justify-left items-center md:lg:flex md:justify-end">
                  <p className="text-sm font-medium tracking-normal text-[#b3432f] font-sans md:text-base lg:text-lg">Currently in development</p>
                </div>
              )}
            </ContentCard>
          ))}
        </div>
      </section>
    </main>
  );
}
