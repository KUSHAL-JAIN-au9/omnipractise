import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Btn from "../components/Button";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Form from "../components/Form";

const SignIn = () => {
  const [name, setName] = useState("");
  const [param, setParam] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  // useEffect(() => {
  //   const paramName = pathname.replace("/", "");
  //   setParam(paramName);
  // }, []);

  // console.log("params", pathname.replace("/", ""), param);

  // useEffect(() => {}, [param, pathname]);

  return (
    <div className="w-full h-screen flex flex-row bg-amber-400  ">
      <div className="w-1/2 h-screen  gap-2 p-4 flex flex-col justify-between ">
        <div className="h-24 ml-3 flex flex-col justify-between  bg-orange-400">
          <h1 className=" text-pink-500 font-bold text-2xl ">TweetX</h1>
          <Link
            // to={param === "Sign in" ? "/Register" : "/signin"}
            onClick={() => setIsSignIn(!isSignIn)}
            class=" w-36 text-center text-black border-2 border-black  bg-white hover:bg-pink-600 focus:ring-4 hover:text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 hover:border-none dark:bg-blue-600 focus:outline-none "
          >
            {isSignIn ? "Register" : "Sign In"}
          </Link>
        </div>
        <div className=" w-full p-4 ">
          <h1 className=" text-gray-700 font-bold text-2xl ">
            {isSignIn ? "Log In" : "Create Account"}
          </h1>
          {/* 
          <Input
            label="Name"
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={handleChangeName}
          /> */}

          <Form isSignIn={isSignIn} />
        </div>
      </div>

      <div className="w-1/2 h-screen bg-red-50 text-black grid place-items-center">
        svg
      </div>
    </div>
  );
};

export default SignIn;
