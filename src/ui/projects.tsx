import { useState } from "react";

import { FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import { myProjects } from "../data/info";




export function Projects() {
  const [ imageSlot, setImageSlot ] = useState<number>(0);

  const wrap = (index: number, length: number) => ((index % length) + length) % 3;

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20 lg:py-30 lg:px-16 bg-gradient-to-b from-[#ffffff] via-[#fff6f3]/[0.1] to-[#ff5a3d]/[0.1]">
      <h2 className="px-1 text-2xl font-bold tracking-tight text-[#151618] font-sans md:px-2 md:text-5xl lg:text-6xl lg:flex justify-center">
        What I have built
      </h2>

      <div className="mt-8 grid gap-8 md:mt-12 lg:mt-14 md:gap-10 lg:gap-12">
        {myProjects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-2xl border border-[#f3dfd8] bg-white p-5 shadow-sm shadow-[#2c1a1510] transition duration-200 hover:border-[#ff9b86] hover:shadow-md hover:shadow-[#ff5a3d]/10 md:rounded-3xl md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-sans text-2xl font-bold tracking-tight text-[#151618] md:text-4xl lg:text-4.5xl">
                {project.name}
              </h3>

              <div className="flex shrink-0 items-center gap-2 md:gap-3 lg:gap-9" aria-label={`${project.name} links`}>
                {project.siteLink && (
                  <a
                    href={project.siteLink}
                    aria-label={`View ${project.name} live preview`}
                    title="Live preview"
                    className="grid size-10 md:size-12 place-items-center rounded-xl border border-[#f3dfd8] text-[#ff5a3d] transition-colors hover:border-[#ff5a3d] hover:bg-[#fff1ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d] md:size-12"
                  >
                    <FaArrowUpRightFromSquare aria-hidden="true" className="size-4 md:size-5 lg:size-7" />
                  </a>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} source code on GitHub`}
                  title="GitHub repository"
                  className="grid size-10 md:size-12 place-items-center rounded-xl border border-[#f3dfd8] text-[#151618] transition-colors hover:border-[#ff5a3d] hover:bg-[#fff1ec] hover:text-[#ff5a3d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d] md:size-12"
                >
                  <FaGithub aria-hidden="true" className="size-5 md:size-6 lg:size-8" />
                </a>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2 md:mt-5 md:gap-3">
              {project.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-[#fff1ec] px-3 py-1 text-xs md:text-sm lg:text-lg font-medium font-sans text-[#b3432f] md:px-4 md:py-1.5 ">
                  {skill}
                </span>
              ))}
            </div>

            <p className="mt-5 max-w-3xl font-sans text-base leading-7 text-[#6f7480] md:mt-7 lg:mt-9 md:text-xl lg:text-2xl md:leading-8">
              {project.description}
            </p>

            <div className="relative mt-6 md:mt-8 lg:mt-10">
              <img src={project.images.at(imageSlot)} alt={`${project.name} project preview`} className="h-45 md:h-70 lg:h-80 w-full rounded-xl border border-[#ffded5] object-cover shadow-sm shadow-[#2c1a1510] md:rounded-2xl" />

              <button
                type="button"
                onClick={() => setImageSlot((prev) => wrap(prev-1, project.images.length))}
                aria-label="Show previous project image"
                className="absolute left-2 top-1/2 z-10 grid size-8 md:size-11 lg:size-15 -translate-y-1/2 place-items-center rounded-xl border border-white/25 bg-[#151618]/10 text-white backdrop-blur-sm transition-colors hover:bg-[#151618]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-4"
              >
                <FaArrowLeft aria-hidden="true" className="size-3 md:size-4 lg:size-6" />
              </button>

              <button
                type="button"
                onClick={() => setImageSlot((prev) => wrap(prev+1, project.images.length))}
                aria-label="Show next project image"
                className="absolute right-2 top-1/2 z-10 grid size-8 md:size-11 lg:size-15 -translate-y-1/2 place-items-center rounded-xl border border-white/25 bg-[#151618]/10 text-white backdrop-blur-sm transition-colors hover:bg-[#151618]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-4"
              >
                <FaArrowRight aria-hidden="true" className="size-3 md:size-4 lg:size-6" />
              </button>
            </div>

            {!project.devtComplete && (
              <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg font-medium text-[#b3432f] font-sans tracking-normal">Currently in development</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
