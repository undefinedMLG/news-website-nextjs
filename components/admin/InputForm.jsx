import React from "react";

export default function InputForm(props) {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={props.for}>
        {props.label}
      </label>
      <input
        id={props.for}
        type={props.type}
        defaultValue={props.value}
        onChange={props.onChange}
        name={props.for}
        className="block w-full rounded-sm px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40"
      />
    </div>
  );
}
