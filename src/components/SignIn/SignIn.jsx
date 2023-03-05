import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cafe-robusta-logo.png";
import PageTitle from "../Shared/PageTitle";

export default function SignIn() {
  return (
    <>
      <PageTitle title="Sign In" />
      <section
        className="min-h-screeen"
        style={{
          backgroundImage: `url("./signin-banner.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "0 0",
          boxShadow: "inset 0 0 100px black",
        }}
      >
        <div className="h-screen flex justify-center items-center">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <img className="mx-auto mb-4 w-28" src={logo} alt="Logo" />
            <form className="space-y-6" action="#">
              <h5 className="text-xl font-medium text-center text-gray-900">
                Sign In
              </h5>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
              <div className="flex items-start">
                <a
                  href="#"
                  className="ml-auto text-sm text-primary hover:underline"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-base-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign In
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
