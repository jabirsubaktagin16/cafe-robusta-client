import React from "react";

export default function SingleFoodManage({ menu, refetch, setDeletingMenu }) {
  const { title, category, subCategory, imageURL, price, details } = menu;

  return (
    <div className="grid grid-cols-6 grid-rows-none gap-2 shadow-md p-4 items-start">
      <div>
        <img className="md:w-5/6 w-full" src={imageURL} alt="" />
      </div>
      <div className="box col-start-2 col-end-6">
        <h3 className="text-2xl font-bold barlow-font uppercase text-gray-900 tracking-wide">
          {title}
        </h3>
        <p className="text-primary text-base font-semibold">{category}</p>
        <p className="text-primary text-base font-normal">${price}</p>
      </div>
      <div className="flex flex-col text-right gap-6">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 w-52"
          >
            <li>
              <a>Edit Menu</a>
            </li>
            <li>
              <label
                onClick={() => setDeletingMenu(menu)}
                htmlFor="delete-confirm-modal"
              >
                Delete
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
