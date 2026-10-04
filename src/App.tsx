import {lazy, Suspense} from "react";

import { Header } from "./ui/header";
import { FirstView } from "./ui/first-view";
import { MyStats } from "./ui/first-view";
import { AboutMe } from "./ui/about";
import { BuildClasses } from "./ui/services";

const Projects = lazy(() => import ("./ui/projects").then((module) => ({ default: module.Projects })));

import { Skills } from "./ui/skills";
import { Messages } from "./ui/contact";
import { Footer } from "./ui/footer";

export function App() {
  return (
    <main className="font-heading py-3 min-h-screen">
      <Header />
      <FirstView />
      <MyStats />
      <AboutMe />
      <BuildClasses />
      <Suspense fallback={<div className="animate-pulse rounded-xl" />}>
        <Projects />
      </Suspense>
      <Skills />
      <Messages />
      <Footer />
    </main>
  )
}

export default App
