import SideBar from "@/components/Users/Sidebar/SideBar";
import HeroSection from "./sections/HeroSection";
import MainNewsSection from "./sections/MainNewsSection";
import Tabbing from "@/components/Users/Tabbing";
import TrendingTopics from "./sections/TrendingTopics";

export default function page() {
  return (
    <div>
      <HeroSection />
      <TrendingTopics />
      <MainNewsSection />
      <div className="flex gap-x-14 w-[80%] mx-auto">
        <Tabbing />
        <SideBar />
      </div>
    </div>
  );
}
