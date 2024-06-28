import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="container mx-auto flex flex-wrap gap-3 items-center">
        <h1 className="text-white text-[25px]  font-semibold">
          Yasin{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Ahmed
          </span>
        </h1>
      </div>
      <div className="flex flex-row gap-5 mb-2">
        <Link href="https://x.com/yaasiin__ahmed">
          <FaXTwitter className="text-white text-lg" />
        </Link>
        <Link href="https://github.com/yaasiinaxmed">
          <FaGithub  className="text-white text-lg" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
