import React from "react";
import "react-day-picker/dist/style.css";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import AuthProvider from "./contexts/AuthProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SkeletonTheme baseColor="#dee2e6" highlightColor="#e9ecef">
    <HelmetProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HelmetProvider>
  </SkeletonTheme>
);
