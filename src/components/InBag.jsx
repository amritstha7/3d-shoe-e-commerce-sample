import React from "react";
import { ImageUpIcon, X, Minus, Plus } from "lucide-react";


function InBag({ setIsBagOpen, bagItem,removeFromBag}) {
  const handleClose = () => {
    setIsBagOpen(false);
  };
  return (
    <div className="inset-0 fixed bg-black bg-opacity-50 flex justify-end  ">
      <div className="bg-white  w-[400px] h-full overflow-auto p-4  ">
        <div className="mt-3 flex justify-between">
          <h2 className="  font-bold text-xl">Shopping Bag</h2>
          <X className="text-red-500" onClick={handleClose} />
        </div>
        {}
        {bagItem.length === 0 ? (
          <p>your bag is empty </p>
        ) : (
          bagItem.map((item) => (
            <div
              key={item.id}
              className="mb-2 flex justify-between items-center"
            >
              <div>
                <p>
                  {item.title} - ${item.price}
                </p>
                <div className="flex items-center mt-1">
                  <button className="text-gray-500">
                    <Minus size={16} />
                  </button>
                  <span>0</span>
                  <button className="text-gray-500">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <button className="text-red-500">
                <X onClick={()=>{removeFromBag(item.id)}}  />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default InBag;
