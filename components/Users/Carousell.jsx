"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { BiChevronRight } from "react-icons/bi";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

const Carousel = () => {
  const [datas, setDatas] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://undefinednews.vercel.app/api/v2/news"
        );
        setDatas(data.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 300,
    arrows: false,
  };
  const sliderRef = useRef(null);
  const next = () => sliderRef.current.slickNext();
  return (
    <div className="flex justify-center items-center">
      <div className="  max-w-2xl w-[437px] relative">
        <Slider {...settings} className="" ref={sliderRef}>
          {datas.map((item, index) => (
            <>
              <div
                className="relative  border-2 border-black object-cover "
                key={index}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={235}
                  height={437}
                  className=" h-[235px] w-[437px] object-cover cursor-pointer"
                  onClick={() => router.push(`/${item._id}`)}
                />
              </div>
              <h1 className="text-2xl font-[poppins] font-semibold truncate mt-4 hidden lg:block">
                {item.title}
              </h1>
              <p className="truncate hidden lg:block">
                {item.author[0].desc.slice(0, 50)}
              </p>
            </>
          ))}
        </Slider>
        <button
          onClick={next}
          className="absolute right-5 top-1/2 lg:top-[40%] transform -translate-y-1/2 bg-black text-white px-3 py-3 text-4xl font-bold rounded-full focus:outline-none -mr-8 border-2 border-white"
        >
          <BiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
