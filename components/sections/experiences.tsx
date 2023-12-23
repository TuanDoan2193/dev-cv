import React from "react";
import SectionWrapper from "../section-wrapper";
import Experience, { ExperienceType } from "../experience";
import { experiences } from "@/data/experiences";

const Experiences = () => {
  return (
    <SectionWrapper title="Experiences">
      <div className="grid gap-4 lg:grid-cols-3">
        {experiences.map((experience: ExperienceType) => (
          <Experience key={experience.companyName} experience={experience} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experiences;
