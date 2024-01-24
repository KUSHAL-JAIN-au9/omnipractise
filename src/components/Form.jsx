import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Btn from "./Button";
import SignIn from "../pages/SignIn";

export default function Form({ isSignIn }) {
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be 3 letters long"),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),
    confirmPwd: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        {!isSignIn && (
          <div className="form-group w-80 h-20 ">
            {/* <label>Password</label> */}
            <input
              name="name"
              type="text"
              placeholder="Name"
              {...register("name")}
              className={`form-control input-primary  ${
                errors.password ? "is-invalid " : ""
              }`}
            />
            <div className="invalid-feedback  text-red-700">
              {errors.name?.message}
            </div>
          </div>
        )}

        <div className="form-group w-80 h-20  ">
          {/* <label>Password</label> */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            {...register("email")}
            className={`form-control input-primary  ${
              errors.email ? "is-invalid " : ""
            }`}
          />
          <div className="invalid-feedback  text-red-700">
            {errors.email?.message}
          </div>
        </div>

        <div className="form-group w-80 h-20 ">
          {/* <label>Password</label> */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            {...register("password")}
            className={`form-control input-primary  ${
              errors.password ? "is-invalid " : ""
            }`}
          />
          <div className="invalid-feedback  text-red-700">
            {errors.password?.message}
          </div>
        </div>

        {!isSignIn && (
          <div className="form-group w-80 h-16">
            {/* <label>Confirm Password</label> */}
            <input
              name="confirmPwd"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPwd")}
              className={`form-control input-primary  ${
                errors.confirmPwd ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback text-red-700">
              {errors.confirmPwd?.message}
            </div>
          </div>
        )}
        <div className="w-11/12 mt-3 grid place-items-center ">
          {/* <button type="submit" className="btn btn-primary">
            Submit
          </button> */}
          <Btn label={isSignIn ? "Login" : "Sign Up"} />
        </div>
      </form>
    </div>
  );
}
