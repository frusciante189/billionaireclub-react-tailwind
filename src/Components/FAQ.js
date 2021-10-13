import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import data from "../API/FAQAPI";

const FAQ = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto md:pt-40 pt-10 lg:px-0 px-4">
        <h1 className="text-white font-bold lg:text-4xl text-xl text-center">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="w-full p-2 rounded-2xl lg:mt-[72px] mt-5">
          {data.map((item) => {
            return (
              <Disclosure>
                {({ open }) => (
                  <div className="border-b border-gray-500 md:pb-6 pb-4 mt-6">
                    <Disclosure.Button className="flex justify-between w-full ">
                      <span className="md:text-lg text-sm md:font-bold font-medium text-white md:text-center text-left">
                        {item.question}
                      </span>
                      <span>
                        {open ? (
                          <MinusIcon className="w-5 h-5 text-white" />
                        ) : (
                          <PlusIcon className="w-5 h-5 text-white" />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-400 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-400 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="md:text-lg text-sm text-gray-500 mt-6">
                        {item.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center mt-20 md:pb-[120px] pb-16">
          <h1 className="text-lg font-semibold text-text-primary text-center">
            The Party Never Stops
          </h1>
          <h1 className="md:text-5xl text-3xl font-bold text-center text-white mt-6">
            Get Aped with Us! <br />{" "}
            <span className="text-text-primary">Join our Discord</span>
          </h1>
          <div className="bg-gradient-to-r from-borderSecondary to-borderPrimary p-0.5 mt-10 max-w-max">
            <button className="uppercase bg-gradient-to-r from-primary to-secondary text-sm text-white px-6 py-3  font-semibold">
              Lets Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
