import React from 'react'
import Image1 from "../../assets/hero/Image33.png";
import {GrSecure} from "react-icons/gr";
import {IoFastFood} from "react-icons/io5";
// import {GiFoodTruck} from "react-icons/gi";

const Banner = () => {
  return (
    <div className='min-h-[450px] flex justify-center items-center
    py-10  '>
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
            <div data-aos="zoom-in">
            {/* image section */}
            <img src={Image1} alt=""
            className='max-w-[250px] h-auto mx-auto shadow-custom-all-sides  object-cover'
            
            
            /></div>
            {/*text details section */}
            <div className='flex flex-col justify-center gap-2 mt-10 sm:pt-0'>


<h1 data-aos="fade-up"
className='text-2xl sm:text-2xl font-bold'> Festive Sales  </h1>
<p  data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-5'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem maxime maiores ipsam dolor voluptatem magni .Lorem ipsum, dolor .</p>
<div className='flex flex-col gap-4'>
   <div className='flex  items-center gap-4'>
    <GrSecure  className="text-6xl h-12 shadow-sm p-3 rounded-full bg-violet-100 dark:bg-violet-400 "/>
    <p >Quality Products</p>
    </div>
   <div data-aos="fade-up" className='flex  items-center mt-2 gap-4'>
    <IoFastFood className="text-6xl h-12 shadow-sm p-3 rounded-full bg-violet-100 dark:bg-orange-400 "/>
    <p >Fast Delivery</p>
   </div>
   <div data-aos="fade-up" className='flex  items-center mt-2 gap-4'>
    <IoFastFood className="text-6xl h-12 shadow-sm p-3 rounded-full bg-violet-100 dark:bg-orange-400 "/>
    <p >Easy Payment method</p>
   </div>
   {/* <div data-aos="fade-up" className='flex  items-center mt-2 gap-4'>
    <GiFoodTruck className="text-6xl h-12 shadow-sm p-3 rounded-full bg-violet-100 dark:bg-orange-400 "/>
    <p >Get Offers</p>
   </div> */}
</div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Banner
