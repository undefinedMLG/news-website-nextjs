"use client";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { IoMdClose } from "react-icons/Io";

export default function Trussted() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/641d2136c0e7653a05900a16"
        );
        const data = await response.json();
        setData(data.record);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div className="flex flex-col w-full  ">
      <h1 className="font-[poppins] font-medium text-black mb-6 mt-8 text-2xl">
        Trussted Intuition
      </h1>
      {data.slice(0, 3).map((news, index) => (
        <div className="flex flex-col mb-2 max-w-sm hover:bg-gray-100 px-5 py-2 rounded-sm">
          <Link key={index} href={`/${news.id}`}>
            <div className="flex gap-2 mb-1">
              <div className="rounded-full object-cover h-8 w-8  ">
                <img
                  src={news.imagehuman}
                  alt={news.name}
                  width={40}
                  height={40}
                  className="h-full object-cover rounded-full"
                />
              </div>
              <h1 className="flex gap-2 items-center text-sm  mb-2 font-poppins font-semibold text-dark">
                {news.name}
                <span className="text-sky-500">
                  <BsFillPatchCheckFill />
                </span>
                <span className="capitalize text-gray-500 font-normal">
                  {news.date}
                </span>
              </h1>
            </div>
            <h1 className=" text-black font-semibold font-[poppins] text-base truncate max-w-xs">
              {news.headline}
            </h1>
          </Link>
        </div>
      ))}
      <button
        onClick={openModal}
        className="text-sm text-primary hover:underline font-medium flex justify-start font-[poppins]"
      >
        See the full list
      </button>

      {/* ========= modal ========== */}

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div className="flex justify-between w-full text-black">
          <h1> Trussted Intuition</h1>
          <button className=" text-2xl mb-6 text-red-500" onClick={closeModal}>
            <IoMdClose />
          </button>
        </div>

        <div className="h-96 overflow-y-auto px-6">
          {data.map((news, index) => (
            <div className="relative flex flex-col mb-6 max-w-sm  hover:bg-gray-100">
              <Link key={index} href={`/${news.id}`}>
                <div className="flex gap-2 mb-1">
                  <div className="rounded-full object-cover h-8 w-8  ">
                    <img
                      src={news.imagehuman}
                      alt={news.name}
                      width={40}
                      height={40}
                      className="h-full object-cover rounded-full"
                    />
                  </div>
                  <h1 className="flex gap-2 items-center text-sm  mb-2 uppercase font-[poppins] font-medium text-black">
                    {news.name}
                    <span className="text-sky-500">
                      <BsFillPatchCheckFill />
                    </span>
                    <span className="capitalize text-gray-500 font-normal">
                      {news.date}
                    </span>
                  </h1>
                </div>
                <h1 className=" text-black font-semibold font-[poppins] text-xl truncate max-w-xs">
                  {news.headline}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </ReactModal>
    </div>
  );
}
