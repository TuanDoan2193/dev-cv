import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { Github } from "lucide-react";
import React, { useRef } from "react";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
} from "../page-header";
import TextBackground from "../text-background";
import { Button } from "../ui/button";
import animationData from "@/lottie/hero-animation.json";

const Hero = () => {
  const phoneRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className="grid gap-4 md:grid-cols-8 md:pb-16 md:pt:4 overflow-hidden">
      <PageHeader className="pt-16 md:col-span-5">
        <TextBackground>👋🏻 Hello</TextBackground>

        <TextBackground>Welcome to my portfolio</TextBackground>
        <PageHeaderHeading className="text-gradient_orange pt-2">
          I&apos;m Tuan, a proactive SWE.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I like to craft digital experiences and transform ideas into scalable
          and maintainable softwares that help to improve daily life.
        </PageHeaderDescription>
        <div className="flex items-center w-full space-x-4 pt-4 md:pb-10">
          <Button variant="outline" className="backdrop-blur">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </PageHeader>
      <div className="relative flex justify-center md:col-span-3">
        <Lottie
          onComplete={() => {
            phoneRef.current?.setDirection(-1);
            phoneRef.current?.play();
          }}
          lottieRef={phoneRef}
          animationData={animationData}
        />
      </div>
    </div>
  );
};

export default Hero;
