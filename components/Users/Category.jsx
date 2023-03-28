import React from "react";

export default function Category(props) {
  return (
    <div className="bg-[#F2F2F2] w-fit px-3 py-1 rounded-full text-sm text-[#404040] font-normal">
      {props.category}
    </div>
  );
}
