"use client";
import { useEffect, useState,useRef } from "react";
import { BiChevronRight } from "react-icons/bi";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const images = [
//   {
//     id: 1,
//     url: "https://picsum.photos/600/400?random=1",
//     title: "100 mobil Gratis",
//     description:
//       "halo inii adalahfoto dengan gambar random yang di ambill dari sumber terpercayadsgasjahshajhdhasdljadldajldbjsbcjbchjsabsbd",
//   },
//   {
//     id: 2,
//     url: "/image/coba.jpg",
//     title: "Cahaya Lampu philip 100watt",
//     description:
//       "halo inii adalahfoto dengan gambar random yang di ambill dari sumber terpercayadsgasjahshajhdhasdljadldajldbjsbcjbchjsabsbd",
//   },
//   {
//     id: 3,
//     url: "https://picsum.photos/600/400?random=3",
//     title: "Bulan puasa jadi progammer",
//     description:
//       "halo inii adalahfoto dengan gambar random yang di ambill dari sumber terpercayadsgasjahshajhdhasdljadldajldbjsbcjbchjsabsbd",
//   },
// ];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [datas, setDatas] = useState([]);

  const nextImage = () => {
    setCurrentIndex(currentIndex === datas.length - 1 ? 0 : currentIndex + 1);
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  const sliderRef = useRef(null);
  const next = () => sliderRef.current.slickNext();
  return (
    <div className="flex justify-center items-center">
      <div className=" max-w-2xl w-[437px] relative">
        <Slider {...settings} className="" ref={sliderRef}>
          {datas.map((item, index) => (
            <>
              <div
                className="relative  border-2 border-black object-cover "
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className=" h-[235px] w-[437px] object-cover"
                />
              </div>
              <h1 className="text-2xl font-[poppins] font-semibold truncate mt-4">
                {item.title}
              </h1>
              <p className="truncate">{item.author[0].desc.slice(0, 50)}</p>
            </>
          ))}
        </Slider>
                <button
                  onClick={next}
                  className="absolute right-5 top-[40%] transform -translate-y-1/2 bg-black text-white px-3 py-3 text-4xl font-bold rounded-full focus:outline-none -mr-8 border-2 border-white"
                >
                  <BiChevronRight />
                </button>
      </div>
    </div>
  );
};

export default Carousel;
