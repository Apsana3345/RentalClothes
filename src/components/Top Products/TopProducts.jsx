
import React from "react";
import Image1 from "../../assets/WomenImage/GreenLehenga.webp";
import Image2 from "../../assets/WomenImage/PinkLehenga.webp";
import Image3 from "../../assets/WomenImage/PinkKurta.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Image1,
    title: "Party Wear",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt sit exercitationem quis eaque unde commodi praesentium eius odit ",
  },
  {
    id: 2,
    img: Image2,
    title: "Organzo Sari",
    description:
      "This is the best quality product made up of fabric silkLorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt sit exercitationem quis eaque unde commodi praesentium eius odit ",
  },
  {
    id: 3,
    img: Image3,
    title: "Printed Kurta",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt sit exercitationem quis eaque unde commodi praesentium eius odit ",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-custom-orange">
            Top Rated Clothes
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ProductsData.map((data) => (
            <div
            data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800  dark:text-white relative shadow-xl duration-300 group max-w-[300px] mx-auto"
            >
              {/* Image Section */}
              <div className="h-[200px] overflow-hidden flex items-center justify-center ">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-full max-h-full object-cover transform group-hover:scale-105 duration-300 drop-shadow-md"
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
                <p className="text-gray-500 group-hover:text-black duration:300  dark:text-white text-sm line-clamp-2">{data.description}</p>
                <button
            className="bg-gradient-to-r from-custom-orange to-secondary hover:scale-105  duration-300 rounded-full mt-4 group-hover:bg-white group-hover:text-black text-black py-1 px-4  dark:text-white flex items-center gap-3   " 
          >
            
              Order Now
            
          
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
