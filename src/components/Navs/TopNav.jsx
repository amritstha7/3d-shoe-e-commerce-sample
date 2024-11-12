import React, { useEffect } from "react";
import jordan from "../assets/jordan.png";
import { navLinks, } from "../helper";
import { useState } from "react";

function TopNav() {
    const [liOpen, setLiOpen] = useState(null);
    const toggleMenu = (id) => {
        setLiOpen((prev) => (prev === id ? null : id));
      };
  return (

    <div className="w-full mx-auto font-sans max-w-screen">
    {/* Top Navbar */}
    <div className="h-[35px] hidden sm:flex justify-between items-center px-4 sm:px-10 bg-gray-100 text-[14px]">
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
            {liOpen === link.id && link.submenu && (
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
    </div></div>
  )
}

export default TopNav