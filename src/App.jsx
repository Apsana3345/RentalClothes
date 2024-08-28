import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Product from './components/Products/Product'
import AOS from "aos";
import TopProducts from './components/Top Products/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonial from './components/Testimonials/Testimonial';
import Footer from './components/Footer/Footer';
import Popup from './components/Pop/Popup';


const App = () => {
  const[orderPopUp,setOrderPopUp]= React.useState(false);
  const handleOrderPopUp=()=>{
    setOrderPopUp(!orderPopUp);
  };
  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration: 1200, // Duration of animations in milliseconds
      easing:"ease-in-sine",
      delay:100,
      

    });
    AOS.refresh
  }, []);
  return (
    <div  className="bg-white dark:bg-gray-900 dark:text-white duration-200">
     
      <Navbar handleOrderPopUp={handleOrderPopUp}/>
      <Hero handleOrderPopUp={handleOrderPopUp}/>
      <Product/>
      <TopProducts handleOrderPopUp={handleOrderPopUp}/>
      <Banner/>
      <Subscribe/>
      <Product/>
      <Testimonial/>
      <Footer/>
      <Popup orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp} />
      
    </div>
  )
}

export default App
