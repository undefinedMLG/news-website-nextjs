import React from "react";

export const CardMainNews = (props) => {
  return (
    <div>


      <div >
        <div className="CrdNws bg-gray-100 h-[350px] w-full ">
          <img
            src={props.image}
            alt=""
        
            className="h-[154px] w-full object-cover"
          />

          <div className="author flex gap-2 items-center mt-5 px-3 ">
            <img
              src={props.authorImage}
              alt=""
              className="h-10 w-10 object-cover rounded-full"
            />
            <div>
              <h1 className="font-medium font-[poppins] ">{props.authorName}</h1>
              <p className="text-xs  text-gray-500">
              {props.date}
              </p>
            </div>
          </div>
          <h1 className="mt-5 h-12 overflow-clip font-[poppins] font-semibold px-3">
           {props.title}
          </h1>
          <div className="flex gap-4  text-sm mt-7 px-3">
            <h1 className="category bg-gray-200 px-2 pb-1 rounded-full">
              {props.category}
            </h1>
            <p className="text-gray-500 ">{props.time} min read</p>
          </div>
        </div>
      </div>
    </div>
  );
};
