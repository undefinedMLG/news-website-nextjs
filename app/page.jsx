import Landing from "@/components/Landing";
import SideBar from "@/components/Sidebar/SideBar";
import CarousellNews from "@/components/mainNews";
import { TrendingCard } from "@/components/User/TrendingCard";
export default function page() {
  return (
    <div className="text-red-500">
      <Landing />
      <TrendingCard />
      <CarousellNews />
      <SideBar />
    </div>
  );
}
