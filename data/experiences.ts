import { ExperienceType } from "@/components/experience";

export const experiences: ExperienceType[] = [
  {
    companyName: "Alma Media",
    jobTitle: "Software Engineer",
    startDate: "8/2023",
    endDate: "present",
    descriptions: [
      {
        title: "Responsibilities",
        content: [
          "Work on a dealer management system that is currently has a biggest market share in Finland.",
          "Build and maintain an internal UI library that will be reused across mobility products.",
          "Write clean, high quality utility code that can be reused across the multiple projects.",
        ],
      },
    ],
    companySite: "https://www.almamedia.fi/en/",
  },
  {
    companyName: "Supermetrics",
    jobTitle: "Software Engineer",
    startDate: "9/2021",
    endDate: "8/2023",
    descriptions: [
      {
        title: "Responsibilities",
        content: [
          "Develop an add-ons application on top of Google Sheets, one of the biggest destination for marketing data in the world.",
          "Help to fuel insights for 200K+ companies in 120 countries.",
          "Work hand in hand with other teams to design a better flow/experience for 150K+ users of the platform.",
        ],
      },
    ],
    companySite: "https://supermetrics.com/",
  },
  {
    companyName: "Hyperin",
    jobTitle: "Web Developer",
    startDate: "9/2019",
    endDate: "9/2021",
    descriptions: [
      {
        title: "Responsibilities",
        content: [
          "Enhance experience of shoping centers' visitors by building a web application that cover wayfinding, parking, and browsing other services.",
          "Help to target the right consumer traffic with the right type of message by building modern, fast and informative websites.",
        ],
      },
    ],
    companySite: "https://hyperin.com/",
  },
];
