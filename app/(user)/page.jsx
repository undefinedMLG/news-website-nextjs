import SideBar from "@/components/user/Sidebar/SideBar";
import HeroSection from "./sections/HeroSection";
import MainNewsSection from "./sections/MainNewsSection";
import Tabbing from "@/components/user/Tabbing";

export default function page() {
  return (
    <div>
      <HeroSection />
      <MainNewsSection />
      <div className="flex gap-x-14 w-[80%] mx-auto">
        <Tabbing />
        <SideBar />
      </div>
    </div>
  );
}
