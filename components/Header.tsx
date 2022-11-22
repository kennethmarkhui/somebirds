import { useState } from "react";
import Link from "next/link";
import {
  HiOutlineMenu,
  HiSearch,
  HiOutlineUser,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { Tab } from "@headlessui/react";
import HeaderDropdown from "./HeaderDropdown";

const navLinks = ["men", "women", "kids"];

interface INavItem {
  idx: number;
  name: string;
}
const NavItems: INavItem[] = [
  {
    idx: 0,
    name: "Fluff Collector",
  },
];

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <header className="flex fixed top-0 inset-x-0 justify-between items-center bg-white px-8 py-2 z-10">
      <HiOutlineMenu size="2em" className="cursor-pointer md:hidden" />
      {/* TABLIST */}
      <ul className="hidden md:flex gap-4">
        {navLinks.map((navLink) => (
          <li key={navLink}>
            <Link href="/" className="hover:underline font-semibold">
              {navLink}
            </Link>
          </li>
        ))}
      </ul>

      {/* TAB ITEMS */}
      {/* 
      <HeaderDropdown></HeaderDropdown>
      */}
      <Link href="/">logo</Link>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4 ">
          <Link href="/" className="hover:underline">
            stores
          </Link>
          <HiOutlineUser size="2em" className="cursor-pointer" />
          <HiOutlineQuestionMarkCircle size="2em" className="cursor-pointer" />
        </div>
        <HiSearch size="2em" className="cursor-pointer md:hidden" />
        <HiOutlineShoppingCart size="2em" className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
