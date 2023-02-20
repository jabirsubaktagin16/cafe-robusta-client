import React from "react";
import { Parallax } from "react-parallax";
import Slider from "react-slick";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="my-20">
      <div>
        <Parallax
          bgImage="./testimonial.jpg"
          bgImageAlt="Testimonial Banner"
          strength={300}
        >
          <div className="">
            <div className="flex justify-center items-center py-52">
              <div>
                <h1 className="text-4xl text-start oswald-font coffee-text">
                  What Our Customers Say...
                </h1>
                <div className="max-w-100 md:max-w-4xl mt-8">
                  <Slider
                    {...settings}
                    className="text-white text-2xl merriweather-font"
                  >
                    <div>
                      The sun was setting behind the mountains, casting a warm
                      orange glow over the valley below.
                    </div>
                    <div>
                      She walked down the busy city street, lost in thought as
                      she dodged the crowds.
                    </div>
                    <div>
                      He sat at his desk, staring at the blank page in front of
                      him, trying to come up with the perfect opening sentence
                      for his novel.
                    </div>
                  </Slider>
                </div>
                <div className="mt-20 text-center">
                  <a
                    href="#"
                    className="banner-button poppins-font tracking-widest font-bold text-white uppercase ease-in-out duration-300 border border-white px-8 py-4 hover:bg-base-300"
                  >
                    See More Customer Testimonials
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}
