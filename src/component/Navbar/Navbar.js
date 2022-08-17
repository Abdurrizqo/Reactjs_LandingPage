import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFacebook, BsGoogle } from "react-icons/bs";

function Navbar() {
  const [isShowed, setIsShowed] = useState(true);
  return (
    <nav className="bg-white shadow-md h-16 px-5 md:px-10 flex items-center justify-between gap-10">
      <div>
        <Logo />
      </div>

      <div className="md:hidden">
        <AiOutlineMenu
          className="text-2xl"
          onClick={() => {
            isShowed ? setIsShowed(false) : setIsShowed(true);
          }}
        />
      </div>

      <div
        className={`text-lg absolute bg-white w-full left-0 top-16 shadow-md text-center items-center z-50 ${
          isShowed ? "flex" : "hidden"
        } flex-col gap-2 md:flex-row md:static md:bg-transparent md:shadow-none md:justify-between`}
      >
        <div className="flex-col gap-5 flex md:flex-row">
          <div>Vectors</div>
          <div>Photos</div>
          <div>PSD</div>
          <div>Video</div>
        </div>

        <div className="flex items-center justify-center gap-5 my-5 text-3xl">
          <BsFacebook color="#4267B2" />
          <BsGoogle color="#d50f25" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
