import React from "react";
import { Parallax } from "react-parallax";

export default function MenuBanner() {
  return (
    <Parallax
      bgImage="./menu-banner.jpg"
      bgImageAlt="About Us Banner Banner"
      strength={300}
    >
      <div className="hero h-[250px] md:h-[400px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl text-white barlow-font uppercase font-bold">
              Coffees, Drinks & Foods
            </h1>
            <p className="mb-5 coffee-text italic source-serif-font">
              Café Robusta Coffee Shop & Internet Café / Coffees, Drinks & Food
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
