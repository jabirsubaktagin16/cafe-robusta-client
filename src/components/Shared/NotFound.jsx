import React from "react";
import notFound from "../../assets/images/error.png";
import Footer from "./Footer";
import Header from "./Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div className="lg:w-5/12">
          <img src={notFound} alt="Not Found Error" />
        </div>
      </div>
      <Footer />
    </>
  );
}
