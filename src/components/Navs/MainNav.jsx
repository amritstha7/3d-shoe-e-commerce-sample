import jordan from "../assets/jordan.png";
import nike from "../assets/nike.png";

import { sNavLinks } from "../helper";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";

import React from "react";
import InBag from "../Inbag";
import InFav from "../InFav";
import { c } from "maath/dist/index-0332b2ed.esm";
import { n } from "maath/dist/misc-19a3ec46.esm";

function MainNav({
  openMenuId,
  toggleMenu,
  countItem,
  favCount,
  bagItem,
  removeFromBag,
  favItem,
  removeFavItem,
}) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isFavOpen, setIsFavOpen] = useState(false);

  return (
    <div
      className={`h-[55px] flex justify-between items-center px-4 sm:px-10 text-[16px] relative `}
    >
      <img className="w-[60px] h-[24px]" src={nike} alt="Nike logo" />
      <ul className="hidden sm:flex gap-4">
        {sNavLinks.map((nlink) => (
          <li
            key={nlink.id}
            className="group relative"
            onMouseOver={() => setHoveredItem(nlink.id)}
            onMouseOut={() => setHoveredItem(null)}
          >
            <a
              href={`#${nlink.id}`}
              className="text-[17px] border-b-2 border-transparent hover:border-black"
            >
              {nlink.title}
            </a>
             {/* ////////// hoveer items/// */}
           <div className="mt-2">
           {hoveredItem === nlink.id && nlink.submenu && (
              <div className="">
                <ul 
                  className="  px-10 flex flex-row justify-center
                   items-top fixed left-0 right-0 h-[330px] w-screen
                 bg-white  border-gray-200 shadow-lg z-40"
                  onMouseOver={() => setHoveredItem(nlink.id)}
                  onMouseOut={() => setHoveredItem(null)}
                >
                  {nlink.submenu.map((snlink) => (
                    <li
                      key={snlink.id}
                      className="p-5 text-md w-full md:w-[240px] text-[15px] "
                    >
                      <a href={`#${snlink.id}`}>{snlink.title}</a>
                      <div className="mt-4">
                      {snlink.miniMenu.map((mm) => (
                        <ul className="">
                          <li className="text-[13px]  mt-3 text-gray-500 hover:text-black"
                          key={mm.id}>
                            <a href={`#${mm.id}`}> {mm.title} </a>
                          </li>
                        </ul>
                      ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
           </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6 z-20">
        <form className="w-full max-w-[160px] relative flex-1  ">
          <div className="relative hidden md:flex ">
            <input
              onClick={() => setShowSearch(!showSearch)}
              type="search"
              placeholder="Search"
              className="  w-full h-9 p-4 pr-12 rounded-full bg-gray-100 text-right hover:bg-gray-300   "
            />
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="absolute left top-1/2 -translate-y-1/2 bg-transparent border-none"
            >
              <IoIosSearch className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />
            </button>
          </div>
        </form>
        {showSearch && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
            <div
              className=" top-0 bg-white z-50 flex flex-col "
              style={{ height: "40vh" }}
            >
              <div className="w-full mx-auto">
                {/* //importatn// */}

                <div className="px-3 sm:px-9 pt-2 sm:pt-4  grid grid-cols-[1fr,4fr,1fr] ">
                  {/* First Column: Logo */}
                  <div className="hidden sm:flex flex  justify-start ">
                    <img
                      className="w-[60px] h-[24px]"
                      src={nike}
                      alt="Nike logo"
                    />
                  </div>

                  {/* Second Column: Search Bar */}

                  <div className={`flex justify-center `}>
                    <form className="relative flex items-center flex-1 max-w-[1500px] w-full">
                      <input
                        type="search"
                        placeholder="Search Nike and Jordan products"
                        className="w-full h-10 rounded-full bg-gray-100 text-right focus:bg-gray-300"
                      />
                      <button
                        onClick={() => setShowSearch(false)}
                        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-transparent border-none"
                      >
                        <IoIosSearch className="text-4xl cursor-pointer p-1 rounded-full bg-gray-100 hover:bg-gray-400" />
                      </button>
                    </form>
                  </div>

                  {/* Third Column: Cancel Button */}
                  <div className="flex justify-end ">
                    <button
                      onClick={() => setShowSearch(false)}
                      className="text-lg text-black-500 ml-1 sm:ml-4"
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                <div className=" relative h-[25vh]  mt-4 ml-4 sm:ml-10 flex flex-col items-center justify-center grid grid-cols-1 sm:grid-cols-6 gap-4">
                  <div></div>
                  <ul className="mt-2 ">
                    {" "}
                    {/* grid */}
                    <p className="text-gray-500 text-[14px] ">
                      Popular Search Terms
                    </p>
                    <li className="py-2  hover:text-gray-500">
                      <a
                        href="https://www.nike.com/au/w/air-force-1-shoes-5sj3yzy7ok?vst=Air%20Force%201"
                        className="text-black-600 text-lg"
                      >
                        Air Force 1
                      </a>
                    </li>
                    <li className="py-2  hover:text-gray-500">
                      <a
                        href="https://www.nike.com/au/w/jordan-37eef?vst=Jordan"
                        className="text-black-600 text-lg"
                      >
                        Jordan
                      </a>
                    </li >
                    <li className="py-2  hover:text-gray-500">
                      <a
                        href="https://www.nike.com/au/w/air-max-shoes-a6d8hzy7ok?vst=Air%20Max"
                        className="text-black-600 text-lg"
                      >
                        Air Max
                      </a>
                    </li>
                    <li className="py-2  hover:text-gray-500">
                      <a
                        href="https://www.nike.com/au/w/blazer-shoes-9gw3azy7ok?vst=Blazer"
                        className="text-black-600 text-lg"
                      >
                        Blazer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-2 items-center justify-center">
          <div className="flex gap-1 lg:hidden block">
            <button onClick={() => setShowSearch(!showSearch)}>
              <IoIosSearch className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />
            </button>
            <GoPerson className="text-4xl cursor-pointer p-1 rounded-full hover:bg-gray-300 hover:border hover:border-gray-500" />
          </div>

          <div className=" relative hidden md:flex z-40">
            <MdFavoriteBorder
              onClick={() => setIsFavOpen(!isFavOpen)}
              className=" text-4xl 
          cursor-pointer p-1 rounded-full hover:bg-gray-300 
          hover:border hover:border-gray-500"
            />
            {favCount > 0 && (
              <span className=" absolute left-6 bg-red-500
               text-white rounded-full w-5 h-5 flex items-center justify-center text-xs ">
                {favCount}
              </span>
            )}

            {isFavOpen && (
              <InFav
                setIsFavOpen={setIsFavOpen}
                favItem={favItem}
                removeFavItem={removeFavItem}
              />
            )}
          </div>

          <div className=" relative flex z-40">
            <CiShoppingCart
              onClick={() => setIsBagOpen(!isBagOpen)}
              className="text-4xl cursor-pointer p-1 rounded-full
            hover:bg-gray-300 hover:border hover:border-gray-500"
            />{" "}
            {countItem > 0 && (
              <span className=" absolute left-6 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {countItem}
              </span>
            )}
            {isBagOpen && (
              <InBag
                setIsBagOpen={setIsBagOpen}
                bagItem={bagItem}
                removeFromBag={removeFromBag}
              />
            )}
          </div>



        </div>
        

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <TfiAlignJustify
            className="w-6 h-6 cursor-pointer "
            onClick={() => setOpen(!open)}
          />
        </div>

        {open && (
          <div className="sm:hidden fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg z-40 rounded-[15px]">
            <div className="flex justify-end p-4">
              <IoClose
                className="w-6 h-6 cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>

            <ul className="flex flex-col p-4">
              {sNavLinks.map((nlink) => (
                <li
                  key={nlink.id}
                  className="py-2 border-b border-gray-200 text-2xl"
                  onClick={() => toggleMenu(nlink.id)}
                >
                  <a href={`#${nlink.id}`} className="hover:text-gray-500">
                    {nlink.title}
                  </a>
                  {/* Submenu rendering */}
                  {openMenuId === nlink.id && nlink.submenu && (
                    <ul className="ml-4 mt-2">
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

            <div className="flex my-5 p-4">
              <img className="w-6 h-6" src={jordan} alt="Jordan logo" />
              <span className="text-lg">Jordan</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainNav;
