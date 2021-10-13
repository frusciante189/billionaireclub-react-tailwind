import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Quests = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 555,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 342,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#151515]">
      <div className="max-w-7xl mx-auto flex px-4 md:px-0 lg:py-24 pb-0 lg:flex-row flex-col items-start">
        <div className="md:max-w-xl md:w-full w-5/6 mb-10 md:mb-0 mt-10 lg:mt-0">
          <h1 className="md:text-4xl text-xl font-bold text-white text-center">
            GOLDEN QUESTS
          </h1>
        </div>
        <div className="lg:flex-grow md:w-full flex flex-col md:items-start md:text-left items-start">
          <div className="flex flex-col md:items-start items-center justify-start text-gray-500 px-4">
            <p className="lg:text-lg text-sm text-center md:text-left">
              <span className="text-white">The Golden Guests edition</span> by
              the Billionaire Club are the rarest NFTs. They are all hand drawn
              and have no element in common with the regular collection.
              <span className="text-white">
                {" "}
                The 12 lucky holders will get a $500 fee in ETH per month 4LIFE.
                You will be able to mint these NFT's.
              </span>
            </p>
            <div className="bg-gradient-to-r from-borderSecondary to-borderPrimary p-0.5 mt-5 mb-5 md:mb-0">
              <button className="uppercase bg-gradient-to-r from-primary to-secondary text-sm text-white md:px-6 px-4 md:py-3 py-2 font-medium md:font-semibold">
                Join us to Register for presale
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-12 px-5">
        <Slider {...settings}>
          <div className="p-2 lg:p-0">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/THE_HOST_736c22bee7/THE_HOST_736c22bee7.png"
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
            <h1 className="text-white font-semibold text-center mt-3 uppercase">
              The Host
            </h1>
          </div>
          <div className="p-2 lg:p-0">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/Kim_Kardashian_min_a736ad39b1/Kim_Kardashian_min_a736ad39b1.png"
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
            <h1 className="text-white font-semibold text-center mt-3 uppercase">
              The superstar
            </h1>
          </div>
          <div className="p-2 lg:p-0">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/Godfather_min_875fbc2b76/Godfather_min_875fbc2b76.png"
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
            <h1 className="text-white font-semibold text-center mt-3 uppercase">
              The god father
            </h1>
          </div>
          <div className="p-2 lg:p-0">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/LIL_UZI_min_0060183936/LIL_UZI_min_0060183936.png"
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
            <h1 className="text-white font-semibold text-center mt-3 uppercase">
              The rapper
            </h1>
          </div>
          <div className="p-2 lg:p-0">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/DJ_min_1b8153323d/DJ_min_1b8153323d.png"
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
            <h1 className="text-white font-semibold text-center mt-3 uppercase">
              The dj
            </h1>
          </div>
          <div className="p-2 lg:p-0">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/Joker_min_ad6aff8a6a/Joker_min_ad6aff8a6a.png"
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
            <h1 className="text-white font-semibold text-center mt-3 uppercase">
              The joker
            </h1>
          </div>
          <div className="p-2 lg:p-0">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/THE_BROTHER_537ba8e00f/THE_BROTHER_537ba8e00f.png"
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
            <h1 className="text-white font-semibold text-center mt-3 uppercase">
              The brother
            </h1>
          </div>
          <div className="p-2 lg:p-0">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/Ape_with_question_mark_33c34eae10/Ape_with_question_mark_33c34eae10.jpg"
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
            <h1 className="text-white font-semibold text-center mt-3 uppercase">
              Coming Soon
            </h1>
          </div>
          <div className="p-2 lg:p-0">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/coming_soon_10be60d0fa/coming_soon_10be60d0fa.jpeg"
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
            <h1 className="text-white font-semibold text-center mt-3 uppercase">
              Coming Soon
            </h1>
          </div>
          <div className="p-2 lg:p-0">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/coming_soon_10be60d0fa/coming_soon_10be60d0fa.jpeg"
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
            <h1 className="text-white font-semibold text-center mt-3 uppercase">
              Coming Soon
            </h1>
          </div>
          <div className="p-2 lg:p-0">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/coming_soon_10be60d0fa/coming_soon_10be60d0fa.jpeg"
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
            <h1 className="text-white font-semibold text-center mt-3 uppercase">
              Coming Soon
            </h1>
          </div>
          <div className="p-2 lg:p-0">
            <img
              src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/coming_soon_10be60d0fa/coming_soon_10be60d0fa.jpeg"
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
            <h1 className="text-white font-semibold text-center mt-3 uppercase">
              Coming Soon
            </h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Quests;
