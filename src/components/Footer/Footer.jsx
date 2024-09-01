


import React from 'react';
import footerLogo from "../../assets/Website/LogoTradition1.png";
import BannerImage from "../../assets/WomenImage/FootImage.jpg";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaMobileAlt, FaLocationArrow } from 'react-icons/fa';

//  styles for the footer container
const containerStyle = {
  position: 'relative',
  height: '100%',
  width: '100%',
};

//  styles for the background image
const backgroundImageStyle = {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${BannerImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  opacity:'0.5',
};

const FooterLinks = [
  { title: "Home", Link: "/#" },
  { title: "About", Link: "/#about" },
  { title: "Contact", Link: "/#contact" },
  { title: "Blog", Link: "/#blog" },
];

const Footer = () => {
  
    // Get the current year
    const currentYear = new Date().getFullYear();
  return (
    <div style={containerStyle} className="text-gray-800 dark:text-white mb-20">
     
      <div style={backgroundImageStyle}></div>
      <div className="relative z-10 container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company details */}
          
          <div className="py-8 px-4">
            <div className="flex items-center gap-3">
              <img src={footerLogo} alt='Footer Logo' className="max-w-[50px]" />
              <h1 className="sm:text-3xl text-xl font-bold ">
                TraditionalAttire
              </h1>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quos fuga ratione velit debitis et ea odit dolores pariatur error corporis eius rem ipsam, iure, possimus neque asperiores aliquam! Voluptate!
            </p>
          </div>
          {/* Footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:text-custom-orange dark:hover:text-custom-orange hover:translate-x-1 duration-300 text-gray-700 dark:text-white" key={link.title}>
                      {/* <a href={link.Link}>{link.title}</a> */}
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li className="cursor-pointer hover:text-custom-orange dark:hover:text-custom-orange hover:translate-x-1 duration-300 text-gray-700 dark:text-white" key={link.title}>
                    <a href={link.Link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="#">
                  <FaGithub className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Rupandehi, Nepal</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+977 9805524744</p>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center bg-black text-white p-4 font-bold ">
      <p>&copy; {currentYear} TraditionalAttire. All rights reserved.</p>
  </div>
    </div>
    
  );
};

export default Footer;
