import React from "react";
import { Heart, ImageUpIcon, X } from "lucide-react";

function InFav({ setIsFavOpen, favItem,removeFavItem }) {
  const handleClose = () => {
    setIsFavOpen(false);
  };
  return (
    <div className="inset-0 fixed bg-black bg-opacity-50 flex justify-end">
      <div className=" w-[400px] bg-white h-full overflow-auto p-4">
        <div className="mt-3 flex justify-between">
          <h2 className=" font-bold text-xl">Favorite Items</h2>
          <X onClick={handleClose} className="text-red-500" />
        </div>
        <div>
          {favItem.length === 0 ? (
            <p className="mt-3 font-bold">No Favorite Items</p>
          ) : (
            favItem.map((item) => (
              <div className="m-3 flex justify-between" key={item.id}>
                <p>
                  {" "}
                  {item.title} - ${item.price}{" "}
                </p>
                <button>
                <Heart onClick={()=>removeFavItem(item)}/>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default InFav;
