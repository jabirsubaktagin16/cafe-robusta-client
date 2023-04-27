import React from "react";

import { FaEllipsisH } from "react-icons/fa";

export default function SingleFoodManage({ menu, refetch }) {
  const { title, category, subCategory, imageURL, price, details } = menu;
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <img
          className="object-cover w-32 rounded-t-lg h-auto md:rounded-none md:rounded-l-lg"
          src={imageURL ? imageURL : ""}
          alt=""
        />
      </div>
      <div className="col-span-7">
        <h5 className="mb-2 text-2xl font-bold barlow-font uppercase  text-gray-900 tracking-wide">
          {title}
        </h5>
        <p className="mb-3 font-semibold text-primary">{category}</p>
        {/* <p className="mb-3 font-normal text-primary">{details}</p> */}
        <p className="mb-3 font-normal text-primary">
          <strong>Price:</strong> ${price}
        </p>
      </div>
      <div className="col-span-3">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="cursor-pointer m-1">
            <FaEllipsisH className="text-primary" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
