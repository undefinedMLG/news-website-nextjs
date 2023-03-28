import Image from "next/image";
import Link from "next/link";
import { GoKebabHorizontal } from "react-icons/go";
import { FiMinusCircle } from "react-icons/fi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { useRouter } from "next/navigation";

const Card = (props) => {
  const item = props;
  const router = useRouter();

  return (
    <div
      className="mt-5 cursor-pointer hover:bg-zinc-100		 lg:w-9/12"
      onClick={() => router.push(`/${item._id}`)}
    >
      <div className="flex md:mt-0">
        <Image
          src={item.author[0].image}
          width={50}
          height={50}
          alt="user"
          className="rounded-full"
        />
        <h1 className="font-semibold ml-3 mt-3">{item.author[0].name}</h1>
        <p className="font-bold ml-3 mt-3 text-gray-400">·</p>
        <p className="text-sm ml-3 mt-3.5 text-gray-400">{item.date}</p>
      </div>
      <div className="flex flex-col-reverse mr-3 md:flex-row">
        <div>
          <h1 className="font-bold md:mt-5 md:text-xl">{item.title}</h1>
          <p className="mt-3 ">{item.author[0].desc.slice(0, 100) + "..."}</p>
        </div>
        <div className="md:mt-5 md:ml-3 md:mr-3 lg:mt-0 lg:ml-3  ">
          <Image
            src={item.image}
            width={400}
            height={400}
            alt="news poster"
            className="aspect-3-2"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:gap-8 md:flex-row">
        <div className="flex mt-5 md:mt-5">
          <p className="bg-gray-200 pl-3 pr-3 pt-2 pb-2 rounded-full text-xs">
            {item.category}
          </p>
          <p className="mt-1.5 ml-3 text-sm text-gray-500">
            {item.time} min read
          </p>
          <p className="font-bold ml-3 mt-1.5 text-gray-400">·</p>
          <p className="mt-1.5 ml-3 text-sm text-gray-500">Selected for you</p>
        </div>
        <div className="flex gap-5 mt-5 md:mt-7">
          <Link href="https://www.instagram.com/reyhanmd._">
            <MdOutlineBookmarkAdd />
          </Link>
          <Link href="https://www.instagram.com/reyhanmd._">
            <FiMinusCircle />
          </Link>
          <Link href="https://www.instagram.com/reyhanmd._">
            <GoKebabHorizontal />
          </Link>
        </div>
      </div>
      <hr className="border-t border-gray-600 mt-5 mr-3 md:mr-3" />
    </div>
  );
};

export default Card;
