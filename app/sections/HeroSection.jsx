"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Carousel from "@/components/user/Carousell";

export default function HeroSection() {
  const router = useRouter();
  return (
    <div className="h-[80vh] border-b-2 border-black bg-amber-400 items-center justify-between text-black flex px-32">
      <div className="flex w-[90%] mx-auto">
        <div className="w-1/2">
          <h1 className="text-6xl font-[ssp] font-bold">Keep Reading</h1>
          <p className="text-lg font-[poppins] mt-5 mb-10 w-10/12">
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

        <div className="w-1/2 flex justify-end">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
