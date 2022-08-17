import React from "react";
import { BsSearch } from "react-icons/bs";

function Header({ sendFilter }) {
  return (
    <div className="px-5">
      <h1 className="text-3xl text-center mt-16 font-bold md:text-6xl">
        Popular Pro Stock Vectors
      </h1>
      <form className="relative w-full md:w-[600px] mx-auto">
        <p className="font-[600] text-gray-400 text-center mt-4 md:mt-8 mb-8 md:mb-12 text-base md:text-2xl mx-auto">
          High quality Vectors with worry-free licensing for personal and
          commercial use
        </p>

        <input
          className="w-full block mx-auto py-3 text-lg rounded shadow-md pl-3 pr-8 outline-none"
          type="text"
          placeholder="Search Vectors..."
          onChange={(e) => {
            sendFilter(e.target.value);
          }}
        />
        <BsSearch className="absolute right-4 bottom-4 text-lg" />
      </form>
    </div>
  );
}

export default Header;
