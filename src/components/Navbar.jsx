import React from "react";
import Logo from "..//assets/LogoTradition.png";
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white ">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-3 sm:py:2">
        <div className=" container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="font:bold-text-2xl  sm:text-3xl flex gap-2">
              <img
                src={Logo}
                alt="Logo"
                className="w-10 h-10  object-contain"
               
              />
              TradtitonalAttire
            </a>
          </div>
          {/* search bar and Logo button */}
          <div>
            <div className="group ">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group:hover:w-[300px]
                transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none  focus:border-spacing-1
                focus:border-black"
              />
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
