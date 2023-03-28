"use client";
import React, { useState, useEffect, useRef } from "react";
import { ImNewspaper } from "react-icons/im";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMainNews } from "@/components/Users/CardMainNews";
import { useRouter } from "next/navigation";
import "../../styles/main-news.css";
import { BiChevronRight } from "react-icons/bi";
import "../../styles/main-news.css";
import "../../styles/main-news.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
};

function MainNewsSection() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL);
        setData(data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const sliderRef = useRef(null);
  const next = () => sliderRef.current.slickNext();

  return (
    <div className="py-10 max-w-[80%] mx-auto text-black w-full">
      <div className="flex gap-2 items-center mb-8 text-black ">
        <p className=" ring-2 p-1.5 rounded-full text-xl ring-black">
          <ImNewspaper />
        </p>
        <h1 className="text-xl font-poppins font-medium">Main News </h1>
      </div>
      <div className="w-full">
        {isLoading && (
          <div className="w-full flex justify-center relative top-12 ">
            <p>Loading...</p>
          </div>
        )}
        <div className="relative">
          {data && (
            <Slider className="w-full" {...settings} ref={sliderRef}>
              {data.map((item) => (
                <CardMainNews
                  key={item._id}
                  onClick={() => router.push(`/${item._id}`)}
                  image={item.image}
                  authorName={item.author[0].name}
                  authorImage={item.author[0].image}
                  date={item.date}
                  title={item.title}
                  category={item.category}
                  time={item.time}
                />
              ))}
            </Slider>
          )}
          <button
            onClick={next}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-3 text-4xl font-bold rounded-full focus:outline-none -mr-8 border-2 border-white"
          >
            <BiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
export default MainNewsSection;
