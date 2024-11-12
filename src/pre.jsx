// import React, { useState } from "react";
// import jordan from "../assets/jordan.png";
// import nike from "../assets/nike.png";
// import { navLinks, sNavLinks } from "./helper";
// import { CiShoppingCart } from "react-icons/ci";
// import { IoIosSearch } from "react-icons/io";
// import { MdFavoriteBorder } from "react-icons/md";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(null);

  // const toggleMenu = (id) => {
  //   setIsOpen((prev) => (prev === id ? null : id));
  // };

//   return (
//     <div>
//       {/* Top Navbar */}
//       <div className="h-[40px] w-full flex justify-between items-center pl-10 pr-10 bg-gray-200 text-[14px]">
//         <img className="w-[24px] h-[24px]" src={jordan} alt="Jordan logo" />

//         <ul className="flex gap-4">
//           {navLinks.map((link) => (
//             <li
//               key={link.id}
//               className="group relative"
//               onClick={() => toggleMenu(link.id)}
//             >
//               <a href={`#${link.id}`} className="hover:text-gray-500">
//                 {link.title}
//               </a>
//               {isOpen === link.id && link.submenu && (
//                 <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-30">
//                   {link.submenu.map((sublink) => (
//                     <li key={sublink.id} className="p-2 hover:bg-gray-200">
//                       <a href={`#${sublink.id}`}>{sublink.title}</a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Navbar */}
//       <div className="h-[40px] w-full flex justify-between items-center pl-10 pr-10 text-[16px] relative">
//         <img className="w-[60px] h-[24px]" src={nike} alt="Nike logo" />

//         <ul className="flex gap-4">
//           {sNavLinks.map((nlink) => (
//             <li
//               key={nlink.id}
//               className="group relative"
//               onClick={() => toggleMenu(nlink.id)}
//             >
//               <a href={`#${nlink.id}`} className="hover:text-gray-500">
//                 {nlink.title}
//               </a>
//               {isOpen === nlink.id && nlink.submenu && (
//                 <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//                   {nlink.submenu.map((snlink) => (
//                     <li key={snlink.id} className="p-2 hover:bg-gray-200">
//                       <a href={`#${snlink.id}`}>{snlink.title}</a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center gap-6 z-20">
//           <IoIosSearch className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-400" />
//           <CiShoppingCart className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />
//           <MdFavoriteBorder className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;




// import React from "react";
// import jordan from "../assets/jordan.png";
// import nike from "../assets/nike.png";
// import { navLinks, sNavLinks } from "./helper";
// import { ShoeCanvas } from "./model";
// import { CiShoppingCart } from "react-icons/ci";
// import { IoIosSearch } from "react-icons/io";
// import { MdFavoriteBorder } from "react-icons/md";
// import { motion } from "framer-motion";
// import { useState } from "react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(null);

//   const toggleMenu = (id) => {
//     setIsOpen((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div>
//       {/* Top Navbar */}
//       <div className="h-[40px] w-full flex justify-between items-center pl-10 pr-10 bg-gray-200 text-[14px] relative">
//         <img className="w-[24px] h-[24px]" src={jordan} alt="Jordan logo" />

//         <ul className="flex gap-4">
//           {navLinks.map((link) => (
//             <li
//               key={link.id}
//               className="group relative"
//               onClick={() => toggleMenu(link.id)}
//             >
//               <a href={`#${link.id}`} className="hover:text-gray-500">
//                 {link.title}
//               </a>
//               {isOpen === link.id && link.submenu && (
//                 <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-30">
//                   {link.submenu.map((sublink) => (
//                     <li key={sublink.id} className="p-2 hover:bg-gray-200">
//                       <a href={`#${sublink.id}`}>{sublink.title}</a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Navbar */}
//       <div className="h-[40px] w-full flex justify-between items-center pl-10 pr-10 text-[16px] relative">
//         <img className="w-[60px] h-[24px]" src={nike} alt="Nike logo" />

//         <ul className="flex gap-4">
//           {sNavLinks.map((nlink) => (
//             <li
//               key={nlink.id}
//               className="group relative"
//               onClick={() => toggleMenu(nlink.id)}
//             >
//               <a href={`#${nlink.id}`} className="hover:text-gray-500">
//                 {nlink.title}
//               </a>
//               {isOpen === nlink.id && nlink.submenu && (
//                 <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//                   {nlink.submenu.map((snlink) => (
//                     <li key={snlink.id} className="p-2 hover:bg-gray-200">
//                       <a href={`#${snlink.id}`}>{snlink.title}</a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center gap-6 z-20">
//           <IoIosSearch className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-400" />
//           <CiShoppingCart className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />
//           <MdFavoriteBorder className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />
//         </div>
//       </div>
//     {/* <motion.div>
//       <ShoeCanvas/>
//     </motion.div> */}
      
//     </div>
//   );
// }

// export default Navbar;


import React from "react";
import jordan from "../assets/jordan.png";
import nike from "../assets/nike.png";

import { navLinks, sNavLinks } from "./components/helper";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoClose } from "react-icons/io5"; // Import the close icon
import { GoPerson } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";
import Shoe from "./components/model/Shoe";

function Navbar() {
  const [isOpen, setIsOpen] = useState(null);
  const [open, setOpen] = useState(false);
  // Here, open is initially false. This means the menu is closed when the component first renders.

  const toggleMenu = (id) => {
    setIsOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className=" w-full mx-auto font-sans max-w-screen  ">
      {/* Top Navbar */}

      <div
        className="h-[35px] hidden sm:flex   flex justify-between items-center
        px-4 sm:px-10 bg-gray-100 text-[14px]
       
        "
      >
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
      <div
        className=" 
        h-[55px]  flex justify-between items-center
         px-4 sm:px-10 text-[16px] relative 
    
         "
        >
        
          <img className="w-[60px] h-[24px]" src={nike} alt="Nike logo" />
          <ul className="hidden sm:flex gap-4">
            {sNavLinks.map((nlink) => (
              <li
                key={nlink.id}
                className="group relative"
                onClick={() => toggleMenu(nlink.id)}
              >
                <a
                  href={`#${nlink.id}`}
                  className="hover:text-gray-500 text-[17px]"
                >
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
      

        <div className="flex items-center gap-6 z-20  ">
          <form className="w-full max-w-[160px] relative flex-1  ">
            <div className="relative hidden md:flex ">
              <input
                type="search"
                placeholder="Search"
                className="  w-full h-9 p-4 pr-12 rounded-full bg-gray-100 text-right hover:bg-gray-300   "
              />
              <button className="absolute left top-1/2 -translate-y-1/2 bg-transparent border-none ">
                <IoIosSearch className=" text-4xl cursor-pointer p-1 rounded-full bg-gray-100 hover:bg-gray-400 hover:border hover:border-gray-400" />
              </button>
            </div>
          </form>

          <div className="flex gap-2 items-center justify-center">
            <div className=" flex gap-1 lg:hidden block ">
              <IoIosSearch className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />
              {/* lg:hidden: Hides the search icon when the screen size is lg (1024px) or larger.
             block: Ensures the search icon is displayed (block-level element) on smaller screen sizes. */}

              <GoPerson className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />
              {/* hidden: Hides the icon by default.
             sm-700:block: Displays the icon as a block-level element when the screen size is 700px or larger. */}
            </div>

            <MdFavoriteBorder className=" hidden md:flex  text-[33px] cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />

            <CiShoppingCart className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />

            {/* Mobile Menu Icon */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <TfiAlignJustify
                className="w-6 h-6 cursor-pointer "
                // When you click the menu icon (TfiAlignJustify), this line of code is executed:
                onClick={() => setOpen(!open)} // Toggles the menu
                // What Happens:
                //             This part of the code displays the TfiAlignJustify icon, and when clicked, it toggles the value of open.
                // If open was false (menu closed), clicking the icon will set open to true, opening the menu.
              />
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
                  className="w-6 h-6 cursor-pointer"
                  // When you click the close icon (<IoClose/>), this line of code is executed:
                  onClick={() => setOpen(false)}
                  // This explicitly/ directly (straightforward and direct manner.) sets open to false, closing the menu.
                />
              </div>
              <ul className="flex flex-col p-4 ">
                {sNavLinks.map((nlink) => (
                  <li
                    key={nlink.id}
                    className="py-2 border-b border-gray-200 text-2xl"
                    onClick={() => toggleMenu(nlink.id)}
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
                <img
                  className="w-6 h-6 "
                  src={jordan}
                  alt="Jordan logo"
                />
                <span className="text-lg">Jordan</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <motion.div>
        <Shoe/>
      </motion.div> */}
    </div>
  );
}

export default Navbar;


<div className="mt-4 flex   flex-col items-center justify-center grid grid-cols-2 sm:grid-cols-4 gap-4 ">
              <ul className="mt-2">
                <li className="py-2">
              <p className="text-gray-500 text-lg">Popular Search Terms</p>
                  <a
                    href="https://www.nike.com/au/w/air-force-1-shoes-5sj3yzy7ok?vst=Air%20Force%201"
                    className="text-black-600 text-lg"
                  >
                    Air Force 1
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="https://www.nike.com/au/w/jordan-37eef?vst=Jordan"
                    className="text-black-600 text-lg"
                  >
                    Jordan
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="https://www.nike.com/au/w/air-max-shoes-a6d8hzy7ok?vst=Air%20Max"
                    className="text-black-600 text-lg"
                  >
                    Air Max
                  </a>
                </li>
                <li className="py-2">
                  <a
                    href="https://www.nike.com/au/w/blazer-shoes-9gw3azy7ok?vst=Blazer"
                    className="text-black-600 text-lg"
                  >
                    Blazer
                  </a>
                </li>
              </ul>
            </div>

            