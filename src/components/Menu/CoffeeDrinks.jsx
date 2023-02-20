import React from "react";
import FoodMenus from "./FoodMenus";

export default function CoffeeDrinks() {
  return (
    <>
      <div
        className="flex items-center justify-center w-full h-[200px] bg-cover bg-center bg-no-repeat mb-8 md:h-[200px]"
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
      <div className="container mx-auto md:px-20 px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 my-10">
        <div>
          <FoodMenus categoryName="Warm Drinks" />
        </div>
        <div>
          <FoodMenus categoryName="Cold Drinks" />
        </div>
      </div>
    </>
  );
}
