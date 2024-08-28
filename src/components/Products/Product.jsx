import React from "react";
import Image1 from "..//..//assets/WomenImage/Magar.jpg";
import Image2 from "..//..//assets/WomenImage/PinkLehenga.webp";
import Image3 from "..//..//assets/WomenImage/PinkKurta.jpg";
import Image4 from "../../assets/hero/kids-gunyo-cholo.webp";
import Image5 from "..//..//assets/WomenImage/MDress.jpg";
import { FaStar } from "react-icons/fa";
import "aos/dist/aos.css";
const ProductData = [
  {
    id: 1,
    img: Image1,
    title: "Magar Dress",
    rating: 5.0,
    color: "Dark Green",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Image2,
    title: "Pink Sari",
    rating: 4.5,
    color: "Pink",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Image3,
    title: "Summer Pink Kurta",
    rating: 4,
    color: "Nude Pink",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Image4,
    title: "Gunyo-Cholo",
    rating: 5.0,
    color: "Dark Green",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Image5,
    title: "Ghangra Set",
    rating: 4.6,
    color: "Pink",
    aosDelay: "200",
  },
];
const Product = () => {
  return (
    <div className="mt-14 mb-12 ">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-custom-orange">
            Top Selling Products
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p className="text-xs  text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            incidunt sit exercitationem quis eaque unde commodi praesentium eius
            odit cumque neque doloribus, saepe hic. Totam placeat nam mollitia
            odio quibusdam.
          </p>
        </div>
        {/* body section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 "
          >
            {/* Card section */}
            {ProductData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-900">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
<div>
  {/* view all button */}
  <div className="flex justify-center">
    <button className="text-center mt-10 cursor-pointer bg-gradient-to-r from-custom-orange to-secondary  text-black py-1 px-5 rounded-md">
      View All Button
    </button>
  </div>
</div>
    </div>
  );
};

export default Product;
