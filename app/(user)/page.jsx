import SideBar from "@/components/user/Sidebar/SideBar";
import HeroSection from "./sections/HeroSection";
import MainNewsSection from "./sections/MainNewsSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <MainNewsSection />
      <SideBar />
    </div>
  );
}
