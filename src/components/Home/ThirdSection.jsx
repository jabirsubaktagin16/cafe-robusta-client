import React from "react";
import americano from "../../assets/images/types/Americano.png";
import capuccino from "../../assets/images/types/Capuccino.png";
import cocoa from "../../assets/images/types/Cocoa.png";
import espresso from "../../assets/images/types/Espresso.png";
import frappe from "../../assets/images/types/Frappe.png";
import irish from "../../assets/images/types/Irish.png";
import latte from "../../assets/images/types/Latte.png";
import mocha from "../../assets/images/types/Mocha.png";

export default function ThirdSection() {
  return (
    <div className="my-20">
      <p className="text-lg merriweather-font coffee-text italic text-center">
        We have over 25 different flavors to choose from
      </p>
      <h2 className="text-4xl my-3 oswald-font text-center font-black text-white">
        CHOOSE YOUR STYLE / CHOOSE YOUR FLAVOR
      </h2>
      <div className="container oswald-font uppercase font-bold mx-auto mt-6 md:px-52 px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-x-16 gap-y-12">
        <div className="text-center">
          <img src={americano} alt="Americano" />
          <h6 className="text-xl text-white mt-4">Americano</h6>
        </div>
        <div className="text-center">
          <img src={espresso} alt="Espresso" />
          <h6 className="text-xl text-white mt-4">Espresso</h6>
        </div>
        <div className="text-center">
          <img src={capuccino} alt="Capuccino" />
          <h6 className="text-xl text-white mt-4">Capuccino</h6>
        </div>
        <div className="text-center">
          <img src={frappe} alt="Frappe" />
          <h6 className="text-xl text-white mt-4">Frappe</h6>
        </div>
        <div className="text-center">
          <img src={latte} alt="Latte" />
          <h6 className="text-xl text-white mt-4">Latte</h6>
        </div>
        <div className="text-center">
          <img src={irish} alt="Irish" />
          <h6 className="text-xl text-white mt-4">Irish</h6>
        </div>
        <div className="text-center">
          <img src={mocha} alt="Mocha" />
          <h6 className="text-xl text-white mt-4">Mocha</h6>
        </div>
        <div className="text-center">
          <img src={cocoa} alt="Cocoa" />
          <h6 className="text-xl text-white mt-4">Cocoa</h6>
        </div>
      </div>
    </div>
  );
}
