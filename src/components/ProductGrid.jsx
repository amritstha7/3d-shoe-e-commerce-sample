import React from "react";
import { productList } from "./productlist";
import { Heart } from "lucide-react";
function ProductGrid({ addToBag, addToFav }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <h3
          className="font-black text-black
    lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[80px]
     mt-1 text-center p-6 font-sans"
        >
          DON'T WASTE YOUR ENERGY
        </h3>
        <p>Run in Pegasus.</p>
        <p>Feel the responsive energy return of Air Zoom and ReactX foam.</p>
        <button
          className="bg-black text-white 
                px-4 py-2 rounded-full text-sm font-semibold
               hover:bg-gray-800 transition duration-300"
        >
          Shop
        </button>
      </div>
      <div className="mt-40 px-10">
        <div>
          <h1 className="font-black text-black
    lg:text-[35px] sm:text-[30px] xs:text-[30px] text-[25px] 
     mt-1  font-sans">Latest & Greatest</h1>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 ">
        {productList.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={item.img}
              alt="Product"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{item.title} </h3>
              <p className="text-gray-600 mb-4">{item.sex} </p>
              <div className="flex justify-between items-center">
                <span className="font-bold">${item.price} </span>
                <button
                  onClick={() => addToBag(item)}
                  className="bg-black text-white 
                px-4 py-2 rounded-full text-sm font-semibold
               hover:bg-gray-800 transition duration-300"
                >
                  Add to Bag
                </button>
                <button>
                  <Heart onClick={() => addToFav(item)} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="mt-40 px-10">
        <div>
          <h1 className="font-black text-black
    lg:text-[35px] sm:text-[30px] xs:text-[30px] text-[25px] 
     mt-1  font-sans">Shop out icons</h1>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 ">
        {productList.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={item.img}
              alt="Product"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{item.title} </h3>
              <p className="text-gray-600 mb-4">{item.sex} </p>
              <div className="flex justify-between items-center">
                <span className="font-bold">${item.price} </span>
                <button
                  onClick={() => addToBag(item)}
                  className="bg-black text-white 
                px-4 py-2 rounded-full text-sm font-semibold
               hover:bg-gray-800 transition duration-300"
                >
                  Add to Bag
                </button>
                <button>
                  <Heart onClick={() => addToFav(item)} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default ProductGrid;
