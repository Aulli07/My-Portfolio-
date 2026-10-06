import { useEffect, useState } from "react";
import { SectionHeading } from "../components/section-heading";
import { aboutSlides } from "../data/info";

export function AboutMe() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % aboutSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gradient-to-b from-[#ff5a3d]/[0.07] via-[#fff6f3] to-[#fffdfb]">
      <section
        id="about"
        className="mx-auto max-w-6xl px-4 py-16 md:px-12 md:py-20 lg:px-19"
      >
        <SectionHeading className="mt-10 max-w-6xl text-[#ff5a3d] lg:flex justify-center">
          Who&apos;s Alwell?
        </SectionHeading>

        <div className="mt-8 grid gap-6 md:mt-12 md:gap-8 lg:mt-14 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <img
            src={aboutSlides[currentSlideIndex].image}
            alt={aboutSlides[currentSlideIndex].alt}
            className="h-50 w-full max-w-6xl rounded-2xl bg-[#fff1ec] object-cover md:h-80 lg:h-130 lg:self-stretch"
          />

          <div className="max-w-6xl space-y-4 text-lg leading-7 text-[#51545a] font-sans md:space-y-7 md:text-2xl md:leading-8 lg:text-2xl">
            <p>
              I&apos;m <b>Alwell Chukwuka</b>, a Software Engineering student at
              FUTA and a self-taught developer. I began{" "}
              <b>exploring frontend development in 2024</b> and have been
              building ever since.
            </p>

            <p>
              I enjoy reasoning through problems, turning ideas into clear
              experiences, and seeing a solution come together. I&apos;m
              currently building FootyDebates while sharing what I learn and
              create on social media.
            </p>

            <p>
              Outside of code, I support Manchester United (painfully) and enjoy
              spending time with people I care about.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
