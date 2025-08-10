import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import TechStack from './TechStack'
import Projects from './Projects'
// import Profile from './About'
import Contact from './Contact'
import Footer from './Footer'
import About from './About'
// import { TbBrandDjango } from "react-icons/tb";

export default function Home() {
  return (
    <div className='h-full w-full bg-[#02080f]  text-white '>
      <div className="navbar flex justify-center  ">
      {/* <div className="logo bg-transparent sm:hidden flex flex-grow  items-center pl-2 py-4 sm:py-0 sm:pl-0 font-bold text-3xl "><TbBrandDjango /></div> */}
      <Navbar/>

      </div>
      <hr className='sm:opacity-60 hidden '/>
      <Intro/>
      <TechStack/>
      <Projects/>
      {/* <Profile/> */}
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
