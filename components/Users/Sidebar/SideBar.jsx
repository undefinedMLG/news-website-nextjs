"use client";
import React, { useEffect, useState } from "react";
import Trussted from "./Trusted";
import Follow from "./Follow";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const [position, setScrollPosition] = useState(0);
  const path = usePathname();

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(position);
  return (
    <div
      className={`w-full left-[61vw] top-16 overflow-hidden hidden md:block ${
        position < 1540 && path === "/" ? "sticky" : "fixed"
      }`}
    >
      <div className="max-w-sm border-l-2 px-4 border-dark flex flex-col overflow-y-auto">
        <Trussted />
        <Follow />
        <div className="grid grid-cols-5 font-normal gap-y-2 mt-4 text-xs text-gray-400 font-poppins">
          <Link href={"/"}>Terms</Link>
          <Link href={"/"}>Privacy</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Help</Link>
          <Link href={"/"}>Writes</Link>
          <Link href={"/"}>Carrers</Link>
          <Link href={"/"}>Payment</Link>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
