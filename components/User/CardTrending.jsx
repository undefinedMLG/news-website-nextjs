import React from "react";

export default function CardTrending(props) {
  return (
    <div
      onClick={props.onClick}
      className="gap-5 w-full flex gap-x-4 font-poppins cursor-pointer"
    >
      <div className="w-fit text-4xl text-[#DFDFDF] flex items-center ">
        0{props.index}
      </div>
      <div className="px-4">
        <div className="pt-9 flex w-full">
          <img
            src={props.authorImage}
            alt=""
            className="text-[32px] flex rounded-full w-8 h-8 object-cover"
          />
          <div className="pl-3 flex text-sm font-medium items-center">
            {props.authorName}
          </div>
        </div>
        <div className="pt-2 text-base font-semibold">{props.title}</div>
        <div className="pt-6 text-sm text-grey-text">
          {props.date} • {props.time} min read
        </div>
      </div>
    </div>
  );
}
