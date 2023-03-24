import React from "react";
import { Parallax } from "react-parallax";
import logo from "../../assets/images/cafe-robusta-logo-white.png";

export default function MiddleBanner() {
  return (
    <div className="mt-10">
      <div>
        <Parallax
          bgImage="./middleBanner.jpg"
          bgImageAlt="Testimonial Banner"
          strength={300}
        >
          <div className="">
            <div className="flex justify-center items-center h-[500px] bg-cover bg-no-repeat mb-8">
              <img src={logo} alt="White" />
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}
