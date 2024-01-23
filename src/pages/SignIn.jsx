import { Button } from "flowbite-react";
import React from "react";
import Btn from "../components/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-full h-screen flex flex-row ">
      <div className="w-1/2 h-screen  gap-2 p-4 flex flex-col  ">
        <div className="h-24 flex flex-col justify-between ">
          <h1 className=" text-pink-500 font-bold text-2xl ">TweetX</h1>
          <Link
            to={"/signin"}
            class=" w-36 text-center text-black border-2 border-black  bg-white hover:bg-pink-600 focus:ring-4 hover:text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 hover:border-none dark:bg-blue-600 focus:outline-none "
          >
            Login
          </Link>
          <Btn />
        </div>
        <div className=" w-full flex-auto p-4 grid place-items-center ">
          <h1 className=" text-gray-700 font-bold text-2xl ">
            {" "}
            Create Account
          </h1>
        </div>
      </div>

      <div className="w-1/2 h-screen bg-red-50 text-black grid place-items-center">
        svg
      </div>
    </div>
  );
};

export default SignIn;
