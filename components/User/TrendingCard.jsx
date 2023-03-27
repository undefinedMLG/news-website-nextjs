import React from "react";
import { FiTrendingUp } from "react-icons/fi";

export const TrendingCard = () => {
  return (
    <>
      <div className="py-10 px-20 text-[#070E13] font-poppins">
        <div className="flex gap-2 items-center">
          <div className="p-2 ring-2 ring-[#070E13] rounded-full">
            <FiTrendingUp />
          </div>
          <h1 className="flex text-[20px]">Trending Topic</h1>
        </div>
        <div className="h-80 border-b-2 border-[#CFCFCF]">
          <div className="grid lg:grid-cols-3 w-full md:grid-cols-2 h-72 max-lg:overflow-y-scroll grid-cols-1">
            <div className="gap-5 flex text-[#070E13] font-poppins">
              <div className="w-16 text-[40px] text-[#DFDFDF] flex items-center ">
                01
              </div>
              <section>
                <div className="pt-9 flex">
                  <img
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="text-[32px] flex rounded-full w-8 h-8 object-cover"
                  />
                  <div className="pl-3 flex text-[14px] items-center">
                    Prayoga Adi
                  </div>
                </div>
                <div className="pt-2 text-[16px]">UI/UX Trends in 2023</div>
                <div className="pt-6 text-[12px] text-[#7C7C7C]">
                  Mar 21 • 17 min read
                </div>
              </section>
            </div>

            <div className="gap-5 flex text-[#070E13] font-poppins">
              <div className="w-16 text-[40px] text-[#DFDFDF] flex items-center ">
                02
              </div>
              <section>
                <div className="pt-9 flex">
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="text-[32px] flex rounded-full w-8 h-8 object-cover"
                  />
                  <div className="pl-3 flex text-[14px] items-center">
                    Zhidan M
                  </div>
                </div>
                <div className="pt-2 text-[16px]">Chat GPT vs Bard</div>
                <div className="pt-6 text-[12px] text-[#7C7C7C]">
                  Mar 21 • 17 min read
                </div>
              </section>
            </div>

            <div className="gap-5 flex text-[#070E13] font-poppins">
              <div className="w-16 text-[40px] text-[#DFDFDF] flex items-center ">
                03
              </div>
              <section>
                <div className="pt-9 flex">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="text-[32px] flex rounded-full w-8 h-8 object-cover"
                  />
                  <div className="pl-3 flex text-[14px] items-center">
                    Bu Darmi
                  </div>
                </div>
                <div className="pt-2 text-[16px]">How to Make Cendol Dawet</div>
                <div className="pt-6 text-[12px] text-[#7C7C7C]">
                  Mar 21 • 17 min read
                </div>
              </section>
            </div>

            <div className="gap-5 flex text-[#070E13] font-poppins">
              <div className="w-16 text-[40px] text-[#DFDFDF] flex items-center ">
                04
              </div>
              <section>
                <div className="pt-9 flex">
                  <img
                    src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="text-[32px] flex rounded-full w-8 h-8 object-cover"
                  />
                  <div className="pl-3 flex text-[14px] items-center">
                    Reyhan Marsalino
                  </div>
                </div>
                <div className="pt-2 text-[16px]">Javascript is a Mistake</div>
                <div className="pt-6 text-[12px] text-[#7C7C7C]">
                  Mar 23 • 17 min read
                </div>
              </section>
            </div>

            <div className="gap-5 flex text-[#070E13] font-poppins">
              <div className="w-16 text-[40px] text-[#DFDFDF] flex items-center ">
                05
              </div>
              <section>
                <div className="pt-9 flex">
                  <img
                    src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="text-[32px] flex rounded-full w-8 h-8 object-cover"
                  />
                  <div className="pl-3 flex text-[14px] items-center">
                    Kia Anime
                  </div>
                </div>
                <div className="pt-2 text-[16px]">Javascript is a Mistake</div>
                <div className="pt-6 text-[12px] text-[#7C7C7C]">
                  Mar 23 • 17 min read
                </div>
              </section>
            </div>

            <div className="gap-5 flex text-[#070E13] font-poppins">
              <div className="w-16 text-[40px] text-[#DFDFDF] flex items-center ">
                06
              </div>
              <section>
                <div className="pt-9 flex">
                  <img
                    src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="text-[32px] flex rounded-full w-8 h-8 object-cover"
                  />
                  <div className="pl-3 flex text-[14px] items-center">
                    Sigit Waluyo
                  </div>
                </div>
                <div className="pt-2 text-[16px]">
                  Russia Sending Rocket To Ukraine
                </div>
                <div className="pt-6 text-[12px] text-[#7C7C7C]">
                  Mar 23 • 17 min read
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
