import React from "react";
import FoodMenus from "./FoodMenus";

export default function CoffeeDrinks() {
  return (
    <>
      <div
        className="flex items-center justify-center h-[200px] bg-cover bg-center bg-no-repeat md:h-[250px]"
        style={{
          backgroundImage: `url("./menu-header.png")`,
        }}
      >
        <div className="max-w-100">
          <h1 className="mb-5 text-3xl font-bold text-white oswald-font uppercase">
            Coffee & Drinks Menu
          </h1>
        </div>
      </div>
      <div className="container mx-auto md:px-20 px-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 my-10">
        <div>
          <FoodMenus categoryName="Warm Drinks" />
          <div className="mt-10">
            <FoodMenus categoryName="Extras" />
          </div>
        </div>
        <div>
          <FoodMenus categoryName="Cold Drinks" />
          <div className="mt-5">
            <h1 className="text-center text-3xl font-bold oswald-font tracking-wider">
              LATTE / CAPPUCCINO FLAVORS:
            </h1>
            <p className="mt-5 text-center text-xl text-gray-500 font-semibold">
              Mocha | Carmel | Salted Carmel | Hazelnut | French Vanilla White
              Chocolate | Chocolate Chip Cookie Dough and over 25 More!
            </p>
            <p className="text-center text-sm text-gray-500 font-bold">
              (Sugar Free Options Are Also Available)
            </p>
            <p className="text-center text-xl text-gray-500">
              Mix & match and make your own flavors
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
