import React, { useEffect } from "react";

import TopNav from "./TopNav";
import MainNav from "./MainNav";



function Navbar({openMenuId,countItem,bagItem,favItem, removeFromBag,favCount,removeFavItem,toggleMenu}) {
  
  return (
    <div className="w-full mx-auto font-sans max-w-screen">
      <TopNav/>
      <MainNav 
      openMenuId={openMenuId}
      toggleMenu={toggleMenu}
      countItem={countItem} 
      favCount={favCount}
      bagItem={bagItem}
      favItem={favItem}
       removeFromBag={removeFromBag}
       removeFavItem={removeFavItem} />

    </div>
  );
}

export default Navbar;
