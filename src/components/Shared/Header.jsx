import React from "react";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cafe-robusta-logo-white.png";

export default function Header() {
  const menuItems = (
    <>
      <li>
        <Link
          to="/"
          className="py-2 pl-3 pr-4 text-white md:p-0 flex items-center gap-2 hover:bg-primary md:hover:bg-transparent md:hover:text-primary"
          aria-current="page"
        >
          <span>
            <FiCoffee />
          </span>
          <span>Home</span>
        </Link>
      </li>
      <li>
        <button
          id="dropdownNavbarLink"
          data-dropdown-toggle="dropdownNavbar"
          className="flex uppercase items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white rounded hover:bg-primary md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto "
        >
          <div className="flex gap-2 items-center">
            <FiCoffee />
            Our Menu{" "}
          </div>
          <svg
            className="w-5 h-5 ml-1"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          id="dropdownNavbar"
          className="z-10 hidden font-normal bg-base-200 divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul
            className="py-2 text-sm text-white"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-primary ">
                Hot/Cold Drinks Menu
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-primary ">
                Food Menu
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link
          to="/aboutUs"
          className="py-2 pl-3 pr-4 text-white rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0 flex items-center gap-2"
        >
          <FiCoffee /> About Us
        </Link>
      </li>

      <li>
        <a
          href="#"
          className="flex items-center gap-2 py-2 pl-3 pr-4 text-white rounded hover:bg-primary md:hover:bg-transparent md:hover:text-primary md:p-0 "
        >
          <FiCoffee /> Book a Table
        </a>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-10 shadow bg-base-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
        </Link>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
          </button>
          <div
            className="z-50 hidden my-4 text-base list-none bg-base-200 divide-y divide-gray-100 rounded-lg shadow"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-white">Bonnie Green</span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className=" oswald-font flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent uppercase">
            {menuItems}
          </ul>
        </div>
      </div>
    </nav>
  );
}
