import React from 'react'
import Navbar from './components/Navbar'
import HeroS from './components/Hero/HeroS'
import Product from './components/Products/Product'
import AOS from "aos";
import TopProducts from './components/Top Products/TopProducts';


const App = () => {
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
    <div >
     
      <Navbar/>
      <HeroS/>
      <Product/>
      <TopProducts/>
    </div>
  )
}

export default App
