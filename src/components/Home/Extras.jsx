import React from "react";
import conference from "../../assets/images/conference.jpg";
import gift from "../../assets/images/gift.jpg";
import music from "../../assets/images/music.jpg";

export default function Extras() {
  return (
    <div className="pb-10">
      <div className="container mx-auto md:px-20 px-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        <div>
          <div>
            <img src={music} alt="Music" />
            <div className="my-8 text-start">
              <h1 className="text-3xl barlow-font text-white">
                Open Mic Night
              </h1>
              <p className="mt-3 text-gray-300">
                <span className="font-bold">STAY TUNED!</span> Open mic nights
                at Café Robusta will be starting up again soon! This is open to
                anyone who would like to play a song, sing… Stay tuned for more
                information, dates and times.
              </p>
              <div className="my-8">
                <a
                  href="#"
                  className="banner-button text-white bg-primary font-bold uppercase ease-in-out duration-300 border border-primary px-8 py-4 hover:bg-base-300 hover:border-white"
                >
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={conference} alt="Conference" />
            <div className="my-8 text-start">
              <h1 className="text-3xl barlow-font text-white">
                Robusta “Gathering” Conference Room
              </h1>
              <p className="mt-3 text-gray-300">
                <span className="font-bold">Now Open!</span> The Robusta
                “Gathering Room” is available for business lunch-ins, parties,
                private meetings and public use when not booked. Click on the
                button below for more information and/or to book a reservation.
              </p>
              <div className="my-8">
                <a
                  href="#"
                  className="banner-button text-white bg-primary font-bold uppercase ease-in-out duration-300 border border-primary px-8 py-4 hover:bg-base-300 hover:border-white"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={gift} alt="Gift" />
            <div className="my-8 text-start">
              <h1 className="text-3xl barlow-font text-white">
                The Café Robusta Gift Shop
              </h1>
              <p className="mt-3 text-gray-300">
                The Robusta Gift Shop has your favorite tees, caps, mugs,
                plaques, and of course COFFEE, plus a whole lot more and is open
                Monday – Friday from 7:00 am until 5:00 pm and on Saturdays from
                8:00 am until 2:00 pm.
              </p>
              <div className="my-8">
                <a
                  href="#"
                  className="banner-button text-white bg-primary font-bold uppercase ease-in-out duration-300 border border-primary px-8 py-4 hover:bg-base-300 hover:border-white"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
