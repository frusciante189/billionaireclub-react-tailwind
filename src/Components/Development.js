import React from "react";
import data from "../API/DevelopmentAPI";

const Development = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto text-center md:mt-32 mt-16 px-4 lg:px-0">
        <div>
          <h1 className="text-white md:text-4xl text-2xl font-semibold uppercase">
            Development Roadmap
          </h1>
          <p className="mt-10 text-gray-500 md:text-base text-sm text-center">
            <span className="text-white">
              Our goal is to make sure your investment is highly profitable
            </span>
            . To do so, we will set up <br className="hidden md:inline-block" />{" "}
            several strategies (fusion, reduce supply, marketing & community
            pushes <br className="hidden md:inline-block" /> simultaneously)
            after the launch in order to increase the floor price.
          </p>
          <div className="flex flex-col items-start justify-center text-left md:space-y-10 space-y-0 mt-20">
            {data.map((item) => {
              return (
                <div
                  className={`${item.border} flex md:flex-row flex-col md:items-center items-start justify-center md:border-t-2 border-gray-600 pt-10`}
                >
                  <div className="flex items-center justify-start md:text-xl text-xs font-semibold shadow-2xl w-2/5">
                    <h1 className={`${item.titleText} font-semibold`}>
                      {item.title}
                    </h1>
                  </div>
                  <div className="md:ml-10 ml-0 flex items-center justify-center space-y-2 md:w-3/5 w-full text-xs md:text-base md:mt-0 mt-3 ">
                    <p className={`${item.contentText}`}>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
