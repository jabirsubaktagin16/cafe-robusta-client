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
        <h5 className="text-2xl font-bold oswald-font text-end tracking-tight text-gray-900">
          ${price}
        </h5>
        <p className="mb-3 bg-primary font-normal text-center source-serif-font italic">
          {subCategory}
        </p>
      </div>
    </div>
    // <div className="flex flex-row items-start">
    //   <img
    //     className="object-cover w-32 rounded-t-lg h-auto md:rounded-none md:rounded-l-lg"
    //     src={imageURL}
    //     alt=""
    //   />
    //   <div className="flex flex-col justify-between p-4 leading-normal">
    //     <div className="flex justify-between oswald-font font-bold uppercase">
    //       <h5 className="mb-2 text-2xl tracking-tight text-gray-900">
    //         {title}
    //       </h5>
    //       <h5 className="mb-2 text-2xl tracking-tight text-gray-900">
    //         ${price}
    //       </h5>
    //     </div>
    //     <div className="flex justify-between">
    //       <p className="mb-3 font-normal text-primary">{details}</p>
    //       <span className="bg-primary text-sm source-serif-font italic">
    //         {subCategory}
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
}
