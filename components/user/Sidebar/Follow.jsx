"use client";
import { IoMdClose } from "react-icons/Io";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Image from "next/image";

export default function Follow() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
    <div className="flex flex-col w-full">
      <h1 className="font-[poppins] font-medium text-black mb-6 mt-8 capitalize text-2xl">
        Who to follow
      </h1>
      {data.slice(0, 3).map((Follow, index) => (
        <div key={index} className="">
          <div className="hover:bg-gray-100 p-2 flex w-full justify-between mb- items-center">
            <div className="flex  gap-3">
              <Image
                src={Follow.imagehuman}
                alt=""
                width={40}
                height={40}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className=" max-w-[160px]   ">
                <h1 className="text-sm font-semibold mb-1.5 font-poppins text-black">
                  {Follow.name}
                </h1>
                <p className="text-dark h-10 overflow-clip text-sm font-poppins ">
                  {Follow.tittle}
                </p>
              </div>
            </div>

            <button
              href
              className="ring-1 ring-black px-4 pb-1 rounded-full  text-black hover:bg-black hover:text-white hover:text:medium"
            >
              Follow{" "}
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={openModal}
        className="text-sm text-primary hover:underline font-medium mt-2 flex justify-start font-[poppins]"
      >
        See More Suggestion
      </button>

      {/* ========Modal+============== */}

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
          <h1>Who to follow</h1>
          <button className=" text-2xl mb-6 text-red-500" onClick={closeModal}>
            <IoMdClose />
          </button>
        </div>

        <div className="h-96 overflow-y-auto px-6">
          {data.map((Follow, index) => (
            <div
              key={index}
              className="flex w-full justify-between mb-6 hover:bg-gray items-end  "
            >
              <div className="flex  gap-3">
                <Image
                  src={Follow.imagehuman}
                  alt=""
                  width={40}
                  height={40}
                  className="h-8 w-8 rounded-full"
                />
                <div className=" max-w-[160px]   ">
                  <h1 className="text-md font-medium font-[poppins] text-black">
                    {Follow.name}
                  </h1>
                  <p className="text-black h-10 overflow-clip  text-sm font-[poppins] ">
                    {Follow.tittle}
                  </p>
                </div>
              </div>

              <button className="border-2 border-black px-4 pb-1 rounded-full  text-black hover:bg-black hover:text-white hover:text:medium">
                Follow{" "}
              </button>
            </div>
          ))}
        </div>
      </ReactModal>
    </div>
  );
}
