import React from "react";
import { Card } from "../ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <Card className="bg-background/10 backdrop-blur w-fit m-auto mb-10 hover:scale-110 transition ease-in-out duration-500">
      <div className="flex justify-center items-center gap-10 py-2 px-6">
        <a href="mailto:tuan.doan2193@gmail.com">
          <Mail width={30} height={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/tuan-doan-161673105/"
          target="_blank"
        >
          <Linkedin width={30} height={30} />
        </a>
        <a href="https://github.com/TuanDoan2193" target="_blank">
          <Github width={30} height={30} />
        </a>
      </div>
    </Card>
  );
};

export default Contact;
