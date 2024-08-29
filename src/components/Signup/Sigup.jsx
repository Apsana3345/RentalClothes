import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

export default function Signup() {
  const [name, setName] = useState();

  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const response = axios.post("http://localhost:3000/user/signup", {
        name,
        email,
        password,
      });

      console.log(response);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-red-100 min-h-screen  flex justify-center items-center dark:bg-gray-950   dark:text-white ">
      <div className="bg-gray-100  py-6  rounded p-10 dark:bg-gray-800   dark:text-white grid gap-4">
        <h2 className="text-[30px] text-center md:text-[52px]">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="mb-3">
            <label htmlFor="name ">
              <span className="text-[16px] md:text-[22px]">Full Name :</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Name"
              autoComplete="off"
              name="name"
              className="p-2 rounded-sm md:w-[20rem] w-[15rem] text-black outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <span className="text-[16px] md:text-[22px]">
                Email Address :
              </span>
            </label>
            <br />
            <input
              type="email"
              placeholder="Enter  Email"
              autoComplete="off"
              name="email"
              className="p-2 rounded-sm  md:w-[20rem] w-[15rem] text-black outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <span className="text-[16px] md:text-[22px] ">Password :</span>
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="p-2 rounded-sm  md:w-[20rem] w-[15rem] text-black outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="border-none p-2 md:w-[20rem] w-[15rem] rounded-sm bg-custom-orange/70  dark:bg-custom-orange/40 "
          >
            Register
          </button>
        </form>

        <div className="flex gap-4 items-center justify-center">
          <p>Already Have an account?</p>

          <Link to="/login" className="text-custom-orange">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
