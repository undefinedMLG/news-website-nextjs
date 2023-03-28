"use client";
import CardTrending from "@/components/user/CardTrending";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiTrendingUp } from "react-icons/fi";

export default function TrendingTopics() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL);
        setDatas(data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="w-[80%] mx-auto py-24">
      <div className="flex gap-2 items-center">
        <div className="p-2 ring-2 ring-[#070E13] rounded-full">
          <FiTrendingUp />
        </div>
        <h1 className="flex text-[20px]">Trending Topic</h1>
      </div>
      {isLoading && (
        <div className="w-full flex justify-center relative top-12 ">
          <p>Loading...</p>
        </div>
      )}
      {datas && (
        <div className="grid lg:grid-cols-3 w-full md:grid-cols-2 h-72 max-lg:overflow-y-scroll grid-cols-1">
          {datas.slice(0, 6).map((item, index) => {
            return (
              <div key={index}>
                <CardTrending
                  onClick={() => router.push(`/${item._id}`)}
                  index={index + 1}
                  title={item.title}
                  authorName={item.author[0].name}
                  authorImage={item.author[0].image}
                  time={item.time}
                  date={item.date}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
