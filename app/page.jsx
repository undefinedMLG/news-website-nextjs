import Landing from "@/components/Landing";
import SideBar from "@/components/Sidebar/SideBar";
import CarousellNews from "@/components/mainNews";

export default function page() {
  return (
    <div className="text-red-500">
      <Landing />
      <CarousellNews />
      <SideBar />
    </div>
  );
}
