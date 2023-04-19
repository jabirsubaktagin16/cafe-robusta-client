import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Parallax } from "react-parallax";
import bookingBanner from "../assets/images/booking-bg.png";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import PageTitle from "../components/Shared/PageTitle";

export default function Booking({ selectedDate, setSelectedDate }) {
  return (
    <>
      <PageTitle title="Book a Table" />
      <Header />
      <Parallax
        bgImage="./reservation.jpg"
        bgImageAlt="Reservation Banner"
        strength={300}
      >
        <div className="flex items-center justify-center h-[250px] bg-cover bg-no-repeat mb-8 md:h-[400px]">
          <div className="text-center">
            <h1 className="text-4xl text-white barlow-font uppercase font-bold">
              Reservation
            </h1>
          </div>
        </div>
      </Parallax>
      <div className="my-20">
        <div className="my-10 flex justify-center items-center flex-col text-center">
          <h1 className="text-5xl tracking-wider text-base-200 font-bold barlow-font uppercase">
            Book a Table
          </h1>
          <p className="text-base-300 source-serif-font italic mt-4 md:w-5/12 lg:w-5/12 xl:w-5/12">
            Book your table now and experience the perfect blend of cozy
            atmosphere and exceptional coffee. We've got the perfect spot
            waiting for you!
          </p>
        </div>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 my-10">
          <div>
            <img src={bookingBanner} alt="Second Banner" className="w-full" />
          </div>
          <div className="md:px-20 px-10 ">
            <div className="mb-6">
              <label
                htmlFor="date-select"
                className="block mb-2 text-lg text-gray-900 source-serif-font font-semibold"
              >
                Select a Date
              </label>
              <input
                type="date"
                id="date-select"
                className="block bg-transparent w-full p-4 rounded-0 text-gray-900 border border-primary sm:text-md focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="time-select"
                className="block mb-2 text-lg text-gray-900 source-serif-font font-semibold"
              >
                Select a Time
              </label>
              <input
                type="time"
                id="time-select"
                className="block bg-transparent w-full p-4 rounded-0 text-gray-900 border border-primary sm:text-md focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="time-select"
                className="block mb-2 text-lg text-gray-900 source-serif-font font-semibold"
              >
                Select Guest Number(s)
              </label>
              <select
                id="guest-select"
                className="block bg-transparent w-full p-4 rounded-0 text-gray-900 border border-primary sm:text-md focus:ring-primary focus:border-primary"
              >
                <option selected>Choose Guest Number(s)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="More Than 7">More than 7</option>
              </select>
            </div>
            <button
              type="button"
              className="text-white bg-primary ease-in-out duration-200 hover:bg-base-300 focus:ring-4 focus:outline-none focus:ring-primary font-medium px-5 py-2.5 text-center inline-flex items-center mr-2"
            >
              <FaCheck className="w-4 h-4 mr-2 -ml-1" />
              Confirm
            </button>
            <div className="mt-10">
              <p className="source-serif-font text-xl">
                For Full Cafe Reservation, Please Contact us at
              </p>
              <div className="my-4">
                <p className="flex items-center gap-5">
                  <BsTelephoneFill />
                  <span>1-585-786-8181</span>
                </p>
                <p className="mt-2 flex items-center gap-5">
                  <GrMail />
                  <span>cafe.robusta18@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
