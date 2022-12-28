import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const { signup, updateUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignup = (data) => {
    console.log(data);
    signup(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
          photoURL: data.image,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((e) => console.log(e));
  };

  return (
    <div>
      {/* <h1 className="text-5xl text-center mt-10 font-bold">Register</h1> */}
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-xl text-center font-bold ">Register</h2>
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="text-red-600 font-semibold">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                {...register("image", {
                  required: "Image is required",
                })}
              />
              {errors.image && (
                <p className="text-red-600 font-semibold">
                  {errors.image?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
              />
              {errors.email && (
                <p className="text-red-600 font-semibold">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="password"
                {...register("password", {
                  required: "Password  is required",
                })}
              />
              {errors.password && (
                <p className="text-red-600 font-semibold">
                  {errors.password?.message}
                </p>
              )}
              <label className="label">
                <span className="label-text">Forget Password?</span>
              </label>
            </div>

            <input
              className="btn btn-accent w-full"
              value="Login"
              type="submit"
            />
            <div></div>
          </form>
          <p className="text-danger  ">{error}</p>
          <p>
            Already have an account?{" "}
            <Link className="text-blue-600 font-semibold" to="/">
              Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-success w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
