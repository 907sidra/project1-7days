import React from 'react'
import Image from 'next/image'
export default function Dress() {
  return (
    <div className='w-full md:w-[1239px] h-full md:h-[866px] bg-[#F0F0F0] flex flex-col justify-start items-center max-w-screen-2xl mx-auto'>
        {/* top */}
        <div className='text-4xl font-bold m-8'>BROWSE DRESS BY STYLE</div>
        {/* bottom */}
        <div className=' w-[90%] h-full lg:h-[700px] flex flex-wrap justify-start items-start'>
            <div className='w-[445px] h-[320px] m-1  relative'> 
                <Image src={"/images/dress-style-1.png"} alt="dress" width={300} height={100} className='w-full rounded-[20px] h-full'></Image><span className='absolute top-10 left-5 font-bold text-xl'>Casual</span>
                </div>
                <div className='w-[650px] h-[320px] m-1 relative'> 
                <Image src={"/images/dress-style-2.png"} alt="dress" width={400} height={100} className='w-full rounded-[20px] h-full'></Image><span className='absolute top-10 left-5 font-bold text-xl'>Formal</span>
                </div>
                <div className='w-[650px] h-[320px] m-1 relative'> 
                <Image src={"/images/dress-style-3.png"} alt="dress" width={400} height={100} className='w-full rounded-[20px] h-full'></Image><span className='absolute top-10 left-5 font-bold text-xl'>Party</span>
                </div>
                <div className='w-[445px] h-[320px] m-1 relative'> 
                <Image src={"/images/dress-style-4.png"} alt="dress" width={300} height={100} className='w-full rounded-[20px] h-full'></Image><span className='absolute top-10 left-5 font-bold text-xl'>Gym</span>
                </div>
            </div>
    </div>
  )
}