import React from "react";
import { IoMdSearch } from "react-icons/io";

import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

// import Logo from "../assets/LogoTradition.png";
import Logo from '../assets/Website/LogoTradition1.png';

import DarkMode from "../components/DarkMode";
import Login from "../components/Login/Login";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/Services",
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
    link: "/Services",
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

const Navbar = ({handleOrderPopUp}) => {
  return (
    <div className="shadow-md bg-white  dark:bg-gray-800   dark:text-white duration-300 relative z-40">
      {/* upper Navbar */}
      <div className=" bg-custom-orange/70 py-2 dark:bg-custom-orange/40  sm:py-2">
        <div className=" container  flex justify-between items-center">
          <div>
            <a
              href="#"
              className=" font:bold-text-2xl  text-white sm:text-2xl flex gap-2  "
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-12 h-12   rounded-full bg-white "
              />
              TraditionalAttire
            </a>
          </div>
          {/* search bar and Logo button */}
          <div className="flex justify-between items-center gap-4">
            <div className=" relative group hidden sm:block ">
              <input
                type="text"
                placeholder="Search  "
                className="w-[200px] sm:w-[200px] hover:w-[250px]
                transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none  focus:border-1 
                focus:border-black text-black
                dark:border-gray-500 dark:text-white  "
              />
              <IoMdSearch className="text-gray-500  hover:text-custom-orange/70 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/* order button */}
         <button
             onClick={ handleOrderPopUp}
            className="bg-gradient-to-r from-custom-orange to-secondary transition-all  duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3  "
          >
            <span
              className="hover:block  hover:w-[80px] hidden
               transition-all rounded-full duration-200"
            >
              Order
            </span>
            <FaShoppingCart className="text-xl  text-white drop-shadow-sm cursor-pointer" />
          </button>
{/* signup */}



          {/* Darkmode switch */}
          <div>
            <DarkMode />
          </div>
          <div>
          
                <button className="w-[10px]"onClick={Login}>
                  <a href="/">SignUp</a></button>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden item-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4
                hover:text-custom-orange duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* // simple dropdown and links */}
          <li className=" group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px]  hover:text-custom-orange">
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:-rotate-180" />{" "}
            </a>
            <div className="absolute left-0  w-48 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full px-4 py-2 hover:bg-custom-orange/80 dark:hover:bg-gray-700"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
