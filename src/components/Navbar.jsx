import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

// import Logo from "../assets/LogoTradition.png";
import Logo from "../assets/Website/LogoTradition1.png";

import DarkMode from "../components/DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "#services",
  },
  {
    id: 3,
    name: "Kurthis",
    link: "/#",
  },
  {
    id: 4,
    name: "Sari",
    link: "/#",
  },
  {
    id: 5,
    name: "GangraCholi",
    link: "/#",
  },
  {
    id: 6,
    name: "WoolenKurti",
    link: "/#",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "#services",
  },
  {
    id: 3,
    name: "Kurthis",
    link: "/#",
  },
  {
    id: 4,
    name: "Sari",
    link: "/#",
  },

  {
    id: 5,
    name: "WoolenKurti",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopUp }) => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropdowm = (e) => {
    setDropDown(!dropDown);
    e.stopPropagation();
  };
  console.log(dropDown);
  return (
    <nav className=" fixed  w-full  flex items-center justify-center flex-col top-0 shadow-md bg-white  dark:bg-gray-800   dark:text-white duration-300  z-40 ">
      {/* upper Navbar */}
      <div className=" px-6  bg-custom-orange/70 py-4 dark:bg-custom-orange/40  sm:py-4 w-full flex items-center justify-center">
        <div className="   flex justify-between items-center max-w-[1440px] w-full">
          <div>
            <Link
              to="/"
              className=" flex items-center font:bold-text-2xl  text-white md:text-2xl  gap-2  "
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-12 h-12   rounded-full bg-white "
              />
              <h1 className="hidden md:block"> TraditionalAttire</h1>
            </Link>
          </div>
          {/* search bar and Logo button */}
          <div className="flex justify-between items-center gap-4">
            <div className=" relative   md:w-auto block">
              <input
                type="text"
                name=""
                id=""
                className="border-none relative px-2  rounded-full sm:h-10 w-[8rem] lg:w-[30rem] md:w-[15rem] max-w-3xl sm:max-w-md lg:max-w-2xl min-w-[50px] outline-none"
                placeholder="Search "
              />
              <IoMdSearch className="text-gray-500  hover:text-custom-orange/70 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/* order button */}
          <div className="flex gap-4 items-center justify-center  ">
            <button
              onClick={handleOrderPopUp}
              className="bg-gradient-to-r from-custom-orange to-secondary   text-white py-2 px-4 rounded-full flex items-center  "
            >
              <FaShoppingCart className="text-xl h-3 w-3 sm:h-auto sm:w-auto text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* signup */}

            {/* Darkmode switch */}
            <div className="hidden md:block">
              <DarkMode />
            </div>
            <div>
              <Link
                to="/signup"
                className="bg-gradient-to-r text-[12px]  md:text-[16px] from-custom-orange to-secondary hover:scale-105 duration-200 text-white py-1 sm:py-2 px-4 rounded-full"
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div
        data-aos="zoom-in"
        className=" justify-evenly py-4 px-6 hidden md:flex"
      >
        <ul className="sm:flex hidden item-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4
                hover:text-custom-orange duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* // simple dropdown and links */}
          <li
            className=" group relative cursor-pointer"
            onMouseOver={handleDropdowm}
          >
            <Link
              to="/"
              className="flex items-center gap-[2px]  hover:text-custom-orange"
            >
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:-rotate-180" />{" "}
            </Link>
            <div
              onMouseOver={() => setDropDown(true)}
              className="absolute  left-0  w-auto bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ul className="flex gap-4 flex-col">
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className={` ${
                        dropDown ? "inline-block" : "hidden"
                      } hover:text-white px-4 py-2 min-w-fit w-full  hover:bg-custom-orange/80 dark:hover:bg-gray-700`}
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
