import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/cafe-robusta-logo.png";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
import PageTitle from "../Shared/PageTitle";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:8000/api/v1/user/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <>
      <PageTitle title="Sign Up" />
      <section
        className="min-h-screen"
        style={{
          backgroundImage: `url("./signup-banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "0 0",
          boxShadow: "inset 0 0 100px black",
        }}
      >
        <div className="h-screen flex justify-center items-center">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <img className="mx-auto mb-4 w-28" src={logo} alt="Logo" />
            <form className="space-y-6" onSubmit={handleSubmit(handleSignUp)}>
              <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">
                Sign Up
              </h5>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is Required",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Enter Your Name"
                  required
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Enter Your Email"
                  required
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  required
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              <input
                className="w-full text-white bg-primary hover:bg-base-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                value="Sign Up"
                type="submit"
              />
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already registered?{" "}
                <Link to="/signin" className="text-primary hover:underline">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
