import React from 'react'
import Banner from "../../assets/WomenImage/Banner1.jpg";
const BannerImg ={
    backgroundImage:`url(${Banner})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",

}
const Subscribe = () => {
  return (
    <div data-aos ="zoom-in" style={BannerImg}className=" mb-20 bg-gray-100 dark:bg-gray-800 text-black dark:bg-gray-800 dark:text-gray-800  " >
      <div className='container backsrop-blur-sm py-10'>
<div className='space-y-6 max max-w-xl mx-auto  '>
    <h1
    className='text-2xl text-center sm:text-left sm:text-4xl font-semibold   '>Get Notified About New Products</h1>
    <input data-aos="fade-up" type="text" placeholder='Enter your email'className="w-full p-3"/>
</div>
      </div>
    </div>
  )
}

export default Subscribe
