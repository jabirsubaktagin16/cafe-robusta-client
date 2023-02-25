import React from "react";
import { Parallax } from "react-parallax";

export default function Booking() {
  return (
    <>
      <Parallax
        bgImage="./reservation.jpg"
        bgImageAlt="Reservation Banner"
        strength={300}
      >
        <div className="flex items-center justify-center h-[250px] bg-cover bg-no-repeat mb-8 md:h-[400px]">
          <div className="text-center">
            <h1 className="text-4xl text-white oswald-font uppercase font-bold">
              Book A Table
            </h1>
          </div>
        </div>
      </Parallax>
    </>
  );
}
