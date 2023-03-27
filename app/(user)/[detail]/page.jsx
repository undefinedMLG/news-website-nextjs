"use client";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { GoKebabHorizontal } from "react-icons/go";
import { PropagateLoader } from "react-spinners";
import Link from "next/link";
import Card from "@/components/Card";
import axios from "axios";
import Image from "next/image";
import SideBar from "@/components/user/Sidebar/SideBar";

export default function Page({ params }) {
  const [datas, setDatas] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [tags, setTags] = useState();
  const ID = params.detail;
  const [isLoading, setIsLoading] = useState(true);
  console.log(ID);
  const getData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://undefinednews.vercel.app/api/v2/news/${ID}`
      );
      setDatas(data);
      setTags(data.tags.split(" "));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const filterData = async () => {
    try {
      const filter = await axios.get(
        `https://undefinednews.vercel.app/api/v2/news/?category=${datas.category}`
      );
      setFilteredData(filter.data.filter((e) => e._id != datas._id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [ID]);

  useEffect(() => {
    filterData();
  }, [datas]);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col gap-8 justify-center items-center h-screen">
          <div>
            <PropagateLoader color="black" size={15} />
          </div>
        </div>
      ) : (
        <div className=" mt-12 ml-3 lg:ml-24 md:mt-0 md:ml-3 flex flex-col md:flex-row">
          <div className="mt-24">
            <div className="flex flex-col md:mr-3 lg:mr-20 lg:w-9/12 md:flex-row md:justify-between">
              <div className="flex">
                {datas.author && datas.author.length > 0 && (
                  <>
                    <div>
                      <Image
                        src={datas.author[0].image}
                        width={50}
                        height={50}
                        alt="user"
                        className="rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <h1 className="font-semibold mb-1">
                        {datas.author[0].name}
                      </h1>
                      <div className="flex gap-2 text-xs text-gray-500 ">
                        <p>{datas.date}</p>
                        <p className="font-bold">·</p>
                        <p>{datas.time} min read</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="flex lg:justify-between gap-9 mt-3">
                <div className="flex gap-5 text-gray-500 mt-0.5">
                  <Link href="https://www.instagram.com/reyhanmd._">
                    <FaFacebook />
                  </Link>
                  <Link href="https://www.instagram.com/reyhanmd._">
                    <FaLinkedin />
                  </Link>
                  <Link href="https://www.instagram.com/reyhanmd._">
                    <FaTwitter />
                  </Link>
                  <Link href="https://www.instagram.com/reyhanmd._">
                    <BsShareFill />
                  </Link>
                </div>
                <div className="flex gap-3 text-xl">
                  <Link href="https://www.instagram.com/reyhanmd._">
                    <MdOutlineBookmarkAdd />
                  </Link>
                  <Link href="https://www.instagram.com/reyhanmd._">
                    <GoKebabHorizontal />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 mr-3 lg:w-9/12">
              <div dangerouslySetInnerHTML={{ __html: datas.content }}></div>
              <div className="mt-8">
                <h2 className="font-bold text-xl">Thank You!</h2>
              </div>
              <div className="mt-10 flex gap-5">
                {datas.author &&
                  datas.author.length > 0 &&
                  tags.map((word, index) => (
                    <div
                      className="bg-gray-200 pl-3 pr-3 pt-2 pb-2 rounded-full"
                      key={index}
                    >
                      <p>{word}</p>
                    </div>
                  ))}
              </div>
              <div className="mt-12 mb-5">
                <hr className="border-t border-black" />
              </div>
            </div>

            {/* rekomen news */}
            <div className=" mt-16">
              {filteredData &&
                filteredData.map((item) => {
                  return <Card {...item} key={item._id} />;
                })}
            </div>

            <div className="text-center lg:w-9/12 mt-5 mb-8">
              <Link
                className="bg-[#F24F09] pl-5 pr-5 pt-2 pb-2 rounded-full text-white font-semibold"
                href="/explore"
              >
                Read more in explore
              </Link>
            </div>
          </div>

          {/* sidebar */}
          <div>
            <SideBar />
          </div>
        </div>
      )}
    </>
  );
}
