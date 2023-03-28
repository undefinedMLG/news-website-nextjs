import React from "react";
import TrendingTopics from "../sections/TrendingTopics";
import Follow from "@/components/user/sidebar/Follow";
import Trussted from "@/components/user/sidebar/Trusted";

export default function page() {
  return (
    <div className="relative top-16">
      <div className="w-[90%] mx-auto">
        <Trussted />
      </div>
    </div>
  );
}
