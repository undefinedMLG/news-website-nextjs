import SideBar from "@/components/Users/Sidebar/SideBar";
import Tabbing from "@/components/Users/Tabbing";
import React from "react";

export default function page() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="relative top-16 w-[90%] mx-auto">
        <Tabbing />
        <SideBar />
      </div>
    </div>
  );
}
