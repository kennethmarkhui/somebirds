import Link from "next/link";
import {
  HiOutlineMenu,
  HiSearch,
  HiOutlineUser,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
} from "react-icons/hi";

const navLinks = ["men", "women", "kids"];

const Header = () => {
  return (
    <header className="flex fixed top-0 inset-x-0 justify-between items-center bg-white px-8 py-2 z-10">
      <HiOutlineMenu size="2em" className="cursor-pointer md:hidden" />

      <ul className="hidden md:flex gap-4">
        {navLinks.map((navLink) => (
          <li key={navLink}>
            <Link href="/" className="hover:underline">
              {navLink}
            </Link>
          </li>
        ))}
      </ul>

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
