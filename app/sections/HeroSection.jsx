"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Carousel from "@/components/Users/Carousell";

export default function HeroSection() {
  const router = useRouter();
  return (
    <div className="h-[80vh] border-b-2 border-black bg-amber-400 items-center justify-between text-black flex lg:px-32 ">
      <div className="flex flex-col-reverse mt-20 lg:w-[90%] mx-auto lg:flex-row ">
        <div className="text-center md:w-full lg:text-left lg:ml-0 lg:w-1/2">
          <h1 className=" ml-8 lg:ml-0 mt-3 lg:mt-0 text-4xl lg:text-6xl font-[ssp] font-bold">
            Keep Reading
          </h1>
          <p className="ml-8 lg:ml-0 text-lg font-[poppins] mt-5 mb-4 lg:mb-10 w-10/12">
            Baca berita sesuai dengan topik yang anda inginkan dan cari tahu
            berita terkini
          </p>
          <button
            onClick={() => router.push("/explore")}
            className=" font-[poppins]  bg-black text-white py-3 px-5 rounded-full"
          >
            Start reading
          </button>
        </div>

        <div className="hidden md:w-full md:flex md:justify-center w-1/2 lg:justify-end">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
