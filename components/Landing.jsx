
import Link from "next/link";
import Navbar from "./Navbar";
import Carousell from "./Carousell";


export default function Landing() {
  
  return (
    <>
      <Navbar />
      <div className="h-[562px] border-b-2 border-black bg-amber-400  items-center justify-between text-black flex px-32">
        <div className="max-w-lg">
          <h1 className="text-6xl font-[ssp] ">Keep Reading</h1>
          <p className="text-lg font-[poppins] mt-5 mb-10">
            membaca berita terbaik melalui{" "}
            <Link href={"/profile"}>Undifined</Link> akan memberikan kamu
            wawasan yang luas mengenai desain ui/ux
          </p>
          <Link
            href={"/"}
            className=" font-[poppins]  bg-black text-white py-2 px-4 rounded-full"
          >
            start reading
          </Link>
        </div>

        <div className="flex flex-col items-center w-full">
          <Carousell />
        </div>
      </div>
    </>
  );
}
