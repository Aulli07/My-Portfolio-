import {lazy, Suspense} from "react";

import { Reveal } from "./components/reveal";

import { Header } from "./ui/header";
import { FirstView } from "./ui/first-view";
// import { MyStats } from "./ui/first-view";
import { AboutMe } from "./ui/about";
import { BuildClasses } from "./ui/services";

const Projects = lazy(() => import ("./ui/projects").then((module) => ({ default: module.Projects })));

import { Skills } from "./ui/skills";
import { Contact } from "./ui/contact";
import { Footer } from "./ui/footer";

export function App() {
  return (
    <main className="font-heading py-3 min-h-screen">
      <Header />
      <FirstView />
      {/* <MyStats /> */}
      <Reveal><AboutMe /></Reveal>
      <Reveal><BuildClasses /></Reveal>
      <Suspense fallback={<div className="animate-pulse rounded-xl" />}>
        <Reveal><Projects /></Reveal>
      </Suspense>
      <Reveal><Skills /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </main>
  )
}

export default App
