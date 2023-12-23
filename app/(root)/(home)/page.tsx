"use client";

import ParticlesContainer from "@/components/particles-container";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experiences from "@/components/sections/experiences";
import TechAndEducation from "@/components/sections/tech-and-education";
import Contact from "@/components/sections/contact";

export default function Page() {
  return (
    <main className="flex-1">
      <ParticlesContainer />

      <div className="md:container relative">
        <Hero />
        <About />
        <Experiences />
        <TechAndEducation />
        <div className="animate-float">
          <Contact />
        </div>
      </div>
    </main>
  );
}
