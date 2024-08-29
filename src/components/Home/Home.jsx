import React from 'react'
import Navbar from '../Navbar';
import Hero from '../Hero/Hero';
import Product from '../Products/Product';
import TopProducts from '../Top Products/TopProducts';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonials/Testimonial';
import Footer from '../Footer/Footer';
import Popup from '../Pop/Popup';

const Home = ({ handleOrderPopUp }) => {
  return (
    <div>
      <Hero handleOrderPopUp={handleOrderPopUp} />
      <Product />
      <TopProducts handleOrderPopUp={handleOrderPopUp} />
      <Banner />
      <Subscribe />
      <Product />
      <Testimonial />
      {/* <Footer /> */}
      {/* <Popup orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp} /> */}
    </div>
  );
};

export default Home