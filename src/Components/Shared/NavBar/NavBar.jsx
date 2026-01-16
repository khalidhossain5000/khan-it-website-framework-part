"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo/logo.png";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Button from "../Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/seo-case-study", label: "SEO Case Study" },
    { href: "/contact", label: "Contact Us" },
  ];

  const currentPath=usePathname()
 
  // sticky code statd
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    // handler: set sticky if scrolled more than 50px
    const onScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    // use passive listener for better scroll performance
    window.addEventListener("scroll", onScroll, { passive: true });

    // run once to set initial state (if page opened not at top)
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // sticky code ends
  return (
    <header
      className={`px-2 lg:px-4 xl:px-8 transition duration-300  ${
        isSticky
          ? "fixed top-0 left-0 w-full bg-white lg:bg-slate-100/50  shadow-md lg:backdrop-blur z-50"
          : "lg:bg-transparent py-3 absolute top-0 left-0 w-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="logo">
          <Image src={logo} alt="Main logo" width={150} height={50} />
        </div>
        <nav className="menu hidden lg:block">
          <ul className="flex gap-8">
            {navItems.map((item, i) => {
              const isActive = currentPath === item.href;
              return (
                <li key={i}>
                  <Link
                    href={item.href}
                    className={`font-inter font-xl font-[400] flex items-center gap-1 ${
                      isActive ? "text-primary font-bold" : "text-text-primary"
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="btn hidden lg:block">
          <Button className={`font-medium text-xl gap-2`} icon={<FaPhoneAlt />}>
           +8801404282727
          </Button>
        </div>
        {/* mobile menu */}
 

        <MobileMenu navItems={navItems}></MobileMenu>

    
      </div>

      
    </header>
  );
};

export default NavBar;
