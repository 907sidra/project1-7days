import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className=' w-full h-full flex flex-col md:flex-row justify-center items-start  bg-[#F2F0F1] max-w-screen-2xl mx-auto'>
    {/* rightside text*/}
    <div className='  w-full md:w-[600px] h-full mt-3 md:mt-10 pl-3 relative'>
   
      
      <h4 className=' font-extrabold  md:text-7xl text-4xl m-2 '>FIND CLOTHES THAT MATCHES YOUR STYLE</h4>
     <p className='font-light text-xs m-2 md:text-xm text-slate-800 mt-6'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
    
      <button className='bg-black rounded-3xl mt-4 text-white font-light w-full md:w-[170px] h-[42px]'>Shop Now</button>
    
   </div>
    {/* leftside picture*/}
    <div className=' bg-[#F2F0F1] relative '>
    <Image  src={"/images/bg-half.png"} width={500} height={200} alt="pic" className="md:w-[555px] w-full mr-4"></Image>
        
        <Image src={"/images/Vector.png"} alt="image" width={100} height={100} className='md:w-[100px] w-[50px] md:h-[100px] h-[50px] absolute md:right-[100px] md:top-[50px] 
       
        top-[15px] right-[60px]' ></Image>
        
        <Image src="/images/Vector.png" alt="image" width={100} height={100} className='md:w-[56px] md:h-[56px] w-[30px] h-[40px] absolute md:right-[650px] md:top-[250px]
        
                  top-[80px] left-[40px]'></Image>
    </div>
   

    
</div>
  )
}
