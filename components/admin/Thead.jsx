import React from "react";

export default function Thead({ children }) {
  return (
    <table className="min-w-full table-auto font-poppins rounded-sm">
      <thead>
        <tr className="bg-dark text-left">
          <th className="px-4 py-2 w-[5%]">
            <span className="text-zinc-200 text-base font-normal">No.</span>
          </th>
          <th className="px-4 py-2 w-[30%]">
            <span className="text-zinc-200 text-base font-normal">Title</span>
          </th>
          <th className="px-4 py-2 w-[10%]">
            <span className="text-zinc-200 text-base font-normal">Author</span>
          </th>
          <th className="px-4 py-2 w-[10%]">
            <span className="text-zinc-200 text-base font-normal">
              Category
            </span>
          </th>
          <th className="px-4 py-2 w-[10%]">
            <span className="text-zinc-200 text-base font-normal">Date</span>
          </th>
          <th className="px-4 py-2 w-[10%]">
            <span className="text-zinc-200 text-base font-normal">
              Read Time
            </span>
          </th>
          <th className="px-4 py-2 w-[15%]">
            <span className="text-zinc-200 text-base font-normal">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
