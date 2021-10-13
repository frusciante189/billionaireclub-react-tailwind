import React, { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Oct 16, 2021 04:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      console.log(distance);
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop
        clearInterval(interval.current);
      } else {
        // update
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className="h-auto relative bg-black">
      <img
        alt=""
        src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/BC_Banner_ca6b0b8206/BC_Banner_ca6b0b8206.jpg"
        className="w-full h-auto bg-contain object-contain"
      ></img>
      <div className="text-white flex flex-col items-center justify-center pt-8 absolute top-0 inset-x-0">
        <h1 className="sm:text-2xl text-base font-semibold mb-5">
          Launching on October 16th
        </h1>
        <div className="grid grid-cols-4 font-semibold mx-auto border border-gray-100 border-opacity-30 bg-black bg-opacity-30 w-3/4 xl:w-1/3 lg:w-1/2">
          <div>
            <div className="flex flex-col justify-center items-center py-4 px-8">
              <span className="text-4xl">{days}</span>
              <span className="text-sm font-medium text-text-primary">
                Days
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center py-4 px-8">
              <span className="text-4xl">{hours}</span>
              <span className="text-sm font-medium text-text-primary">
                Hours
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center py-4 px-8">
              <span className="text-4xl">{minutes}</span>
              <span className="text-sm font-medium text-text-primary">
                Minutes
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center py-4 px-8">
              <span className="text-4xl">{seconds}</span>
              <span className="text-sm font-medium text-text-primary">
                Seconds
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <img
  alt=""
  src="https://storage.googleapis.com/billionaire-club-327223.appspot.com/BC_Banner_ca6b0b8206/BC_Banner_ca6b0b8206.jpg"
  decoding="async"
  data-nimg="responsive"
  sizes="100vw"
  srcset="https://storage.googleapis.com/billionaire-club-327223.appspot.com/BC_Banner_ca6b0b8206/BC_Banner_ca6b0b8206.jpg 640w, https://storage.googleapis.com/billionaire-club-327223.appspot.com/BC_Banner_ca6b0b8206/BC_Banner_ca6b0b8206.jpg 750w, https://storage.googleapis.com/billionaire-club-327223.appspot.com/BC_Banner_ca6b0b8206/BC_Banner_ca6b0b8206.jpg 828w, https://storage.googleapis.com/billionaire-club-327223.appspot.com/BC_Banner_ca6b0b8206/BC_Banner_ca6b0b8206.jpg 1080w, https://storage.googleapis.com/billionaire-club-327223.appspot.com/BC_Banner_ca6b0b8206/BC_Banner_ca6b0b8206.jpg 1200w, https://storage.googleapis.com/billionaire-club-327223.appspot.com/BC_Banner_ca6b0b8206/BC_Banner_ca6b0b8206.jpg 1920w, https://storage.googleapis.com/billionaire-club-327223.appspot.com/BC_Banner_ca6b0b8206/BC_Banner_ca6b0b8206.jpg 2048w, https://storage.googleapis.com/billionaire-club-327223.appspot.com/BC_Banner_ca6b0b8206/BC_Banner_ca6b0b8206.jpg 3840w"
  style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: contain;"
></img>; */
}
