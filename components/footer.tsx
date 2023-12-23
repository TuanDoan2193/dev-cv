import React from "react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="w-full h-8 flex items-center justify-center space-x-2  py-1 mt-6 border-t border-black-400 text-sm bg-background/10 backdrop-blur">
      <div>Copyright © 2024</div>
      <Separator orientation="vertical" />
      <div>All right reserved</div>
    </footer>
  );
};

export default Footer;
