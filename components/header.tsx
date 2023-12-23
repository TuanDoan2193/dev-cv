import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Code2 } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="h-full flex-center">
          <Code2 />
          <span className="body-text !font-normal ml-2">tuan-doan</span>
        </Link>

        <ul className="flex-center gap-x-3 md:gap-x-10">
          <li className="body-text !font-normal">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
