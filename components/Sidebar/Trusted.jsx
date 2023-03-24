"use client";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Trussted() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/641d2136c0e7653a05900a16"
        );
        const data = await response.json();
        setData(data.record);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  const news = [0];

  const gajelas = news.filter((item) => item % 2 === 0).slice(0, 3);

  return (
    <div className="flex flex-col w-full  ">
      <h1 className="font-[poppins] font-medium text-black mb-6 mt-8 text-2xl">
        Trussted Intuition
      </h1>
      {data.slice(0, 3).map((news, index) => (
        <div className="relative flex flex-col mb-6 max-w-sm  hover:bg-gray-100">
          <Link key={index} href={`/${news.id}`}>
            <div className="flex gap-2 mb-1">
              <div className="rounded-full object-cover h-8 w-8  ">
                <img
                  src={news.imagehuman}
                  alt={news.name}
                  width={40}
                  height={40}
                  className="h-full object-cover rounded-full"
                />
              </div>
              <h1 className="flex gap-2 items-center text-sm  mb-2 uppercase font-[poppins] font-medium text-black">
                {news.name}
                <span className="text-sky-500">
                  <BsFillPatchCheckFill />
                </span>
                <span className="capitalize text-gray-500 font-normal">
                  {news.date}
                </span>
              </h1>
            </div>
            <h1 className=" text-black font-semibold font-[poppins] text-xl truncate max-w-xs">
              {news.headline}
            </h1>
          </Link>
        </div>
      ))}
      <button className="text-sm font-medium flex justify-start font-[poppins]">
        See the full list
      </button>
    </div>
  );
}
