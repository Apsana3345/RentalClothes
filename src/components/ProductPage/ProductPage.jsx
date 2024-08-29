import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductFetch from "../../utils/ProductFetch";

const ProductPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ProductFetch();
        setData(result);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className=" min-h-screen flex justify-center items-center">
      <div className="max-w-[1440px]   py-52  px-6 w-full flex gap-4 flex-col">
        {/* <div className="flex  justify-center items-center"> */}

        <Link to="/" className="text-[48px] font-bold text-gray-500 w-fit">
          ←
        </Link>
        <h1 className="text-center font-bold text-3xl">Products List</h1>
        {/* </div> */}
        <div className="flex flex-wrap gap-4 justify-between ">
          {data.map((data) => (
            <div
              key={data.id}
              //   data-aos="fade-up"
              //   data-aos-delay={data.aosDelay}
              className=" border-2 p-6 justify-between items-center flex flex-col  mb-10"
            >
              <Link to={`/products/${data.id}`}>
                <img
                  src={data.imagelink}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.name}</h3>
                  <p className="text-sm text-gray-900">{data.color}</p>
                  <div className="flex items-center gap-1">
                    {/* <FaStar className="text-yellow-400" /> */} Price:
                    <span>{data.price}</span>
                  </div>
                </div>
              </Link>
              <button className="bg-gradient-to-r from-custom-orange to-secondary  text-[15px]  text-white py-2 px-2 rounded-md flex items-center  ">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
