import React from "react";
// import profile from "../public/profile.JPG";

export default function About() {
  return (
    <section id="about" className="bg-[#223550] py-4  xl:px-20 xl:h-[90%]">
      <div className="profile flex flex-wrap-reverse sm:flex-nowrap lg:h-[28rem]">
        <div className="info sm:w-[55%] m-2 sm:m-2 mt-24  bg-[#0d1321] p-6 sm:p-6 pt-24  rounded-3xl ">
          <h2 className="text-xs sm:py-2 pt-8 pb-3">Hey,i'm</h2>
          <h2 className="text-2xl font-semibold ">Dibaya Jyoti Baruah</h2>
          <p className=" py-6 sm:pr-12  opacity-75 font-medium text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            architecto, velit excepturi doloremque commodi eveniet minus optio.
            Dolore, perferendis, est mollitia aperiam aspernatur a placeat at
            eaque magnam necessitatibus vitae? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Culpa architecto, velit excepturi
            doloremque commodi eveniet minus optio. Dolore, perferendis, est
            mollitia aperiam aspernatur a placeat at eaque magnam necessitatibus
            vitae?
          </p>
        </div>
        <div className="profile-img flex flex-grow  sm:bg-[#0d1321] sm:m-2 justify-center items-center rounded-3xl relative sm:static">
          <div className="shapes hidden sm:flex relative">
            <span className="border border-solid border-orange-400 h-16 w-16 absolute -top-[12rem] left-12 rounded-full "></span>

            <span className="bg-gray-400 h-6 w-6 absolute top-12  -left-20 rounded-full"></span>
            <span className=" h-10 w-10 absolute top-[8rem] left-56 rounded-full border border-solid border-gray-400 opacity-75"></span>
            <span className=" h-16 w-10 absolute -top-[12rem] left-72 rounded-r-full bg-gray-600 opacity-85 rotate-45"></span>
          </div>
          <div className=" h-52 w-52 absolute -top-1 border-solid border-8  border-[#0d1321] rounded-full sm:hidden"></div>
          <img
            src="/profile.JPG"
            alt="project thumbnail"
            className="rounded-full h-48 w-48 sm:h-64 sm:w-56 absolute sm:static top-1 object-contain"
          />
        </div>
      </div>
      <div className="contact flex  justify-evenly">
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          className="bg-[#0d1321] rounded-xl py-4 w-[31%] xl:w-[32%] text-base font-medium border-solid border border-gray-700 sm:flex justify-center hidden "
        >
          Linkedin
        </a>
        <a
          href="https://github.com/dibaya07"
          target="_blank"
          className="bg-[#0d1321] rounded-xl py-4 w-[31%] xl:w-[32%] text-base font-medium border-solid border border-gray-700 sm:flex justify-center hidden "
        >
          github
        </a>
        <a
          href="https://www.instagram.com/a"
          target="_blank"
          className="bg-[#0d1321] rounded-xl py-4 w-[31%] xl:w-[32%] text-base font-medium border-solid border border-gray-700 sm:flex justify-center hidden "
        >
          Instagram
        </a>
      </div>
    </section>
  );
}
