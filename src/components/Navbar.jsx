
import React from "react";
import jordan from "../assets/jordan.png";
import nike from "../assets/nike.png";
import { navLinks, sNavLinks } from "./helper";
import { ShoeCanvas } from "./model";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(null);

  const toggleMenu = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {/* Top Navbar */}
      <div className="h-[40px] w-full flex justify-between items-center pl-10 pr-10 bg-gray-200 text-[14px]">
        <img className="w-[24px] h-[24px]" src={jordan} alt="Jordan logo" />

        <ul className="flex gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="group relative"
              onClick={() => toggleMenu(link.id)}
            >
              <a href={`#${link.id}`} className="hover:text-gray-500">
                {link.title}
              </a>
              {isOpen === link.id && link.submenu && (
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  {link.submenu.map((sublink) => (
                    <li key={sublink.id} className="p-2 hover:bg-gray-200">
                      <a href={`#${sublink.id}`}>{sublink.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>


      {/* Main Navbar */}
      <div className="h-[40px] w-full flex justify-between items-center pl-10 pr-10 text-[16px] relative">
        <img className="w-[60px] h-[24px]" src={nike} alt="Nike logo" />

        <ul className="flex gap-4">
          {sNavLinks.map((nlink) => (
            <li
              key={nlink.id}
              className="group relative"
              onClick={() => toggleMenu(nlink.id)}
            >
              <a href={`#${nlink.id}`} className="hover:text-gray-500">
                {nlink.title}
              </a>
              {isOpen === nlink.id && nlink.submenu && (
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  {nlink.submenu.map((snlink) => (
                    <li key={snlink.id} className="p-2 hover:bg-gray-200">
                      <a href={`#${snlink.id}`}>{snlink.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6 z-20">
          <IoIosSearch className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-400" />
          <CiShoppingCart className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />
          <MdFavoriteBorder className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />
        </div>
      </div>
    {/* <motion.div>
      <ShoeCanvas/>
    </motion.div>
       */}
    </div>
  );
}

export default Navbar;
