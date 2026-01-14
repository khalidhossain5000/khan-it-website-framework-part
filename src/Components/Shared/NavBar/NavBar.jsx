import React from "react";
import logo from "../../../assets/logo/logo.png";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Button from "../Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";
const NavBar = () => {
  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/seo-case-study", label: "SEO Case Study" },
    { href: "/contact", label: "Contact Us" },
  ];
  return (
    <header className="px-2">
        <div className="container mx-auto flex items-center justify-between py-4">
      <div className="logo">
        <Image src={logo} alt="Main logo" width={150} height={50} />
      </div>
      <nav className="menu hidden lg:block">
        <ul className="flex gap-8">
        {navItems.map((item,i) => (
          <li key={i} className="">
            <Link
              href={item.href}
              className="font-inter font-xl font-[400] flex items-center gap-1 "
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              )}
            </Link>

            
          </li>
        ))}
      </ul>
      </nav>
      <div className="btn hidden lg:block">
        <Button className={`font-medium text-xl gap-2`}  icon={<FaPhoneAlt/>}>+8801404552727</Button>
      </div>
      {/* mobile menu */}
      <MobileMenu navItems={navItems}></MobileMenu>
      </div>

    </header>
  );
};

export default NavBar;
