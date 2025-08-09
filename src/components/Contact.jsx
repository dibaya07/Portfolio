import React from 'react'


export default function Contact() {
  return (
    <section id='contact' className='bg-[#0d1321] flex sm:h-[30rem] sm:p-8 lg:p-12 flex-col sm:flex-row text-center'>
      <div className='sm:w-full py-8 sm:px-14 px-4' >
        <span className='font-medium text-2xl tracking-widest py-6 inline-block '>Let's talk?</span>
        <p className='text-base opacity-75'>If you have any qurstions,proposals, or just want to have a chat, feel free to get in touch.</p>
        <a href='mailto:dibayajyotibaruah@gmail.com' target='_blank' className=" rounded-2xl py-4 sm:flex justify-center hidden text-base font-medium my-2   w-full hover:underline">dibayajyotibaruah@gmail.com</a>
        <button className=" rounded-2xl py-4 sm:inline-block hidden  text-base font-medium my-2  border-solid border border-gray-700 w-1/4">Whatsapp</button>
       
      </div>
     
    </section>
  )
}
