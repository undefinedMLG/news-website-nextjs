import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" fixed w-full flex justify-between items-center z-50 px-32 bg-transparent border-b-2 text-black border-b-black h-16 max-md:flex-col  max-md:px-4">
      <div className="h-8 w-auto  flex items-center">
        <h1 className="font-[ssp] text-4xl font-[700]">Undifined</h1>
      </div>

      <div className=" flex  gap-8 font-medium items-center max-md:mb-3 justify-end   max-md:justify-between w-full  ">
        <div className="flex gap-8 font-poppins max-md:-mt-10 ">
          <Link href={"/"}>Home</Link>
          <Link href={"/explore"}>Explore</Link>
          <Link href={"/write"}>Write</Link>
        </div>
        <div className=" max-md:-mt-10">
          <Link
            href={"/write"}
            className="bg-black py-2 px-6 rounded-full text-white">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
