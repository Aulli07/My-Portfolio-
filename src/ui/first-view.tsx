import { useState } from "react";

import mainMe from "../assets/me-pics/main-me.jpg";
import { statClasses } from "../data/info";

import { FaEye, FaDownload } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";



export function FirstView() {
  const [ downloadShow, setDownloadShow ] = useState(false);  

  function handleDownload() {
    const d = document.createElement("a");
    d.href = "../assets/download/my-resume.pdf";
    d.download = "Ollie-CV.pdf"
    d.click();

    setDownloadShow(true);
    setTimeout(() => setDownloadShow(false), 3000)
  }

  return (
    <main className="bg-gradient-to-b from-[#ffffff] via-[#fff6f3]/[0.1] to-[#ff5a3d]/[0.1]">
      <section
      id="home"
      className="mx-auto flex w-full pt-16 lg:pt-10 pb-18 md:py-20 md:pb-35 max-w-6xl scroll-mt-20 flex-col justify-center gap-4 px-4 md:px-8 lg:px-22 lg:py-24 lg:items-center"
      >
        <p className="text-sm w-fit p-2 text-[#ff5a3d] font-sans font-medium border rounded-full animate-internship-beam motion-reduce:animate-none md:text-lg md:p-3 md:font-bold md:tracking-normal">Open to internship</p>

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

        <div className="flex flex-wrap lg:pb-30 gap-3 md:gap-5 mt-3 md:mt-6">
          <a
            href="#projects"
            className="flex items-center gap-1.5 md:gap-4 rounded-xl bg-[#ff5a3d] px-3 md:px-5 py-2 md:py-3 text-sm md:text-2xl font-bold font-sans text-white transition-colors hover:bg-[#ef482d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d] focus-visible:ring-offset-2"
          >
            <FaEye className=" size-4 md:size-6 md:inline" />
            <span>View my work</span>
          </a>

          <a
            onClick={handleDownload}
            className="flex items-center gap-1.5 md:gap-4 rounded-lg border border-[#ff5a3d] bg-white px-3 md:px-5 py-2 md:py-3 text-sm md:text-2xl font-bold font-sans text-[#ff5a3d] transition-colors hover:bg-[#fff1ec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a3d] focus-visible:ring-offset-2 "
          >
            <FaDownload className="md:inline size-4 md:size-6" />
            <span>Download Resume</span>
            <DownloadAnimateUI downloadShow={downloadShow}/>
          </a>
        </div>
      </section>
    </main>
  )
}

export function MyStats() {
  return (
    <main className="bg-gradient-to-b from-[#ff5a3d]/[0.1] via-[#fff6f3]/70 to-[#ff5a3d]/[0.07]">
      <section className="mx-auto grid w-full max-w-6xl grid-rows-2 md:grid-cols-2 lg:grid-cols-2 gap-3 px-4 py-6 md:gap-4 md:px-8 md:py-8 lg:px-16">
        {statClasses.map(({ title, count, icon: Icon }) => (
          <article
            key={title}
            className="flex items-center gap-4 md:gap-6 rounded-2xl border border-[#f3dfd8] p-3 bg-white transition duration-200 sm:p-4 hover:border-[#ff5a3d] min-h-24"
          >
            <div className="grid size-10 md:size-10 shrink-0 place-items-center rounded-xl transition-colors bg-[#ff5a3d] text-white">
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
    </main>
  )
}

function DownloadAnimateUI({downloadShow} : {downloadShow: boolean}) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center">
      <AnimatePresence>
        {downloadShow && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-auto w-45 bg-white border border-[#ff5a3d] overflow-hidden rounded-xl shadow-xl"
            role="status"
          >
            <div className="px-3 py-2 text-sm text-[#151618]/70 font-sans font-semibold">Downloading...</div>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-1 origin-left bg-[#ff5a3d]"
            />
          </motion.div>
        )}  
      </AnimatePresence>
    </div>
  )
}
