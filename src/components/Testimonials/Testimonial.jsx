import React from "react";
import Slider from "react-slick";
// import Photo3 from "../../assets/hero/Photo3.jpg";


const TestimonialData = [
  {
    id: 1,
    name: "Alex",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium ",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Bishal",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium ",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Manita",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium ",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Apsana",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium ",
    img:  "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Anita",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium ",
    img:  "https://picsum.photos/105/105",
  },
  {
    id: 6,
    name: "Alina",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium ",
    img:  "https://picsum.photos/106/106",
  },
];
const Testimonial = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "Linear",
    pauseOnHover: true,
    pauseOnFocuse: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-custom-orange">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonial
          </h1>
          <p className="text-xs  text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            incidunt sit exercitationem quis eaque unde commodi praesentium eius
            odit cumque neque doloribus, saepe hic. Totam placeat nam mollitia
            odio quibusdam.
          </p>
        </div>
        {/* Testimonial cards */}
        <div
        data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div  key={data.id} className="my-6">



              <div
                key={data.id}
                className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-500  bg-custom-orange/20  relative"
              >
                <div className="mb-4">
                  <img
                     src={data.img}
                     alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="flex flexx-col items-center gap-4">
                  <div className="space-y-3 ">

                    <p className="text-xs text-gray-600 dark:text-white/80">{data.text}</p>
<h1 className="text-xl font-bold text-black/80 dark:text-white/80">
  {data.name}
</h1>
                  </div>
                </div>
                <p className="text-9xl font-serif text-black/20  absolute top-0 right-0 dark:text-white/80" >

                </p>
              </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
