import React from "react";
import { Badge } from "../ui/badge";
import SectionWrapper from "../section-wrapper";
import { techs } from "@/data/techs";
import { universities } from "@/data/universities";

const TechAndEducation = () => {
  return (
    <SectionWrapper>
      <div className="grid gap-4 lg:grid-cols-4 mt-4">
        <div className="col-span-2 mb-4 lg:mb-0">
          <div className="text-2xl mb-4">Tech stack</div>
          {techs.map((tech) => (
            <Badge key={tech} className="mt-2 mr-2">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="col-span-2">
          <div className="text-2xl mb-4">Education</div>
          {universities.map((university) => (
            <div key={university.name}>
              <div className="text-lg font-bold">{university.name}</div>
              <div className="flex h-5 items-center space-x-2 text-xs text-muted-foreground mt-1 sm:mt-0">
                {university.degree}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TechAndEducation;
