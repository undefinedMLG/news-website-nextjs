import SideBar from "@/components/User/Sidebar/SideBar";
import HeroSection from "./sections/HeroSection";
import MainNewsSection from "./sections/MainNewsSection";
import Tabbing from "@/components/User/Tabbing";
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
