import React from "react";
import { Parallax } from "react-parallax";
import logo from "../../assets/images/cafe-robusta-logo-white.png";

export default function MiddleBanner() {
  return (
    <div className="mt-10">
      <Parallax
        bgImage="./middleBanner.jpg"
        bgImageAlt="Middle Logo Banner"
        strength={300}
      >
        <div className="hero h-[500px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="flex justify-center items-center">
                <img src={logo} alt="White" />
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
