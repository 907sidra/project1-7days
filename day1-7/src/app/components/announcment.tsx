import Link from 'next/link'
import React from 'react'

export const Announc = () => {
  return (

<div className='bg-black text-white w-full h-[38px] flex justify-center items-center relative max-w-screen-2xl mx-auto'>
       <div className='flex justify-center items-center  '>
        <h4 className='text-sm sm:text-md '>Sign up and get 20% off to your first order.</h4>
        <Link href="/" className='hover:underline ml-1 text-sm sm:text-md'>Sign Up Now</Link>
        <div>
          <button className="text-white text-sm absolute right-3 transform -translate-y-1/2 -translate-x-1 hidden sm:block ">X</button>
        </div>
       
       </div>
        

    </div>

  )
}
