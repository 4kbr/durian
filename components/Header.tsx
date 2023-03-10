import Image from "next/image";
import Link from "next/link";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Header() {
  const session = false;
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4 shadow-md">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href={"/"}>
          <div
            className="relative h-10 w-5 cursor-pointer opacity-75 transition 
        hover:opacity-100"
          >
            <Image
              src={"https://rb.gy/vsvv2o"}
              alt={"durian runtuh"}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
      </div>
      <div className="flex-1 items-center justify-center space-x-8 hidden md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      {/* Icon disebelah kanan */}
      <div className="flex items-center justify-center gap-x-4 md:w-1/5 ">
        <SearchIcon className="headerIcon" />
        <Link href={"/checkout"}>
          <div className="relative cursor-pointer">
            <span
              className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full 
          bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white"
            >
              5
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src={
              // session.user?.image||
              "https://www.gravatar.com/avatar/00000000000000000000000?d=mp&f=y"
            }
            alt={""}
            width={34}
            height={34}
          />
        ) : (
          <UserIcon
            className="headerIcon"
            onClick={() => alert("proses pengembangan")}
          />
        )}
      </div>
    </header>
  );
}
