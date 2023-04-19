import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import PageTitle from "../components/Shared/PageTitle";
import { AuthContext } from "../contexts/AuthProvider";
import useToken from "../hooks/useToken";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, loading } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  // if (loading) return <Loading />;

  const handleSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.contactNo);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        toast.error(error);
        setSignUPError(error.message);
      });
  };

  const saveUser = (name, email, contactNo) => {
    const user = { name, email, contactNo };
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
    <React.Fragment>
      <PageTitle title="Sign Up" />
      <Header />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("./signup-banner.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center text-white lg:text-left">
            <h1 className="text-5xl barlow-font uppercase font-bold">
              Sign Up now!
            </h1>
            <p className="py-6 text-lg">
              By signing up, you'll be able to enjoy a world of perks and
              benefits. From exclusive offers and discounts, to personalized
              recommendations and loyalty rewards, being a Café Robusta member
              means you'll always get the best experience. Plus, you'll be the
              first to know about new menu items, events, and promotions. Don't
              miss out, sign up now!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(handleSignUp)}>
                {/* Name Input Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Name Input Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Contact No</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Contact No."
                    className="input input-bordered"
                    {...register("contactNo", {
                      required: {
                        value: true,
                        message: "Contact No. is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.contactNo?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.contactNo.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Email Input Field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your Password"
                    className="input input-bordered"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
              <p className="text-center">
                <small>
                  Already have an account?{" "}
                  <Link className="text-primary" to="/signin">
                    Sign In
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
