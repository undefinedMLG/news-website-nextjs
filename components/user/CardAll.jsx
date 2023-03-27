import React from "react";
import Category from "./Category";
import {
  MdOutlineBookmarkAdd,
  MdOutlineDoNotDisturbOn,
  MdOutlineMoreHoriz,
} from "react-icons/md";

export default function CardAll(props) {
  return (
    <>
      <div className="border-b border-grey-line py-6">
        <div className="flex gap-x-2 items-center">
          <img
            src={props.authorImage}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex gap-x-2 font-poppins">
            <h5 className="font-semibold text-dark">{props.authorName}</h5>
            <p className="font-medium">·</p>
            <h6 className="font-normal text-base text-grey-text">
              {props.date}
            </h6>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="w-3/5">
            <div>
              <div className="mt-4 min-h-[7rem]">
                <h3 className="font-bold text-lg">{props.title}</h3>
                <p className="text-base font-ssp">{props.desc}</p>
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <img src={props.image} alt="" />
          </div>
        </div>
        <div className="mt-4 w-full flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <Category category={props.category} />
            <div className="flex gap-x-2">
              <h6 className="text-sm text-grey-text">{props.time} min read</h6>
              <p className="font-medium hidden">·</p>
              <p className="font-gts font-light text-sm text-grey-text hidden">
                Selected for you
              </p>
            </div>
          </div>
          <div className="flex text-xl font-normal gap-x-3 text-grey-text">
            <MdOutlineBookmarkAdd />
            <MdOutlineDoNotDisturbOn />
            <MdOutlineMoreHoriz />
          </div>
        </div>
      </div>
    </>
  );
}
