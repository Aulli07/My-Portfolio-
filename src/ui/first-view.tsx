import mainMe from "../assets/me-pics/main-me.jpg";
import { statClasses } from "../data/info";

import { FaEye, FaDownload } from "react-icons/fa6";



export function FirstView() {
  return (
    <section
      id="home"
      className="mx-auto flex w-full pt-16 lg:pt-10 pb-18 md:py-20 md:pb-50 max-w-6xl scroll-mt-20 flex-col justify-center gap-4 px-4 md:px-8 lg:px-22 lg:py-24 lg:items-center bg-gradient-to-b from-[#ffffff] via-[#fff6f3]/[0.1] to-[#ff5a3d]/[0.1]"
    >
      <p className="text-sm w-fit p-2 text-[#ff5a3d] font-sans font-medium border rounded-full animate-internship-beam motion-reduce:animate-none md:text-lg lg:text-xl md:p-3 lg:p-4 md:font-bold md:tracking-wide">Open to internship</p>

      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center mt-5 max-w-3xl space-y-4 md:space-y-6">
        
        <img src={mainMe} alt="My pic" className="rounded-full size-32 inset-0 object-cover width={100} height={100} border border-[#ff5a3d] md:size-40 lg:size-45" />

        <p className="text-lg text-[#151618]/70 md:text-3xl tracking-wide font-sans">Hi, I&apos;m Alwell.</p>

        <h1 className="max-w-3xl w-[90%] lg:w-full text-3xl font-bold leading-[1.05] tracking-tight text-[#151618] md:text-5xl lg:text-5xl font-sans lg:text-center ">
          Full-stack developer learning and building thoughtful digital products.
        </h1>

        {/* <p className="hidden max-w-2xl font-sans text-md leading-6 text-[#51545a] sm:text-xl sm:leading-9 tall:block">
          I think, design, and build great products that contribute to a better future.
        </p> */}
      </div>

      <div className="flex flex-wrap gap-3 md:gap-5 mt-3 md:mt-7">
        <a
          href="#projects"
          className="flex items-center gap-1.5 md:gap-4 rounded-xl bg-[#ff5a3d] px-3 md:px-5 py-2 md:py-3 text-sm md:text-2xl font-bold font-sans text-white transition-colors hover:bg-[#ef482d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d] focus-visible:ring-offset-2"
        >
          <FaEye className=" size-4 md:size-6 md:inline" />
          <span>View my work</span>
        </a>

        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-1.5 md:gap-4 rounded-lg border border-[#ff5a3d] bg-white px-3 md:px-5 py-2 md:py-3 text-sm md:text-2xl font-bold font-sans text-[#ff5a3d] transition-colors hover:bg-[#fff1ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d] focus-visible:ring-offset-2 "
        >
          <FaDownload className="md:inline size-4 md:size-6" />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  )
}

export function MyStats() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-rows-2 md:lg:grid-cols-2 gap-3 bg-gradient-to-b from-[#ff5a3d]/[0.1] via-[#fff6f3]/70 to-[#ff5a3d]/[0.07] px-4 py-6 md:gap-4 md:px-8 md:py-8 lg:px-16">
      {statClasses.map(({ title, count, icon: Icon }) => (
        <article
          key={title}
          className="flex items-center gap-4 md:gap-6 rounded-2xl border border-[#f3dfd8] p-3 bg-white transition duration-200 sm:p-4 hover:border-[#ff5a3d] min-h-24"
        >
          <div className="grid size-10 md:size-13 shrink-0 place-items-center rounded-xl transition-colors bg-[#ff5a3d] text-white sm:size-11">
            <Icon aria-hidden="true" className="size-4 md:size-6" />
          </div>

          <p className="font-sans flex items-center text-lg font-medium leading-5 text-[#6f7480] md:text-2xl">
            <span className="mr-1 text-2xl font-bold tracking-tight text-[#ff5a3d] md:text-3xl">
              {count}<span className="text-[#ff5a3d]">+</span>
            </span>
            {title}
          </p>
        </article>
      ))}
    </section>
  )
}
