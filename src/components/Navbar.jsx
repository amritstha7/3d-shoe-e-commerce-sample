import React from "react";
import jordan from "../assets/jordan.png";
import nike from "../assets/nike.png";

import { navLinks, sNavLinks } from "./helper";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoClose } from "react-icons/io5"; // Import the close icon
import { useState } from "react";
import {motion} from "framer-motion"
import Shoe from "./model/Shoe"

function Navbar() {
  const [isOpen, setIsOpen] = useState(null);
  const [open, setOpen] = useState(false);
  // Here, open is initially false. This means the menu is closed when the component first renders.

  const toggleMenu = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-screen max-w-[1444px] mx-auto font-sans">
      {/* Top Navbar */}
      <div className="h-[40px] w-full hidden sm:flex justify-between items-center px-4 sm:px-10 bg-gray-200 text-[14px]">
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
                <ul className="absolute left-0 mt-2 w-50 bg-white shadow-lg rounded-lg transition-opacity duration-300 z-30">
                  {link.submenu.map((sublink) => (
                    <li
                      key={sublink.id}
                      className="p-2 hover:bg-gray-200 w-[150px]"
                    >
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
      <div className="h-[40px] w-full flex justify-between items-center px-4 sm:px-10 text-[16px] relative">
        <img className="w-[60px] h-[24px]" src={nike} alt="Nike logo" />
        <ul className="hidden sm:flex gap-4">
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
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg transition-opacity duration-300 z-10">
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
        
        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <TfiAlignJustify
            className="w-[28px] h-[28px] cursor-pointer"
            // When you click the menu icon (TfiAlignJustify), this line of code is executed:
            onClick={() => setOpen(!open)} // Toggles the menu
            // What Happens:
//             This part of the code displays the TfiAlignJustify icon, and when clicked, it toggles the value of open.
// If open was false (menu closed), clicking the icon will set open to true, opening the menu.
          />
        </div>
        </div>
      </div>


{/* JUMPING IN THIS CODE  */}
      {/* Mobile Menu */}
      {open && (
        // What This Means:
        // If open is true, the menu (<div>) is displayed.
        // If open is false, the menu is not displayed.
//         The <div> containing the menu is only rendered when open is true.
// Inside this <div>, you have the IoClose icon to close the menu and the list of sNavLinks.

        <div className="sm:hidden fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg z-40 rounded-[15px] ">
          <div className="flex justify-end p-4">
            <IoClose
              className="w-[24px] h-[24px] cursor-pointer"
              // When you click the close icon (<IoClose/>), this line of code is executed:
              onClick={() => setOpen(false)} 
              // This explicitly/ directly (straightforward and direct manner.) sets open to false, closing the menu.
            />
          </div>
          <ul className="flex flex-col p-4 ">
            {sNavLinks.map((nlink) => (
              <li key={nlink.id} className="py-2 border-b border-gray-200 text-2xl"
              onClick={()=>toggleMenu(nlink.id)}
              >
                <a href={`#${nlink.id}`} className="hover:text-gray-500 ">
                  {nlink.title}
                </a>

                {isOpen === nlink.id && nlink.submenu && (
                  <ul className="ml-4 mt-2 ">
                    {nlink.submenu.map((snlink) => (
                      <li key={snlink.id} className="py-2">
                        <a href={`#${snlink.id}`}>{snlink.title}</a>
                      </li>
                    ))}
                  </ul>
                )}


              </li>
            ))}
          </ul>
          <div className="flex  my-5 p-4">
          <img className="w-[24px] h-[24px] " src={jordan} alt="Jordan logo"/>
          <span>Jordan</span>
          </div>
          
        </div>
      )}

      <motion.div>
        <Shoe/>
      </motion.div>
    </div>
  );
}

export default Navbar;
