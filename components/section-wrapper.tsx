import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface SectionWrapperProps {
  children: React.ReactNode;
  title?: string;
}
const SectionWrapper = (props: SectionWrapperProps) => {
  const { title, children } = props;

  return (
    <section className="px-4 pb-10">
      <Card className="bg-background/10 backdrop-blur card-border-left">
        {title && (
          <CardHeader>
            <CardTitle className="w-fit text-3xl md:pl-4 font-normal">
              {title}
            </CardTitle>
          </CardHeader>
        )}
        <CardContent className="px-6 md:px-10 pb-10">{children}</CardContent>
      </Card>
    </section>
  );
};

export default SectionWrapper;
