import React from "react";
import { Parallax } from "react-parallax";

export default function MenuBanner() {
  return (
    <Parallax
      bgImage="./menu-banner.jpg"
      bgImageAlt="About Us Banner Banner"
      strength={300}
    >
      <div className="flex items-center justify-center h-[250px] bg-cover bg-no-repeat mb-8 md:h-[400px]">
        <div className="text-center max-w-full">
          <h1 className="text-4xl text-white barlow-font uppercase font-bold">
            Coffees, Drinks & Foods
          </h1>
          <p className="mb-5 coffee-text italic source-serif-font">
            Café Robusta Coffee Shop & Internet Café / Coffees, Drinks & Food
          </p>
        </div>
      </div>
    </Parallax>
  );
}
