import React from "react";

export default function TrBody(props) {
  return (
    <tr className="text-base font-medium text-left">
      <td className="px-4 py-2 w-[5%]">
        <span className="text-dark">{props.index}</span>
      </td>
      <td className="px-4 py-2 w-[30%]">
        <span className="text-dark">{props.title}</span>
      </td>
      <td className="px-4 py-2 w-[10%]">
        <span className="text-dark">{props.author}</span>
      </td>
      <td className="px-4 py-2 w-[10%]">
        <span className="text-dark">{props.category}</span>
      </td>
      <td className="px-4 py-2 w-[10%]">
        <span className="text-dark">{props.date}</span>
      </td>
      <td className="px-4 py-2 w-[10%]">
        <span className="text-dark">{props.time} Min</span>
      </td>
      <td className="px-4 py-2 space-x-4 w-[15%]">
        <button onClick={props.edit}>Edit</button>
        <button onClick={props.delete} className="text-red-600">
          Delete
        </button>
      </td>
    </tr>
  );
}
