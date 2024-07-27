"use client";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  name: string;
  link: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
}

const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`w-6 h-1 bg-blue-500 ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full bg-white shadow-md flex flex-col justify-center items-center h-[calc(100vh-96px)] gap-y-6 font-medium text-xl z-10">
          {navItems.map((item, index) => (
            <div key={index}>
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
