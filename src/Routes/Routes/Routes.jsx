import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";

import DashboardLayout from "../../Layout/DashboardLayout";
import AboutUs from "../../Pages/AboutUs";
import Booking from "../../Pages/Booking";
import MyProfile from "../../Pages/Dashboard/MyProfile";
import AddReview from "../../Pages/Dashboard/User/AddReview";
import Home from "../../Pages/Home";
import Menu from "../../Pages/Menu";
import SignIn from "../../Pages/SignIn";
import SignUp from "../../Pages/SignUp";
import NotFound from "../../components/Shared/NotFound";
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
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        errorElement: <NotFound />,
        children: [
          {
            path: "/dashboard",
            element: <MyProfile />,
          },
          {
            path: "/dashboard/add-review",
            element: <AddReview />,
          },
        ],
      },
    ],
  },
]);

export default router;
