
import React from 'react'
import { TfiEmail } from 'react-icons/tfi'

export default function Offers() {
  return (
  <main className=' w-full flex justify-center items-center max-w-screen-2xl mx-auto'>
    <div className='w-[80%] h-full sm:h-[180px] bg-[#000000] text-white  flex flex-col sm:flex-row justify-evenly p-5 items-center mx-auto rounded-[20px]'>
        <h1 className='text-2xl sm:text-4xl font-extrabold'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
    <div className='space-y-3'>
   <div className='flex justify-start items-center sm:w-[349px] h-[48px] bg-white outline-none rounded-[62px]'>
     <TfiEmail className="text-xl ml-2 text-gray-400" />
    <input
            type="text"
            className="w-full h-full rounded-[62px] ml-3 "
            placeholder="Enter your email address"
          />
    </div>
    <div className='flex justify-center items-center w-full sm:w-[349px] h-[48px] rounded-[62px] mt-2 bg-white'>
        <p className='text-black'>Subscribe to Newsletter</p>
    </div>
   
    </div>

    </div>
  </main>
  )
}