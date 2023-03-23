import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 bg-yellow-400">
      <Image src="/image/logo_Undefined.png" alt="" width={0} height={0} />
      <div>
        <div>
            <Link href={"/"}>Home</Link>
            <Link href={"/explore"}>Explore</Link>
            <Link href={"/write"}>Write</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
