import React from "react";
import Image1 from "../../assets/WomenImage/Wwear.png";
import Image2 from "../../assets/WomenImage/CWear.png";
import Image3 from "../../assets/WomenImage/DaWear.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Image1,
    title: "Wedding Wear",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt sit exercitationem quis eaque unde commodi praesentium eius odit ",
  },
  {
    id: 2,
    img: Image2,
    title: "Chettri Dress",
    description:
      "This is the best quality product made up of fabric silkLorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt sit exercitationem quis eaque unde commodi praesentium eius odit ",
  },
  {
    id: 3,
    img: Image3,
    title: "Men's Daura Suruwal",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt sit exercitationem quis eaque unde commodi praesentium eius odit ",
  },
];

const TopProducts = ({handleOrderPopUp}) => {
  return (
    <div >
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-left mb-40 mt-10 lg:px-8 lg:py-12">
          <p data-aos="fade-up" className="text-sm text-custom-orange">
            Top Rated Clothes
          </p>
          <h1 data-aos="fade-up" className="text-2xl font-bold">
            Best Products
          </h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            incidunt sit exercitationem quis eaque unde commodi praesentium eius
            odit cumque neque doloribus, saepe hic. Totam placeat nam mollitia
            odio quibusdam.
          </p>
        </div>
        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  sm:gap-40 md:gap:5 place-items-center  gap-40">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className=" hover:transition-all rounded-2xl bg-white dark:bg-gray-500 hover:bg-black/80 dark:hover:dark:bg-custom-orange/40 hover:text-white relative shadow-xl duration-200 group max-w-[300px] "
            >
              {/* Image Section */}
              <div className=" h-[100px]  flex items-center justify-center ">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto  transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md "
                />
              </div>
              {/* Details Section */}
              <div className="p-4 text-center">
                {/* Star Rating */}
                <div className="w-full flex items-center justify-center gap-1 mb-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold mb-2">{data.title}</h1>
                <p
                  className="text-gray-400 
                group-hover:text-white 
                group-hover:dark:text-white duration:300  dark:hover:text-white text-sm line-clamp-2"
                >
                  {data.description}
                </p>
                <button
                  className="bg-gradient-to-r from-custom-orange to-secondary hover:scale-105  duration-300 rounded-full mt-4 text-white group-hover:dark:text-white  py-1 px-4  dark:text-white flex items-center gap-3   "
                  onClick={handleOrderPopUp}
                >
                 Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
