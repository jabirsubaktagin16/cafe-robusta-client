import React from "react";
import FoodMenus from "./FoodMenus";

export default function OtherFoods() {
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
            Food Menu
          </h1>
        </div>
      </div>
      <div className="container mx-auto md:px-20 px-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 my-10">
        <div>
          <FoodMenus categoryName="Sandwiches and Wraps" />
          <div className="mt-5">
            <h1 className="text-3xl font-bold oswald-font uppercase tracking-wider">
              + Toppings for Sandwiches and Wraps:
            </h1>
            <p className="mt-5 text-center text-xl text-gray-500 font-semibold">
              Lettuce | Tomatoes | Onions | Spinach | Cucumbers Craisins |
              Almonds | Jalapenos Black Olives | Banana Peppers
            </p>
            <p className="text-center text-lg text-gray-500">
              (Add $1.00 for Bacon & Avocado)
            </p>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold oswald-font uppercase tracking-wider">
              + Dressings:
            </h1>
            <p className="mt-5 text-center text-xl text-gray-500 font-semibold">
              Mayo | Ranch | Mustard | Honey Mustard | Italian Blue Cheese |
              Balsamic Vinaigrette
            </p>
          </div>
        </div>
        <div>
          <div>
            <FoodMenus categoryName="Flatbread Gourmet Pizzas" />
            <div className="mt-5">
              <p className="text-center text-xl text-gray-500 font-bold">
                (Additional Toppings: Pepperoni, Mushroom, Spinach, Onion or
                Peppers – $0.95)
              </p>
            </div>
          </div>
          <div className="mt-5">
            <FoodMenus categoryName="Acai Bowls" />
            <div className="mt-5">
              <p className="text-center text-xl text-gray-500 font-bold">
                (Drizzle Choices: Chocolate, Caramel, Honey Peanut Butter (Dip)
                – $0.75)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
