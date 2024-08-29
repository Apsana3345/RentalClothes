import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import Signup from "./components/Signup/Sigup";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login/Login";
import ProductPage from "./components/ProductPage/ProductPage";
import Footer from "./components/Footer/Footer";

const App = () => {
     const [orderPopUp, setOrderPopUp] = useState(false);
     const handleOrderPopUp = () => {
       setOrderPopUp(!orderPopUp);
     };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1200, // Duration of animations in milliseconds
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh;
  }, []);
  return (
    <main className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopUp={handleOrderPopUp} />
      <Routes>
        <Route
          path="/"
          element={<Home handleOrderPopUp={handleOrderPopUp} />}
        />
        <Route
          path="/signup"
          element={<Signup/>}
        />
        <Route
          path="/login"
          element={<Login  />}
        />
        {/* <Route
          path="/products"
          element={<ProductPage  />}
        /> */}
        <Route
          path="/products/:category?"
          element={<ProductPage  />}
        />
        <Route
          path="/products/:category/:id"
          // element={<ProductPage  />}
        />
      </Routes>
      <Footer/>
    </main> 
  );
};

export default App;
