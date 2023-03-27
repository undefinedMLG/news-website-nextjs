"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import CardAll from "./CardAll";

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

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchDatas = async () => {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/?category=${category}`
        );
        setDatas(data);
        setIsLoading(false);
      };
      fetchDatas();
    } catch (error) {
      console.log(error);
    }
  }, [category]);

  const handleClick = (event) => {
    setCategory(event);
  };

  return (
    <div className="w-full lg:w-3/5">
      <Slider {...settings} className="">
        {categoryOptions.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(item.category)}
              className="w-fit cursor-pointer font-poppins"
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
      <div>
        {isLoading && (
          <div className="w-full flex justify-center mt-4">
            <p className="font-semibold">Loading...</p>
          </div>
        )}
        {datas && (
          <div className="max-w-[90%] mx-auto">
            {datas.map((item) => {
              return (
                <CardAll
                  authorImage={item.author[0].image}
                  authorName={item.author[0].name}
                  date={item.date}
                  title={item.title}
                  image={item.image}
                  category={item.category}
                  time={item.time}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
