import React from "react";

export default function SingleFoodMenu() {
  return (
    <div className="flex flex-row items-start">
      <img
        className="object-cover w-32 rounded-t-lg h-auto md:rounded-none md:rounded-l-lg"
        src="https://i.ibb.co/rMDy7TT/coffee.png"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="flex justify-between oswald-font font-bold uppercase">
          <h5 className="mb-2 text-2xl tracking-tight text-gray-900">Coffee</h5>
          <h5 className="mb-2 text-2xl tracking-tight text-gray-900">$2.50</h5>
        </div>
        <div className="flex justify-between">
          <p className="mb-3 font-normal text-primary">
            Locally roasted using “Brazilian Santos” beans. (Dark, Blonde,
            Jamaican, Italian & Decaf roasts) - 12 oz & 20 oz
          </p>
          <span className="bg-primary merriweather-font italic h-auto px-5">
            coffee
          </span>
        </div>
      </div>
    </div>
  );
}
