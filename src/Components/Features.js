import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";

const Features = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto flex sm:px-5 px-1 lg:py-24 py-4 lg:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-full lg:pl-20 md:pl-16 pl-0 flex flex-col md:items-start md:text-left items-center">
          <div className="flex flex-col items-start text-gray-500 px-4">
            <div className="flex items-center justify-center">
              <h1 className="font-bold text-sm uppercase">Features</h1>
              <hr className="w-32 ml-8 bg-gray-500 border-none h-px inline-block md:hidden" />
            </div>
            <h1 className="text-white lg:text-4xl text-2xl font-bold mt-4">
              An Exclusive <br />
              <span className="text-text-primary">Billionaire Club</span>
            </h1>
            <p className="lg:text-lg text-base lg:mt-12 mt-6">
              Earlier this year, a mysterious force coming from another galaxy
              summoned
              <span className="text-white">
                {" "}
                the most influential people on the planet Earth
              </span>
              . They received the geographic coordinates of a secret location
              for the party :{" "}
              <span className="text-white">the Billionaire Club</span>. There,
              they will have the opportunity to exchange, discuss and
              collaborate in order to become even bigger than they are. During
              this party, the host will reveal its identity and
              <span className="text-white">
                {" "}
                the main reason for this invitation
              </span>
              .
            </p>
            <a
              href="/"
              className="flex items-center justify-center text-white pb-2 border-b mt-10 border-gray-500"
            >
              Join Us
              <span>
                <ArrowRightIcon className="w-5 h-5 ml-5 text-text-primary" />
              </span>
            </a>
          </div>
        </div>
        <div className="md:max-w-xl md:w-full w-5/6 mb-10 md:mb-0 mt-10 lg:mt-0">
          <div className="">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/10_apes_gif_16d63f21f2/10_apes_gif_16d63f21f2.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
