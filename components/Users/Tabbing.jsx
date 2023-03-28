"use client";
import React, { useEffect, useState,useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import CardAll from "./CardAll";
import { usePathname, useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
const settings = {
  dots: false,
  slidesToShow: 6,
  infinite: false,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
  ],
};

const categoryOptions = [
  { category: "For You" },
  { category: "Design" },
  { category: "Programming" },
  { category: "War" },
  { category: "Freelancing" },
  { category: "Self" },
  { category: "Food" },
  { category: "Nature" },
  { category: "Social" },
];

export default function Tabbing() {
  const [category, setCategory] = useState("For You");
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [search, setSearch] = useState("");
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchDatas = async () => {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/?category=${category}&search=${search}`
        );
        setDatas(data);
        setIsLoading(false);
      };
      fetchDatas();
    } catch (error) {
      console.log(error);
    }
  }, [category, search]);

  const handleClick = (event) => {
    setCategory(event);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const sliderRef = useRef(null);
  const next = () => sliderRef.current.slickNext();
  const previous = () => sliderRef.current.slickPrev();
  return (
    <div className="w-full lg:w-3/5 pt-6">
      <div
        className={`bg-[#F8F8F8] flex items-center h-12 px-4 rounded-full mb-2 w-fit ${
          path !== "/" ? "block" : "hidden"
        }`}
      >
        <IoSearch className="text-3xl text-grey-text" />
        <input
          type="text"
          className="bg-[#F8F8F8] focus:outline-none px-4"
          onChange={(event) => handleSearch(event)}
        />
      </div>
      <div className="relative">
        <Slider {...settings} className="" ref={sliderRef}>
          {categoryOptions.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleClick(item.category)}
                className="w-fit cursor-pointer font-poppins pl-3"
              >
                <p
                  className={
                    category === item.category
                      ? "font-normal min-w-full text-dark text-base text-center border-b-2 border-dark py-2"
                      : "font-normal min-w-full text-grey-text text-base text-center border-b py-2 border-grey-line"
                  }
                >
                  {item.category}
                </p>
              </div>
            );
          })}
        </Slider>
        <button
          onClick={previous}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-1 py-1 text-xl font-bold rounded-full focus:outline-none -mr-8 border-2 border-white"
        >
          <BiChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black text-white px-1 py-1 text-xl font-bold rounded-full focus:outline-none -mr-8 border-2 border-white"
        >
          <BiChevronRight />
        </button>
      </div>
      <div>
        {isLoading && (
          <div className="w-full flex justify-center mt-4">
            <p className="font-semibold">Loading...</p>
          </div>
        )}
        {datas && (
          <div className="card-wrapper">
            {datas.map((item) => {
              return (
                <div key={item._id}>
                  <CardAll
                    onClick={() => router.push(item._id)}
                    authorImage={item.author[0].image}
                    authorName={item.author[0].name}
                    date={item.date}
                    title={item.title}
                    image={item.image}
                    category={item.category}
                    time={item.time}
                    desc={item.author[0].desc}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
