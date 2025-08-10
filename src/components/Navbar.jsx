import React from "react";
import { TbBrandDjango } from "react-icons/tb";
import { BsFillProjectorFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#02080f] w-full h-[13vh]  fixed z-50 sm:block hidden">
        <div className=" sm:bg-[#1e1e1f]  xl:w-[50%] sm:w-[75%]  sm:flex hidden  sm:justify-between py-2 my-2 rounded-full overflow-hidden sm:border-solid sm:border sm:border-gray-500 mx-auto">
          <div className="logo   sm:flex hidden   sm:flex-grow  items-center justify-center font-bold text-3xl ">
            <TbBrandDjango />
          </div>

          <div className="mid-nav sm:flex hidden  justify-evenly items-center  w-2/3 font-semibold">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            {/* <p>Projects</p>s */}
            {/* <p className='sm:hidden text-sm flex flex-col items-center border-solid border border-gray-500 p-1'><BsFillProjectorFill />Projects</p> */}
            {/* <p>About</p> */}
          </div>
          <div className="contact    w-1/5 text-center">
            {/* <p className='contact bg-red-300  w-1/5 text-center'>Contact</p> */}
            <a
              href="#contact"
              className="bg-[#F7770F] py-1 px-6 rounded-full sm:inline-block hidden"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
