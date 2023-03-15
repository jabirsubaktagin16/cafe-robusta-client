import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutUs from "../../components/AboutUs/AboutUs";
import Booking from "../../components/BookATable/Booking";
import Home from "../../components/Home/Home";
import Menu from "../../components/Menu/Menu";
import NotFound from "../../components/Shared/NotFound";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignIn/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { PublicRoute } from "../PublicRoute/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/signin",
        element: (
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },
      {
        path: "/reservation",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
