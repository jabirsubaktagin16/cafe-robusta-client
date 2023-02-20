import React from "react";
import notFound from "../../assets/images/error.png";

export default function NotFound() {
  return (
    <>
      <div className="my-10 ">
        <div className="flex justify-center items-center">
          <div className="lg:w-6/12">
            <img src={notFound} alt="Not Found Error" />
          </div>
        </div>
      </div>
    </>
  );
}
