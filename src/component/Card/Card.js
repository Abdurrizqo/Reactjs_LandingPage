import React from "react";
import { BsDownload } from "react-icons/bs";

function Card({ pictureData }) {
  // console.log(pictureData)
  return (
    <div className="bg-white w-full sm:w-[400px] lg:w-[90%] mx-auto h-[26rem] p-3 rounded-md shadow relative my-5">
      <div className="rounded-full absolute font-bold bg-white text-center py-1 w-24 right-4 top-4">
        {pictureData.isFree ? (
          <h5 style={{ color: "#3481ef" }}>Free</h5>
        ) : (
          <h5 style={{ color: "#ff4e00" }}>Premium</h5>
        )}
      </div>
      <div className="w-[100%] h-[70%]">
        <img
          src={pictureData.image}
          alt=".."
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bodyCard">
        <h1 className="text-4xl text-center mt-2 my-3 font-thin text-gray-400">
          {pictureData.title}
        </h1>
        <button className="block mx-auto text-2xl font-semibold border rounded-md border-black text-center px-3 py-2 hover:bg-black hover:text-white">
          <div className="flex items-center gap-3 ">
            <span className="download">Download</span> <BsDownload />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Card;
