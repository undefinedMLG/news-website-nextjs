import React from "react";
import Category from "./Category";
import Image from "next/image";

export const CardMainNews = (props) => {
  return (
    <div
      key={props.key}
      onClick={props.onClick}
      className="min-h-[20rem] bg-[#F8F8F8] w-full cursor-pointer hover:bg-stone-100 duration-200"
    >
      <Image
        width={100}
        height={100}
        src={props.image}
        alt=""
        className="h-[154px] w-full object-cover"
      />

      <div className="author flex gap-2 items-center mt-5 px-3 ">
        <Image
          src={props.authorImage}
          alt=""
          width={200}
          height={200}
          className="h-10 w-10 object-cover rounded-full"
        />
        <div>
          <h1 className="font-medium font-[poppins] ">{props.authorName}</h1>
          <p className="text-xs  text-gray-500">{props.date}</p>
        </div>
      </div>
      <h1 className="mt-5 h-12 overflow-clip font-[poppins] font-semibold px-3">
        {props.title}
      </h1>
      <div className="flex gap-4  text-sm mt-7 px-3">
        <Category category={props.category} />
        <p className="text-gray-500 ">{props.time} min read</p>
      </div>
    </div>
  );
};
