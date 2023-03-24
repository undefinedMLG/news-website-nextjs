import Landing from "@/components/Landing";
import SideBar from "@/components/Sidebar/SideBar";
import CarousellNews from "@/components/mainNews";
import Modal from "@/components/Sidebar/modal";

export default function page() {
  return (
    <div className="text-red-500">

      <CarousellNews/>
      <SideBar />


    </div>
  );
}
