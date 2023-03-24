import React from "react";
import { ImNewspaper } from "react-icons/im";

function CarousellNews() {
  return (
    <div className="py-10 px-20 text-black">
      <div className="flex gap-2 items-center mb-8 text-black ">
        <p className=" ring-2 p-1.5 rounded-full text-xl ring-black">
          <ImNewspaper />
        </p>
        <h1 className="text-xl font-[poppins] font-medium">Main News </h1>
      </div>

      <div className=" grid grid-cols-4 gap-4">
        <div className="CrdNws bg-gray-100 h-[342px] w-[254px] ">
          <img
            src="/image/coba.jpg"
            alt=""
            className="h-[154px] w-full object-cover"
          />

          <div className="author flex gap-2 items-center mt-5 px-3 ">
            <img
              src="/image/coba.jpg"
              alt=""
              className="h-10 w-10 object-cover rounded-full"
            />
            <div>
              <h1 className="font-medium font-[poppins] ">Nama kamu</h1>
              <p className="text-xs  text-gray-500">
                Feb 22, <span>2022</span>
              </p>
            </div>
          </div>
          <h1 className="mt-5 px-3">Lorem ipsum dolor sit amet consectetur.</h1>
          <div className="flex justify-evenly text-sm mt-7 px-3">
            <h1 className="category bg-gray-200 px-2 pb-1 rounded-full">
              progamming
            </h1>
            <p className="text-gray-500 ">28 min read</p>
          </div>
        </div>
        <div className="CrdNws bg-gray-100 h-[342px] w-full"></div>
        <div className="CrdNws bg-gray-100 h-[342px] w-full"></div>
        <div className="CrdNws bg-gray-100 h-[342px] w-full"></div>
      </div>
    </div>
  );
}
export default CarousellNews;
