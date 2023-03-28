"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [position, setScrollPosition] = useState(false);
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
      className={`fixed w-full flex justify-between items-center z-50 px-32 border-b-2 text-black border-b-black h-16 max-md:flex-col max-md:px-4 duration-300
        ${position < 490 && path === "/" ? "bg-secondary" : "bg-white"} ${
        path === "/admin" || "/admin/new" ? "hidden" : "block"
      }
      
      `}
    >
      <div className="h-8 w-auto flex items-center">
        <h1 className="font-ssp text-3xl font-bold hidden md:block">
          Undefined
        </h1>
      </div>

      <div className=" flex gap-8 font-medium items-center max-md:mb-3 justify-end max-md:justify-between w-full  ">
        <div className="flex gap-8 text-sm font-medium font-poppins max-md:-mt-10 ">
          <Link href={"/"}>Home</Link>
          <Link href={"/explore"}>Explore</Link>
          <Link href={"/admin"}>Write</Link>
        </div>
        <div className=" max-md:-mt-10">
          <Link
            href={"/admin"}
            className={`py-2 px-6 rounded-full text-white duration-300 ${
              position < 490 && path === "/" ? "bg-dark" : "bg-primary"
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
