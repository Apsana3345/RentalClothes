import React from "react";
import Image1 from "../../assets/hero/CulDress.png";
import Image3 from "../../assets/hero/Hero122Tradi.png";
import Image2 from "../../assets/hero/Blehenga.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";



const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Women's wear",
    description: "This is the best quality product made up of fabric silk",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 30% off on Men's Wear",
    description: "This is the best quality product made up of fabric silk",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Kid's wear",
    description: "This is the best quality product made up of fibric silk",
  },
];
const Hero = ({handleOrderPopUp}) => {
  
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocuse: true,
  };
  

  return (
    <div className="relative pt-20 overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background -pattern */}

      <div
        className="h-[700px] w-[600px] bg-custom-orange/70
      dark:bg-custom-orange/40  absolute -top-1/2  right-0 rounded-3xl rotate-45 -z-9"
      ></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p className="text-sm">{data.description}</p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-custom-orange to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full" onClick={handleOrderPopUp}>
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[400px] h-[600px] sm:h-[600px] sm:gap-4 sm:w-[200px] sm:scale-125 lg:scale-120 object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
