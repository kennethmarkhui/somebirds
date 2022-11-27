import { useState } from "react";
import Link from "next/link";
import {
  HiOutlineMenu,
  HiSearch,
  HiOutlineUser,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import Drawer from "./Drawer";
import ButtonImage from "./ButtonImage";

const navLinks = ["men", "women", "kids"];

const Shoes = [
  "Everyday Sneakers",
  "Running Shoes",
  "Slip-Ons",
  "Water-Repellent Sneakers",
  "Hiking Shoes",
  "High Tops",
  "Slippers",
  "Sale",
  "Shop all",
];
const ShopByActivity = [
  "Everyday",
  "Hiking",
  "Running",
  "Lounging",
  "Shop all",
];
const ApparelnMore = [
  "Tees",
  "Underwear",
  "Socks",
  "Sweatshirts & Sweatpants",
  "Hats & Scarves",
  "Insoles",
  "Sales",
  "Gift Cards",
];

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = (): void => {
    setIsOpen(true);
  };

  const closeDrawer = (): void => {
    setIsOpen(false);
  };
  return (
    <header className="flex fixed top-0 inset-x-0 justify-between items-center bg-white px-8 py-2 z-50">
      <HiOutlineMenu size="2em" className="cursor-pointer md:hidden" />
      {/* TABLIST */}
      <ul className="hidden md:flex gap-4">
        {navLinks.map((navLink) => (
          <li
            key={navLink}
            onClick={openDrawer}
            className="cursor-pointer hover:underline"
          >
            {navLink}
          </li>
        ))}
      </ul>

      {/* TAB ITEMS */}

      <Link href="/">logo</Link>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4 ">
          <Link href="/" className="hover:underline">
            stores
          </Link>
          <HiOutlineUser size="2em" className="cursor-pointer" />
          <Link href="/help">
            <HiOutlineQuestionMarkCircle
              size="2em"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <HiSearch size="2em" className="cursor-pointer md:hidden" />
        <HiOutlineShoppingCart size="2em" className="cursor-pointer" />
      </div>
      <Drawer isOpen={isOpen} onClose={closeDrawer}>
        <div className="bg-beige w-full">
          <div className="max-w-screen-xl pt-16 pb-4 mx-auto px-4">
            <div className="flex flex-row justify-center">
              <div className="basis-1/5">
                <h3 className="py-4 font-bold text-xl hover:underline cursor-pointer">
                  SHOES
                </h3>
                {Shoes.map((item, index) => (
                  <p
                    key={index}
                    className="text-s mb-2 hover:underline cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="basis-1/5">
                <h3 className="py-4 font-bold text-xl hover:underline cursor-pointer">
                  SHOP BY ACTIVITY
                </h3>
                {ShopByActivity.map((item, index) => (
                  <p
                    key={index}
                    className="text-s mb-2 hover:underline cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="basis-1/5">
                <h3 className="py-4 font-bold text-xl hover:underline cursor-pointer">
                  APPAREL & MORE
                </h3>
                {ApparelnMore.map((item, index) => (
                  <p
                    key={index}
                    className="text-s mb-2 hover:underline cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="basis-2/5">
                <h3 className="py-4 font-bold text-xl ">FEATURED</h3>
                <div className="flex flex-col gap-4">
                  <ButtonImage variant="hero">THE FLUFF COLLECTION</ButtonImage>
                  <ButtonImage variant="banana">MENS SALE</ButtonImage>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
