"use client";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Follow() {
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
    <div className="flex flex-col w-full">
      <h1 className="font-[poppins] font-medium text-black mb-6 mt-8 capitalize text-2xl">
        Who to follow
      </h1>
      {data.slice(0, 3).map((Follow, index) => (
        <div className="flex w-full justify-between mb-6 items-end" key={index}>
          <div className="flex  gap-3">
            <img
              src={Follow.imagehuman}
              alt=""
              className="h-8 w-8 rounded-full"
            />
            <div className=" max-w-[160px]   ">
              <h1 className="text-md font-medium font-[poppins] text-black">
                {Follow.name}
              </h1>
              <p className="text-black truncate  text-sm font-[poppins] ">
                {Follow.tittle}
              </p>
            </div>
          </div>

          <button className="border-2 border-black px-4 pb-1 rounded-full  text-black hover:bg-black hover:text-white hover:text:medium">
            Follow{" "}
          </button>
        </div>
      ))}

      <button className="text-sm font-medium mt-2 flex justify-start font-[poppins]">
        See More Suggestion
      </button>
    </div>
  );
}
