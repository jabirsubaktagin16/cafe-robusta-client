import React, { useContext } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/cafe-robusta-logo-white.png";
import { AuthContext } from "../../contexts/AuthProvider";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("accessToken");
        navigate("/signin");
      })
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link
          to="/"
          className="uppercase text-white md:p-0 flex items-center gap-2 hover:bg-primary md:hover:bg-transparent md:hover:text-primary tracking-wide"
          aria-current="page"
        >
          <span>
            <GiCoffeeCup />
          </span>
          <span>Home</span>
        </Link>
      </li>
      <li tabIndex={0}>
        <div className="flex gap-2 items-center py-2 lg:ml-5 uppercase text-white hover:bg-primary md:hover:bg-transparent md:hover:text-primary tracking-wide">
          <GiCoffeeCup />
          <Link to="/menu">Our Menu</Link>
        </div>

        <ul className="p-2 bg-base-200 text-white uppercase font-light">
          <li>
            <a>Hot/Cold Drinks Menu</a>
          </li>
          <li>
            <a>Food Menu</a>
          </li>
        </ul>
      </li>
      <li>
        <Link
          to="/aboutUs"
          className="flex gap-2 items-center py-2 lg:ml-5 uppercase text-white hover:bg-primary md:hover:bg-transparent md:hover:text-primary tracking-wide"
        >
          <GiCoffeeCup /> About Us
        </Link>
      </li>
      <li>
        <Link
          to="/reservation"
          className="flex gap-2 items-center py-2 lg:ml-5 uppercase text-white hover:bg-primary md:hover:bg-transparent md:hover:text-primary tracking-wide"
        >
          <GiCoffeeCup /> Reservation
        </Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar sticky top-0 z-10 shadow bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="barlow-font menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-12" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="barlow-font font-semibold menu menu-horizontal px-1 bg-base-200">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.ibb.co/S5DKJdp/avatar.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 text-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/signin"
            type="button"
            className="text-white bg-primary ease-in-out duration-200 hover:bg-base-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
