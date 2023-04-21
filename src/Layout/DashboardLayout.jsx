import React, { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaHome, FaRegCalendarCheck, FaUserAlt } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

export default function DashboardLayout() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar-start">
        <label
          htmlFor="tabIndex"
          className="btn btn-ghost drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div className="drawer drawer-mobile">
        <input id="tabIndex" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="tabIndex" className="drawer-overlay"></label>
          <div className="bg-base-200 text-white">
            <div className="text-center mt-8">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://i.ibb.co/S5DKJdp/avatar.png" />
                </div>
              </div>
              <h2 className="text-2xl mt-3 barlow-font text-center uppercase font-bold text-white">
                {user?.displayName}
              </h2>
              <p>
                Signed In as: <span className="font-bold">User</span>
              </p>
              <p></p>
            </div>
            <div
              className="flex justify-center items-center"
              style={{ minHeight: "50vh" }}
            >
              <ul className="menu overflow-y-auto w-80">
                <li className="hover:bg-primary ease-in-out duration-300">
                  <Link to="/" className="gap-6">
                    <FaHome />
                    Home
                  </Link>
                </li>
                <li className="hover:bg-primary ease-in-out duration-300">
                  <Link to="/dashboard" className="gap-6">
                    <FaUserAlt />
                    My Profile
                  </Link>
                </li>
                <li className="hover:bg-primary ease-in-out duration-300">
                  <Link to="/dashboard" className="gap-6">
                    <FaRegCalendarCheck />
                    My Bookings
                  </Link>
                </li>
                <li className="hover:bg-primary ease-in-out duration-300">
                  <Link to="/dashboard/review" className="gap-6">
                    <AiFillEdit />
                    Review
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
