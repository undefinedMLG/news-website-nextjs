import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { GoKebabHorizontal } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
import Link from "next/link";
import SideBar from "@/components/Sidebar/SideBar";

export default function Page({ params }) {
  const ID = params.detail;
  //   const sentence = "UI/UX Trend in 2023";
  //   const words = sentence.split(" ");
  //   <div className="flex">
  //   {words.map((word,index) => (
  //     <div key={index} className="bg-gray-200 pl-3 pr-3 pt-2 pb-2 rounded-full">
  //       <span key={word}>{word} </span>
  //     </div>
  //   ))}
  // </div>
  const sentence =
    "Neumorphism combines flat design and old classic skeuomorphism (Interface objects that mimic their real-world counterparts in appearance e.g. recycle bin icon used for discarding files).Neumorphism helped revive skeuomorphism as it laid the foundation of interface design along with flat design emphasizing minimalism.It’s a visual style that combines background colors, shapes, gradients, and shadows to ensure UI elements’ graphic intensity and a flat design. This allows for achieving a soft, extruded plastic look and almost 3D styling.";

  return (
    <>
      <div className=" mt-12 ml-3 lg:ml-24 md:mt-0 md:ml-0 flex flex-col lg:flex-row">
        <div className="mt-24">
          <div className="flex flex-col md:mr-3 lg:mr-20 lg:w-9/12 md:flex-row md:justify-between">
            <div className="flex">
              <div>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wPQWJOJu8CP11fYLGvdxz5zfJV4kBVsL8Q&usqp=CAU"
                  width={50}
                  height={50}
                  alt="user"
                  className="rounded-full"
                />
              </div>
              <div className="ml-3">
                <h1 className="font-semibold mb-1">Prayoga Adi</h1>
                <div className="flex gap-2 text-xs text-gray-500 ">
                  <p>Jul 28,2022</p>
                  <p className="font-bold">·</p>
                  <p>8 min read</p>
                </div>
              </div>
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
            <div>
              <h1 className="text-3xl font-bold">UI/UX Trend in 2023</h1>
            </div>
            <div className="mt-5">
              <p>
                It is well known that 2021 was exciting for designers all around
                the industry. This makes me believe that 2022 will be no less.
                Design trends now should be more user-centered and have an
                easy-to-navigate interface.
              </p>
            </div>
            <div>
              <Image
                src="https://miro.medium.com/v2/resize:fit:1200/1*oV6DFQ6jHkcmz5g48-b4tw.png"
                width={700}
                height={700}
                alt="news poster"
                className="aspect-3-2"
              />
            </div>
            <div>
              <p>
                This story briefs about the UI and UX Design Trends that are
                worth inspiring yourself within 2022. I’m listing a collection
                of ideas you should try implementing in your future projects if
                you haven’t already to keep up with the latest design trends! It
                might definitely be challenging but it’ll only hone your skills
                and make you a jack of all trades.
              </p>
              <p className="mt-3">
                Neumorphism combines flat design and old classic skeuomorphism
                (Interface objects that mimic their real-world counterparts in
                appearance e.g. recycle bin icon used for discarding
                files).Neumorphism helped revive skeuomorphism as it laid the
                foundation of interface design along with flat design
                emphasizing minimalism.It’s a visual style that combines
                background colors, shapes, gradients, and shadows to ensure UI
                elements’ graphic intensity and a flat design. This allows for
                achieving a soft, extruded plastic look and almost 3D styling.
              </p>
              <p className="mt-3">
                Bold typography is one of the easiest ways to grab users’
                attention. Bold typography stands out from its surroundings and
                demands to be read. But it has to be an integral (and
                integrated) part of the overall aesthetic plus well thought out
                before implementing it in your design.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="font-bold text-xl">Thank You!</h2>
            </div>
            <div className="mt-10 flex gap-5">
              <div className="bg-gray-200 pl-3 pr-3 pt-2 pb-2 rounded-full">
                <p>UI</p>
              </div>
              <div className="bg-gray-200 pl-3 pr-3 pt-2 pb-2 rounded-full">
                <p>UX</p>
              </div>
              <div className="bg-gray-200 pl-3 pr-3 pt-2 pb-2 rounded-full">
                <p>Trending</p>
              </div>
              <div className="bg-gray-200 pl-3 pr-3 pt-2 pb-2 rounded-full">
                <p>2022</p>
              </div>
            </div>
            <div className="mt-12 mb-5">
              <hr className="border-t border-black" />
            </div>
          </div>

          {/* rekomen news */}
          <div className=" lg:w-9/12 mt-16">
            {/* card */}
            <div className="mt-5">
              <div className="flex md:mt-0">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wPQWJOJu8CP11fYLGvdxz5zfJV4kBVsL8Q&usqp=CAU"
                  width={50}
                  height={50}
                  alt="user"
                  className="rounded-full"
                />
                <h1 className="font-semibold ml-3 mt-3">Prayoga Adi</h1>
                <p className="font-bold ml-3 mt-3 text-gray-400">·</p>
                <p className="text-sm ml-3 mt-3.5 text-gray-400">Feb 24</p>
              </div>
              <div className="flex flex-col-reverse mr-3 md:flex-row">
                <div>
                  <h1 className="font-bold md:mt-5 md:text-xl">
                    7 useful CSS Tricks
                  </h1>
                  <p className="mt-3 ">{sentence.slice(0, 100) + "..."}</p>
                </div>
                <div className="md:mt-5 md:ml-3 md:mr-3 lg:mt-0 lg:ml-3  ">
                  <Image
                    src="https://miro.medium.com/v2/resize:fit:1200/1*oV6DFQ6jHkcmz5g48-b4tw.png"
                    width={400}
                    height={400}
                    alt="news poster"
                    className="aspect-3-2"
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse md:gap-8 md:flex-row">
                <div className="flex mt-5 md:mt-5">
                  <p className="bg-gray-200 pl-3 pr-3 pt-2 pb-2 rounded-full text-xs">
                    Progamming
                  </p>
                  <p className="mt-1.5 ml-3 text-sm text-gray-500">
                    17 min read
                  </p>
                  <p className="font-bold ml-3 mt-1.5 text-gray-400">·</p>
                  <p className="mt-1.5 ml-3 text-sm text-gray-500">
                    Selected for you
                  </p>
                </div>
                <div className="flex gap-5 mt-5 md:mt-7">
                  <Link href="https://www.instagram.com/reyhanmd._">
                    <MdOutlineBookmarkAdd />
                  </Link>
                  <Link href="https://www.instagram.com/reyhanmd._">
                    <FiMinusCircle />
                  </Link>
                  <Link href="https://www.instagram.com/reyhanmd._">
                    <GoKebabHorizontal />
                  </Link>
                </div>
              </div>
              <hr className="border-t border-gray-600 mt-5 mr-3 md:mr-3" />
            </div>
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
        <div className="md:m-auto">
          <SideBar/>
        </div>
      </div>
    </>
  );
}
