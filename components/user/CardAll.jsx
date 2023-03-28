import React from "react";
import Category from "./Category";
import {
  MdOutlineBookmarkAdd,
  MdOutlineDoNotDisturbOn,
  MdOutlineMoreHoriz,
} from "react-icons/md";

export default function CardAll(props) {
  return (
    <div
      key={props.key}
      onClick={props.onClick}
      className="border-b w-full border-grey-line py-8 cursor-pointer hover:bg-zinc-100"
    >
      <div className="flex gap-x-2 items-center">
        <img
          src={props.authorImage}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex gap-x-2 font-poppins">
          <h5 className="font-semibold text-sm text-dark">
            {props.authorName}
          </h5>
          <p className="font-medium">·</p>
          <h6 className="font-normal text-base text-grey-text">{props.date}</h6>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="w-3/5">
          <div>
            <div className="mt-4 min-h-[7rem]">
              <h3 className="font-bold text-lg">{props.title}</h3>
              <p className="text-base font-ssp mt-2">
                {props.desc.slice(0, 92) + "..."}
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex justify-end">
          <img src={props.image} alt="" className="w-40 h-auto object-cover" />
        </div>
      </div>
      <div className="mt-4 w-full flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <Category category={props.category} />
          <div className="flex gap-x-2 items-center">
            <h6 className="text-sm font-normal text-grey-text h-6 align-middle">
              {props.time} min read
            </h6>
            <p className="font-normal hidden h-6 align-middle md:block">·</p>
            <h6 className="text-sm font-medium text-grey-text h-6 align-middle">
              Selected for you
            </h6>
          </div>
        </div>
        <div className="flex text-xl font-normal gap-x-3 text-grey-text">
          <MdOutlineBookmarkAdd />
          <MdOutlineDoNotDisturbOn />
          <MdOutlineMoreHoriz />
        </div>
      </div>
    </div>
  );
}
