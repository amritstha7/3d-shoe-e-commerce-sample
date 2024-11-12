import { useState } from 'react'
import Navbar from './components/Navs/Navbar'
import ProductGrid from './components/ProductGrid'

import StarsCanvas from "./components/model/Stars"
import ShoeCanvas from "./components/model/Shoe"
import Footer from './components/Footer'
function App() {
  
const [bagItem,setIsBagItem] = useState([])
const [countItem,setCountItem] = useState(0)

const [favItem,setFavItem] = useState([])
const [favCount,setFavCount] = useState(0)

const [openMenuId, setOpenMenuId] = useState(null);


function toggleMenu(id) {
  if (openMenuId === id) {
    setOpenMenuId(null); // Close if already open
  } else {
    setOpenMenuId(id); // Open the clicked menu
  }
}


const addToBag = (newItems) =>{
  setCountItem((prevCount) =>prevCount+1)
  setIsBagItem((prevItems)=> [...prevItems, newItems])
}
  const removeFromBag= (itemIds) =>{
    setCountItem((prevCount) => prevCount-1)
    setIsBagItem((prevItems)=> prevItems.filter((items)=> items.id !== itemIds) )
  }

  const addToFav =(favItemId) =>{
    setFavCount((prevCount) => prevCount + 1)
    setFavItem((prevItem)=>[...prevItem,favItemId])
  }
  const removeFavItem = (items) =>{
    setFavCount((prevCount) => prevCount-1)
    setFavItem((prevFav) => prevFav.filter((fav)=> fav.id !== items.id))
    
  }
  return (
   <div>
     <Navbar 
     openMenuId={openMenuId}
     toggleMenu={toggleMenu}
     countItem={countItem} 
     favCount={favCount}
     bagItem={bagItem} 
     favItem={favItem}
     removeFavItem={removeFavItem}
     removeFromBag={removeFromBag} />
     
    <StarsCanvas/>
     <ShoeCanvas/>
     
     <ProductGrid 
     addToBag={addToBag}
     addToFav={addToFav}
      />
      <Footer/>

   </div>
  )
}

export default App

