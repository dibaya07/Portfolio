import React from 'react'
import calculator from "../images/calculator.png"
import nomado from "../images/nomado.png"
import portfolio from "../images/portfolio.png"

export default function Projects() {
  return (
    <section id='projects' className=' bg-[#1d2d44] py-4 '>
      <div className="heading flex flex-col items-center py-8">
        <span className='text-sm tracking-widest '>PROJECTS</span>
        <span className='text-center py-2 font-medium text-xl tracking-wider'>Check Out Some of <br /> My Recent Work</span>
      </div>
     
      <div className="project sm:flex bg-[#0d1321] xl:w-[86%] w-[96%] mx-auto  p-4 rounded-2xl overflow-hidden my-2">
        <span className="img flex  overflow-hidden p-2 sm:h-56 sm:w-80 my-auto "><img src={nomado} alt="project thumbnail" className='rounded-xl'/></span>
        <div className="project-info sm:w-2/3 sm:px-4 overflow-hidden">
            <h2 className='font-medium text-lg tracking-wider pt-4'>Nomado(Airbnb clone)</h2>
            <div className="project-tech pt-2 flex flex-wrap">
                <span className='border-solid border border-gray-500 bg-[#1d2d44] px-4 py-1 font-bold text-xs rounded-2xl mr-2
                 m-1' >React</span>
                <span className='border-solid border border-gray-500 bg-[#1d2d44] px-4 py-1 font-bold text-xs rounded-2xl mr-2
                 m-1' >ViteJs</span>
                <span className='border-solid border border-gray-500 bg-[#1d2d44] px-4 py-1 font-bold text-xs rounded-2xl mr-2
                 m-1' >Tailwind</span>
                <span className='border-solid border border-gray-500 bg-[#1d2d44] px-4 py-1 font-bold text-xs rounded-2xl mr-2
                 m-1' >Expressjs</span>
                <span className='border-solid border border-gray-500 bg-[#1d2d44] px-4 py-1 font-bold text-xs rounded-2xl mr-2
                 m-1' >NodeJs</span>
                <span className='border-solid border border-gray-500 bg-[#1d2d44] px-4 py-1 font-bold text-xs rounded-2xl mr-2
                 m-1' >MongoDB</span>
            </div>
            <p className="project-des opacity-80 text-sm py-3">
              Full-stack project — Nomado is an Airbnb-style web app built with React, Vite, Tailwind, Express.js, Node.js, and MongoDB, enabling users to browse, list, and manage rental accommodations.
            </p>
            <a href="https://github.com/dibaya07/Nomado/" target='_blank' className='p-2 mr-1 border-solid border border-gray-500 font-medium text-sm rounded-3xl px-4 py-2'>Github Repository</a>
            <a href="https://nomado-one.vercel.app/" target='_blank' className='p-2 mx-1 font-medium opacity-70 hover:underline inline-block mt-1 '>Live preview &rarr;</a>
        </div>
      </div>  
       <div className="project sm:flex bg-[#0d1321] xl:w-[86%] w-[96%] mx-auto  p-4 rounded-2xl overflow-hidden my-2">
        <span className="img flex  overflow-hidden p-2 sm:h-56 sm:w-80 my-auto "><img src={portfolio} alt="project thumbnail" className='rounded-xl'/></span>
        <div className="project-info sm:w-2/3 sm:px-4 overflow-hidden">
            <h2 className='font-medium text-lg tracking-wider pt-4'>Portfolio</h2>
            <div className="project-tech pt-2">
                <span className='border-solid border border-gray-500 bg-[#1d2d44] px-4 py-1 font-bold text-xs rounded-2xl mr-2
                ' >React</span>
                <span className='border-solid border border-gray-500 bg-[#1d2d44] px-4 py-1 font-bold text-xs rounded-2xl mr-2
                ' >ViteJs</span>
                <span className='border-solid border border-gray-500 bg-[#1d2d44] px-4 py-1 font-bold text-xs rounded-2xl mr-2
                ' >Tailwind</span>
            </div>
            <p className="project-des opacity-80 text-sm py-3">
               Frontend project — Responsive portfolio website built with React and Tailwind CSS, featuring a clean design, smooth navigation.
            </p>
            <a href="https://github.com/dibaya07/Portfolio" target='_blank' className='p-2 mr-1 border-solid border border-gray-500 font-medium text-sm rounded-3xl px-4 py-2'>Github Repository</a>
            <a href="https://portfolio-delta-murex-17.vercel.app/" target='_blank' className='p-2 mx-1 font-medium opacity-70 hover:underline inline-block mt-1'>Live preview &rarr;</a>
        </div>
      </div>   
       <div className="project sm:flex bg-[#0d1321] xl:w-[86%] w-[96%] mx-auto  p-4 rounded-2xl overflow-hidden my-2">
        <span className="img flex  overflow-hidden p-2 sm:h-56 sm:w-80 my-auto "><img src={calculator} alt="project thumbnail" className='rounded-xl'/></span>
        <div className="project-info sm:w-2/3 sm:px-4 overflow-hidden">
            <h2 className='font-medium text-lg tracking-wider pt-4'>Calculator</h2>
            <div className="project-tech pt-2">
                <span className='border-solid border border-gray-500 bg-[#1d2d44] px-4 py-1 font-bold text-xs rounded-2xl mr-2
                ' >React</span>
                <span className='border-solid border border-gray-500 bg-[#1d2d44] px-4 py-1 font-bold text-xs rounded-2xl mr-2
                ' >ViteJs</span>
                <span className='border-solid border border-gray-500 bg-[#1d2d44] px-4 py-1 font-bold text-xs rounded-2xl mr-2
                ' >Tailwind</span>
            </div>
            <p className="project-des opacity-80 text-sm py-3">
               Frontend project — A simple, responsive calculator built with React that performs addition, subtraction, multiplication, and division with a clean, user-friendly interface.
            </p>
            <a href="https://github.com/dibaya07/Calculator" target='_blank' className='p-2 mr-1 border-solid border border-gray-500 font-medium text-sm rounded-3xl px-4 py-2'>Github Repository</a>
            <a href="https://calculator-tau-snowy.vercel.app/" target='_blank' className='p-2 mx-1 font-medium opacity-70 hover:underline inline-block mt-1'>Live preview &rarr;</a>
        </div>
      </div>   
       
    </section>
  )
}
