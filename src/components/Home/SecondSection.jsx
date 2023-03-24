import React from "react";

import Slider from "react-slick";
import cafeCarouselOne from "../../assets/images/cafe-carousel-1.jpg";
import cafeCarouselTwo from "../../assets/images/cafe-carousel-2.jpg";
import cafeCarouselThree from "../../assets/images/cafe-carousel-3.jpg";
import freeWifi from "../../assets/images/free-wifi.png";
import secondBannerImg from "../../assets/images/second-banner-img.jpg";

export default function SecondSection() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <h1
        className="text-white text-6xl my-8 text-center anton-font uppercase"
        id="cafe-robusta-header"
      >
        Café Robusta
      </h1>
      <div className="container mx-auto md:px-20 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        <div>
          <div>
            <Slider {...settings}>
              <div className="border-4 border-white">
                <img src={cafeCarouselOne} alt="" />
              </div>
              <div className="border-4 border-white">
                <img src={cafeCarouselTwo} alt="" />
              </div>
              <div className="border-4 border-white">
                <img src={cafeCarouselThree} alt="" />
              </div>
            </Slider>
            <div className="my-8 text-start">
              <h1 className="text-3xl oswald-font uppercase font-bold text-white">
                LIVE YOUR BEST COFFEE LIFE
              </h1>
              <p className="mt-3 text-gray-300">
                People from all over the world visit Café Robusta to relax,
                revitalize, and enjoy superb coffee, pleasant conversation, and
                delicious cuisine!
              </p>
              <img
                src={freeWifi}
                alt="Free wifi"
                className="w-1/2 float-right my-6"
              />
            </div>
          </div>
        </div>
        <div>
          <img src={secondBannerImg} alt="Second Banner" className="w-full" />
          <div className="my-6 text-start">
            <h1 className="text-3xl oswald-font uppercase font-bold text-white">
              Did someone say “Coffee”!
            </h1>
            <p className="mt-3 text-gray-300">
              We use "Brazilian Santos" beans to make some of the greatest
              locally roasted coffee available. Enjoy roasts that are Dark,
              Blonde, Jamaican, Italian, and Decaf. Our speciality lattes,
              frappes, mochas, cappuccinos, americanos, and more are also
              available.
            </p>
            <p className="mt-2 text-gray-300">
              To see more of our coffee, specialty drinks & food menus, please
              click the link below
            </p>
          </div>
        </div>
        <div>
          <div
            className="border-4 border-gray-200 h-auto shadow"
            style={{
              backgroundImage: `url("https://i.ibb.co/C699DSw/opening-days.jpg")`,
              backgroundSize: "cover",
              boxShadow: "inset 0 0 100px black",
            }}
          >
            <div className="px-10 py-20">
              <h1 className="text-4xl text-center text-white oswald-font font-semibold uppercase">
                Opening Hours
              </h1>
              <div className="my-6 oswald-font text-2xl">
                <p className="flex justify-between text-white">
                  <span className="uppercase">Monday</span>
                  <span>7:00am-5:00pm</span>
                </p>
                <p className="flex justify-between text-white">
                  <span className="uppercase">Tuesday</span>
                  <span>7:00am-5:00pm</span>
                </p>
                <p className="flex justify-between text-white">
                  <span className="uppercase">Wednesday</span>
                  <span>7:00am-5:00pm</span>
                </p>
                <p className="flex justify-between text-white">
                  <span className="uppercase">Thursday</span>
                  <span>7:00am-5:00pm</span>
                </p>
                <p className="flex justify-between text-white">
                  <span className="uppercase">Friday</span>
                  <span>7:00am-5:00pm</span>
                </p>
                <p className="flex justify-between text-white">
                  <span className="uppercase">Saturday</span>
                  <span>7:00am-5:00pm</span>
                </p>
                <p className="flex justify-between text-white">
                  <span className="uppercase">Sunday</span>
                  <span className="uppercase font-bold text-primary">
                    Closed
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div className="card w-96 h-100 border-4 border-white bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/C699DSw/opening-days.jpg"
                alt="Opening Days"
              />
            </figure>
            <div className="card-body">
              <h1 className="text-4xl text-start text-white">Opening Hours</h1>
              <div className="my-6 card-text text-3xl">
                <p className="flex justify-between text-white">
                  <span>Monday</span>
                  <span>7:00am-5:00pm</span>
                </p>
                <p className="flex justify-between text-white">
                  <span>Tuesday</span>
                  <span>7:00am-5:00pm</span>
                </p>
                <p className="flex justify-between text-white">
                  <span>Wednesday</span>
                  <span>7:00am-5:00pm</span>
                </p>
                <p className="flex justify-between text-white">
                  <span>Thursday</span>
                  <span>7:00am-5:00pm</span>
                </p>
                <p className="flex justify-between text-white">
                  <span>Friday</span>
                  <span>7:00am-5:00pm</span>
                </p>
                <p className="flex justify-between text-white">
                  <span>Saturday</span>
                  <span>7:00am-5:00pm</span>
                </p>
                <p className="flex justify-between ">
                  <span className="text-white">Sunday</span>
                  <span className="coffee-text">Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
