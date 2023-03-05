import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cafe-robusta-logo-white.png";

export default function TopBanner() {
  return (
    <section
      className="min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/dQBfPYr/top-banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "0 0",
      }}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <img className="mx-auto mb-4 w-72" src={logo} alt="Logo" />
        <h1 className="mb-4 text-8xl font-extrabold tracking-tight leading-none text-white oswald-font uppercase">
          Live Your Best Coffee Life
        </h1>
        <p className="mb-8 text-3xl italic font-bold text-white source-serif-font">
          Small town experience with BIG City Appeal!
        </p>
        <div className="my-10">
          <Link
            to="/menu"
            className="poppins-font text-white font-bold uppercase ease-in-out duration-300 border border-white px-8 py-4 hover:bg-white hover:text-base-200"
          >
            See Our Menu
          </Link>
        </div>
        <div className="my-12">
          <a
            href="#"
            className="poppins-font tracking-wide text-white bg-primary font-bold uppercase ease-in-out duration-300 border border-primary px-8 py-4 hover:bg-base-300 hover:border-white"
          >
            See Our Daily Specials
          </a>
        </div>
      </div>
    </section>
  );
}
