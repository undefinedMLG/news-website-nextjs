"use client";
import Image from "next/image";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const images = [
  {
    id: 1,
    url: "https://picsum.photos/600/400?random=1",
    title: "100 mobil Gratis",
    description:
      "halo inii adalahfoto dengan gambar random yang di ambill dari sumber terpercayadsgasjahshajhdhasdljadldajldbjsbcjbchjsabsbd",
  },
  {
    id: 2,
    url: "/image/coba.jpg",
    title: "Cahaya Lampu philip 100watt",
    description:
      "halo inii adalahfoto dengan gambar random yang di ambill dari sumber terpercayadsgasjahshajhdhasdljadldajldbjsbcjbchjsabsbd",
  },
  {
    id: 3,
    url: "https://picsum.photos/600/400?random=3",
    title: "Bulan puasa jadi progammer",
    description:
      "halo inii adalahfoto dengan gambar random yang di ambill dari sumber terpercayadsgasjahshajhdhasdljadldajldbjsbcjbchjsabsbd",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" max-w-2xl w-[437px]">
        <div className="relative  border-2 border-black object-cover">
          <Image
            src={images[currentIndex]?.url}
            alt={images[currentIndex]?.title}
            width={200}
            height={200}
            className=" h-[235px] w-[437px] object-cover"
          />
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-3 text-4xl font-bold rounded-full focus:outline-none -mr-8 border-2 border-white"
          >
            <BiChevronRight />
          </button>
        </div>
        <h1 className="text-2xl font-[poppins] font-semibold truncate mt-4">
          {images[currentIndex]?.title}
        </h1>
        <p className="truncate">{images[currentIndex]?.description}</p>
      </div>
    </div>
  );
};

export default Carousel;
