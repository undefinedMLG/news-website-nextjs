import Landing from "@/components/Landing";
import SideBar from "@/components/Sidebar/SideBar";
import Link from "next/link";


export default function page() {
  return (
    <div className="text-red-500">
      <Landing />
      <SideBar />
      <Link href="/1">Klik</Link>
    </div>
  );
}
