import React from 'react'
import { IoIosMailOpen } from "react-icons/io";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";



export default function Intro() {
  return (
    <section id='home' className='text-center bg-[#02080f] h-full sm:py-8 py-4 sm:mt-20 mt-10'>
      <div className="shapes hidden 2xl:block relative">
      <span className=' border-solid border border-gray-500 h-16 w-10 absolute z-50 -top-16 left-32 rounded-l-full rotate-12'></span>
      <span className='bg-gray-500 h-16 w-16 absolute top-16 left-5 rounded-full '></span>
      <span className='bg-orange-500 h-4 w-1 absolute top-10 left-80 '></span>
      <span className='bg-orange-500 h-1 w-10 absolute top-72 left-80 '></span>
      <span className='bg-gray-500 h-4 w-4 absolute top-[24rem] left-[30rem] opacity-70'></span>
      <span className='border border-solid border-orange-700 h-4 w-4 absolute top-[24rem] left-[50rem] opacity-70'></span>
      <span className='border border-solid border-gray-700 h-4 w-4 absolute top-[21rem] left-[58rem] opacity-70'></span>
      <span className='border border-solid border-gray-700 h-12 w-12 absolute top-[18rem] left-[70rem] opacity-70'></span>
      <span className='bg-gray-700 h-4 w-4 absolute top-[23rem] left-[51rem] opacity-70'></span>
      <span className='bg-orange-500 h-1 w-4 absolute top-[24rem] left-[42rem] opacity-70'></span>
      <span className='bg-orange-500 h-5 w-5 absolute top-[12rem] left-[66rem] '></span>
      <span className='bg-gray-400 h-6 w-6 absolute top-[12rem] left-[80rem] rounded-full'></span>
      <span className=' h-10 w-10 absolute top-[5rem] left-[76rem] rounded-full border border-solid border-gray-400'></span>
      <span className=' h-20 w-12 absolute -top-12 left-[76rem] rounded-r-full bg-gray-600 z-50 rotate-45'></span>

      </div>
      <span className='border-solid border border-gray-500 py-1 px-4 rounded-full tracking-widest text-sm font-medium inline-block sm:my-6'>WEB DEVELOPER</span>
      <p className='sm:text-5xl text-3xl font-medium mb-8'>Dibaya Jyoti Baruah</p>
      <p className='opacity-85 sm:w-1/2 w-full sm:mx-auto'>Turning ideas into interactive, clean, and functional web experiences that prioritize performance, accessibility, and user satisfaction</p>
      <div className="btns sm:hidden py-8 px-4">
         {/* <button  className="bg-[#0d1321] sm:hidden rounded-xl py-4 px-5 sm:px-40 text-4xl font-medium border-solid border border-gray-700 m-2"><IoIosMailOpen /></button> */}
        {/* <button  className="bg-[#0d1321] sm:hidden rounded-xl py-4 px-5 sm:px-40 text-4xl font-medium border-solid border border-gray-700 m-2"><FaSquareWhatsapp /></button> */}
        <a  href="https://www.linkedin.com/feed/"
          target="_blank" className="bg-[#0d1321] sm:hidden rounded-xl py-4 px-5 sm:px-40 text-4xl font-medium border-solid border border-gray-700 m-2 inline-block"><FaLinkedin /></a>
        <a  href="https://github.com/dibaya07"
          target="_blank" className="bg-[#0d1321] sm:hidden rounded-xl py-4 px-5 sm:px-40 text-4xl font-medium border-solid border border-gray-700 m-2 inline-block"><FaSquareGithub /></a>
        <a  href="https://www.instagram.com/a"
          target="_blank" className="bg-[#0d1321] sm:hidden rounded-xl py-4 px-5 sm:px-40 text-4xl font-medium border-solid border border-gray-700 m-2 inline-block"><FaSquareInstagram /></a>
       <a
              href="#contact"
              className="bg-[#f36d00] py-3 px-8 inline-block my-3 rounded-xl"
            >
              Contact
            </a>
      </div>
    </section>
  )
}
