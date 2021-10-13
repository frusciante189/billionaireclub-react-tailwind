import React from "react";

const About = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto flex sm:px-5 px-1 lg:py-24 pt-12 pb-0 lg:flex-row flex-col-reverse items-center">
        <div className="md:max-w-xl md:w-full w-5/6 mb-10 md:mb-0 mt-10 lg:mt-0">
          <div className="grid grid-cols-2 gap-5">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/Golden_Boy_9f641b88be/Golden_Boy_9f641b88be.png"
              alt=""
            />
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/Cyclope_751906e14b/Cyclope_751906e14b.png"
              alt=""
            />
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/brain_mary_jane_efcfd214be/brain_mary_jane_efcfd214be.png"
              alt=""
            />
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/Amethyst_a1cd06e326/Amethyst_a1cd06e326.png"
              alt=""
            />
          </div>
        </div>
        <div className="lg:flex-grow md:w-full lg:pl-20 md:pl-16 pl-0 flex flex-col md:items-start md:text-left items-center">
          <div className="flex flex-col items-start text-gray-500 px-4">
            <div className="flex items-center justify-center">
              <h1 className="font-bold text-sm uppercase">About</h1>
              <hr className="w-32 ml-8 bg-gray-500 border-none h-px inline-block md:hidden" />
            </div>
            <h1 className="text-white lg:text-4xl text-2xl font-bold mt-4">
              Welcome to the <br />
              <span className="text-text-primary">Billionaire Club</span>
            </h1>
            <p className="lg:text-lg text-base lg:mt-12 mt-6">
              <span className="text-white">The BILLIONAIRE CLUB</span> is a
              private collection of
              <span className="text-white"> 10 000 billionaire apes NFTs</span>
              —unique digital collectibles. The apes are stored as ERC-721
              tokens on the Ethereum blockchain and hosted on IPFS. Dropping
              October 16TH 2021.
            </p>
            <p className="lg:mt-16 mt-8 lg:text-lg text-base">
              With
              <span className="text-white">
                {" "}
                more than 180+ hand drawn traits
              </span>
              , each NFT is unique and comes with a membership to an exclusive
              group of successful investors.
              <span className="text-white"> Join</span> an ambitious
              ever-growing community with multiple benefits and utilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
