import React from "react";
import Trussted from "./Trusted";
import Follow from "./Follow";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className=" lg:w-full flex lg:justify-end  sticky top-16 ">
        <div className="max-w-sm border-l-2 px-4 border-black   flex flex-col md:flex-row lg:flex-col">
      <Trussted />
      <Follow />
      <div className="grid grid-cols-5 font-medium mt-4 text-gray-400 font-[poppins]">
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
