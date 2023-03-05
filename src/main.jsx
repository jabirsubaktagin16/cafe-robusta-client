import "flowbite";
import React from "react";
import "react-day-picker/dist/style.css";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import AuthProvider from "./contexts/AuthProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </HelmetProvider>
);
