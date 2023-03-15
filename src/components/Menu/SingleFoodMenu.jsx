import React from "react";

export default function SingleFoodMenu({ menu }) {
  const { title, imageURL, subCategory, price, details } = menu;
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <img
          className="object-cover w-32 rounded-t-lg h-auto md:rounded-none md:rounded-l-lg"
          src={imageURL}
          alt=""
        />
      </div>
      <div className="col-span-8">
        <h5 className="mb-2 text-2xl font-bold oswald-font uppercase tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-primary">{details}</p>
      </div>
      <div className="col-span-2">
        <h5 className="mb-2 text-2xl text-end font-bold oswald-font uppercase tracking-tight text-gray-900">
          ${price}
        </h5>
        <p className="mb-3 bg-primary font-normal text-center source-serif-font italic">
          {subCategory}
        </p>
      </div>
    </div>
  );
}
