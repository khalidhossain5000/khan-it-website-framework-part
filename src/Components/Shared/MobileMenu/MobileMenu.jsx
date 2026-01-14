import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../Button/Button";

const MobileMenu = ({ navItems }) => {
  return (
    <div className="lg:hidden bg-white">
      <Sheet className="bg-white">
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        
        <SheetContent    side="right" className="w-[300px] sm:w-[400px] p-4">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col space-y-4 mt-8">
            {navItems.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t pt-4 flex flex-col space-y-4">
              <Button
                className={`font-medium text-xl gap-2`}
                icon={<FaPhoneAlt />}
              >
                +8801404552727
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
