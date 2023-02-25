import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cafe-robusta-logo.png";

export default function SignUp() {
  return (
    <section
      className="min-h-screeen"
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
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">
              Sign Up
            </h5>
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-primary hover:bg-base-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Sign In
            </button>
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
  );
}
