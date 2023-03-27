"use client";
import InputForm from "@/components/admin/InputForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "../fragments/Content";

export default function page({ params }) {
  const [author, setAuthor] = useState([
    { name: "", desc: "", image: "", verified: false },
  ]);
  const [data, setData] = useState({
    title: "",
    author: author,
    category: "",
    image: "",
    content: "",
    time: "",
    tags: "",
    date: "",
  });
  const ID = params.news;
  const router = useRouter();

  useEffect(() => {
    try {
      if (ID === "new") return false;
      const fetchDatas = async () => {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/${ID}`
        );
        setData(data);
        setAuthor(data.author);
      };
      fetchDatas();
    } catch (error) {
      console.log(error);
    }
  }, [ID]);

  const formattedDate = (value) => {
    const tanggal = value;
    const date = new Date(tanggal);
    const formatted = `${date.getFullYear()}-${(
      "0" +
      (date.getMonth() + 1)
    ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;

    return formatted;
  };

  const handleContent = (content, delta, source, editor) => {
    setData({ ...data, content: content });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleAuthor = (event) => {
    const { name, value } = event.target;
    const list = [...author];
    list[0][name] = value;
    setAuthor(list);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (ID === "new") {
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, data);
        toast.success("Success add news");
      } catch (error) {
        toast.error("Failed add news");
        console.log(error);
      }
    } else {
      try {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/${ID}`, data);
        toast.success("Success updating news");
      } catch (error) {
        toast.error("Failed updating news");
        console.log(error);
      }
    }
  };

  console.log(data);

  return (
    <section className="p-6 bg-white rounded-md dark:bg-gray-800 h-fit pb-28">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        {data ? "Edit News" : "Add News"}
      </h2>
      <div className="mt-6">
        <button
          onClick={() => router.push("/admin")}
          className="px-6 py-2 bg-dark text-base text-zinc-200 font-semibold rounded-sm"
        >
          Back
        </button>
      </div>
      <ToastContainer position="top-center" autoClose={1000} />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
          <InputForm
            for={"title"}
            label={"Title"}
            type={"text"}
            value={data.title}
            onChange={handleChange}
          />
          <InputForm
            for={"name"}
            label={"Author Name"}
            type={"text"}
            value={data.author[0].name}
            onChange={handleAuthor}
          />
          <InputForm
            for={"desc"}
            label={"Author Description"}
            type={"text"}
            value={data.author[0].desc}
            onChange={handleAuthor}
          />
          <InputForm
            for={"verified"}
            label={"Author Verified"}
            type={"text"}
            value={data.author[0].verified}
            onChange={handleAuthor}
          />
          <InputForm
            for={"image"}
            label={"Author Image"}
            type={"text"}
            value={data.author[0].image}
            onChange={handleAuthor}
          />
          <InputForm
            for={"category"}
            label={"Category"}
            type={"text"}
            value={data.category}
            onChange={handleChange}
          />
          <InputForm
            for={"image"}
            label={"Banner Image"}
            type={"text"}
            value={data.image}
            onChange={handleChange}
          />
          <InputForm
            for={"time"}
            label={"Time"}
            type={"text"}
            value={data.time}
            onChange={handleChange}
          />
          <InputForm
            for={"date"}
            label={"Date"}
            type={"date"}
            value={formattedDate(data.date)}
            onChange={handleChange}
          />
          <InputForm
            for={"tags"}
            label={"Tags"}
            type={"text"}
            value={data.tags}
            onChange={handleChange}
          />
          <Content
            theme={"snow"}
            value={data.content}
            onChange={handleContent}
            className={"col-span-2"}
          />
          <div className="flex justify-end mt-8 col-span-2">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-dark rounded-sm hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
