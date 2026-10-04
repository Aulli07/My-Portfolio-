export function AboutMe() {
  return (
    <main className="bg-gradient-to-b from-[#ff5a3d]/[0.07] via-[#fff6f3] to-[#fffdfb]">
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:px-12 md:py-20 lg:px-19">
        <h2 className="mt-10 max-w-6xl md:px-2 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#ff5a3d] font-sans lg:flex justify-center">
          Who&apos;s Alwell?
        </h2>

        <div className="mt-6 md:mt-8 max-w-6xl space-y-4 md:space-y-7 text-lg leading-7 text-[#51545a] font-sans md:text-2xl lg:text-2xl md:leading-8 lg:flex flex-col justify-center">
          <p>
            I&apos;m <b>Alwell Chukwuka</b>, a Software Engineering student at FUTA and a self-taught
            developer. I began <b>exploring frontend development in 2024</b> and have been building ever
            since.
          </p>

          <p>
            I enjoy reasoning through problems, turning ideas into clear experiences, and seeing
            a solution come together. I&apos;m currently building FootyDebates while sharing what I
            learn and create on social media.
          </p>

          <p>
            Outside of code, I support Manchester United (painfully) and enjoy spending time with
            people I care about.
          </p>
        </div>
      </section>
    </main>
  );
}
