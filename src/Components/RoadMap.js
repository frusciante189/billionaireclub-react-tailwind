import React from "react";
import data from "../API/RoadMapAPI";

const RoadMap = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto text-center md:mt-24 mt-12">
        <div>
          <h1 className="text-white md:text-4xl text-2xl font-semibold uppercase">
            Launch Roadmap
          </h1>
          <p className="mt-10 text-gray-500 md:text-base text-sm text-center">
            As we value our community and its creativity, our roadmap will be{" "}
            <br className="hidden md:inline-block" />
            updated according to your comments and ideas.
          </p>
          <div className="flex flex-col items-start justify-center text-left space-y-10 mt-20">
            {data.map((item) => {
              return (
                <div className="flex items-center justify-center px-4 md:px-0">
                  <div className="border border-gray-500 w-2/12 md:h-32 h-14 flex items-center justify-center text-text-primary md:text-4xl text-sm font-semibold shadow-2xl">
                    {item.percentage}{" "}
                    <span className="md:text-base text-xs">%</span>
                  </div>
                  <div className="ml-10 flex flex-col space-y-2 w-10/12">
                    <h1 className="text-white font-semibold md:text-xl text-xs">
                      {item.title}
                    </h1>
                    <p className="text-gray-500 md:text-base text-xs">
                      {item.content}
                    </p>
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

export default RoadMap;
