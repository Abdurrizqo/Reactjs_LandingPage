import React from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { IoMdOptions } from "react-icons/io";

function Filter() {
  return (
    <div className="flex items-center justify-between md:text-lg lg:text-xl mb-5">
      <div className="flex gap-3 lg:gap-6">
        <h3>
          Latest
          <span className="bg-[#ff4e00] rounded-full w-1 lg:w-2 lg:h-2 h-1 absolute"></span>
        </h3>
        <h3>Popular</h3>
        <h3 className="text-[#ff4e00]">Premium</h3>
        <h3 className="text-[#3481ef]">Free</h3>
      </div>
      <div className="flex items-center gap-3 lg:gap-6">
        <IoMdOptions className="icons" />
        <BsFillBookmarkStarFill className="icons" />
      </div>
    </div>
  );
}

export default Filter;
