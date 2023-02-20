import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutUs from "../../components/AboutUs/AboutUs";
import Home from "../../components/Home/Home";
import Menu from "../../components/Menu/Menu";
import NotFound from "../../components/Shared/NotFound";

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
    ],
  },
]);

export default router;
