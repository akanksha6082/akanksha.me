import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { News } from "@/components/News";
import { Events } from "@/components/Events";
import { Publications } from "@/components/Publications";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-w-0 flex-1">
        <Hero />
        <About />
        <Education />
        <Experience />
        <News />
        <Events />
        <Publications />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
