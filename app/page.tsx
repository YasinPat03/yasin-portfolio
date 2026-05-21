import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Education } from "@/components/sections/education";
import { SkinFast } from "@/components/sections/skinfast";
import { OtherProjects } from "@/components/sections/other-projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-3xl px-6 md:px-8">
        <Hero />
        <Education />
        <SkinFast />
        <OtherProjects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
