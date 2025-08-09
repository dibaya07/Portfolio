import React from "react";
import { techStack } from "../init/data";

export default function TechStack() {
  return (
    <div className="bg-[#000814] p-6">
      <h2 className="font-medium text-base my-3">Technologies I Work With</h2>
      <div className="tech flex lg:flex-nowrap flex-wrap justify-center sm:justify-normal">
        {techStack.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              className="tech flex flex-col justify-center items-center border-solid border border-gray-500 p-3 rounded-lg mx-2 my-2 lg:my-0 sm:h-28 sm:w-32 w-28"
              key={index}
            >
              <Icon className="font-semibold sm:text-3xl text-2xl text-[#F7770F] opacity-90" />
              <span className="pt-3 font-medium text-xs sm:text-sm">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
