import React from "react";
import SectionWrapper from "../section-wrapper";
import { aboutParagraphs } from "@/data/aboutParagraphs";

const About = () => {
  return (
    <SectionWrapper title="About me">
      <div className="flex flex-col gap-2">
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
