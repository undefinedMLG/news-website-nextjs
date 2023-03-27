import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-secondary h-[75vh]">
      <div className="max-w-[90%] mx-auto">
        <div className="relative top-32">
          <div>
            <h1 className="text-[2.5rem] font-gts font-bold text-dark">
              Keep Reading
            </h1>
            <p className="text-xl font-poppins font-medium text-dark mt-2">
              Read what you need for today, and upgrade your skill
            </p>
            <button className="text-base text-zinc-100 font-medium bg-dark px-7 py-3 rounded-full mt-9">
              Start Reading
            </button>
          </div>
          <div className="hidden">
            <img
              src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
