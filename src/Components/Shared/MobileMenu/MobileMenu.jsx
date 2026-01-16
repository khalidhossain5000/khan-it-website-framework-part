"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X, Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

const MobileMenu = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  return (
    <div className=" lg:hidden">
      {/* Hamburger Icon */}
      <button
        className="p-2 relative z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <X className="w-8 h-8 md:w-9 md:h-9 text-primary" />
        ) : (
          <Menu className="w-8 h-8 md:w-9 md:h-9 text-primary cursor-pointer" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Menu */}
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full md:w-3/4 bg-[#fcfff2] z-50 flex flex-col  p-4 md:p-6 gap-6 shadow-2xl w-11/12"
            >
              <div>
                {/* Close Icon */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-800 dark:text-white p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex justify-start flex-col gap-3">
                  {navItems.map((item, i) => {
                    const isActive = currentPath === item.href;
                    return (
                      <li key={i} className="list-none">
                        <Link
                          href={item.href}
                          className={`font-inter font-xl font-[400] flex items-center gap-1 ${
                            isActive
                              ? "text-primary font-bold"
                              : "text-text-primary"
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
                </div>
              </div>
              {/* Auth Buttons */}
              <div>
                <Button
                  className={`font-medium text-xl gap-2`}
                  icon={<FaPhoneAlt />}
                >
                  +8801404552727
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
