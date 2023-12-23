import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

type Description = {
  title: string;
  content: string[];
};

export type ExperienceType = {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  descriptions: Description[];
  companySite: string;
};

interface ExperienceProps {
  experience: ExperienceType;
}

const Experience = (props: ExperienceProps) => {
  const {
    companyName,
    jobTitle,
    startDate,
    endDate,
    descriptions,
    companySite,
  } = props.experience;

  return (
    <Card className="relative pb-14">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {startDate} - {endDate}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xl font-bold">{companyName}</div>
        <p className="text-xs text-muted-foreground">as a {jobTitle}</p>
        {descriptions.map((description) => (
          <div key={description.title}>
            <div className="text-sm font-bold pt-2 underline underline-offset-2">
              {description.title}:
            </div>
            <ul className="text-sm pt-1 flex flex-col gap-2">
              {description.content.map((part) => (
                <li key={part}>{part}</li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
      <CardFooter className="absolute bottom-0 w-full">
        <Link
          href={companySite}
          target="_blank"
          className="mt-4 w-full md:w-fit lg:w-full"
        >
          <Button variant="default" className="w-full">
            Company site
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Experience;
