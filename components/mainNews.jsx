"use client";
import React, { useState, useEffect } from "react";
import { ImNewspaper } from "react-icons/im";
import { CardMainNews } from "./CardMainNews";
import axios from "axios";

function CarousellNews() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const { data } = await axios.get(
          `https://undefinednews.vercel.app/api/v2/news`
        );
        setData(data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(data);

  return (
    <div className="py-10 px-20 text-black">
      <div className="flex gap-2 items-center mb-8 text-black ">
        <p className=" ring-2 p-1.5 rounded-full text-xl ring-black">
          <ImNewspaper />
        </p>
        <h1 className="text-xl font-[poppins] font-medium">Main News </h1>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <CardMainNews
            image={item.image}
            authorName={item.author[0].name}
            authorImage={item.author[0].image}
            date={item.date}
            title={item.title}
            category={item.category}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
}
export default CarousellNews;
