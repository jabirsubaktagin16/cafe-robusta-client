import React from "react";
import FoodMenus from "./FoodMenus";
import ItemBanner from "./ItemBanner";

export default function OtherFoods() {
  return (
    <>
      <ItemBanner title="Food Menu" />
      <div className="container mx-auto lg:px-20 md:px-10 px-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-20 my-10">
        <div>
          <FoodMenus categoryName="Sandwiches and Wraps" />
          <div className="mt-5">
            <h1 className="text-3xl font-bold barlow-font uppercase tracking-wider">
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
            <h1 className="text-3xl font-bold barlow-font uppercase tracking-wider">
              + Dressings:
            </h1>
            <p className="mt-5 text-center text-xl text-gray-500 font-semibold">
              Mayo | Ranch | Mustard | Honey Mustard | Italian Blue Cheese |
              Balsamic Vinaigrette
            </p>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold barlow-font uppercase tracking-wider">
              + Cheeses:
            </h1>
            <p className="mt-5 text-center text-xl text-gray-500 font-semibold">
              Provolone | American | Swiss Feta | Cheddar | Mozzarella
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
          <div className="mt-5">
            <FoodMenus categoryName="Salads" />
          </div>
          <div className="mt-5">
            <FoodMenus categoryName="Snacks and Sweets" />
          </div>
        </div>
      </div>
    </>
  );
}
