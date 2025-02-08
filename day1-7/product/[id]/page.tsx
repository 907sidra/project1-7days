"use client"
 import Image from 'next/image';
import React from 'react'
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useParams } from 'next/navigation';
import { Check, Link, Minus, Plus } from 'lucide-react';
import Allreviews from '@/app/components/allreviews';
import Tshirts from '@/app/components/t-shirts';
import { BreadcrumbDemo } from '@/app/components/breadcrumb';
interface Iproduct{
  title:string,
  price:string,
  id:number,
  rating?:string,
  old_price?:string,
  img_url:string,
  img1_url:string,
  img2_url:string,
  img3_url:string
} 
let product:Iproduct[] =[
  {
   title:"T-SHIRT WITH TAPE DETAILS",
   id:1,
   price:"$120",
   img_url:"/images/pic1.png",
   img1_url:"/images/pic9.png",
   img2_url:"/images/pic10.png",
   img3_url:"/images/pic11.png",

},
{
  title:"SKINNY FIT JEANS",
  id:2,
  price:"$240",
  old_price:"$260",
  img_url:"/images/pic2.png",
  img1_url:"/images/pic9.png",
   img2_url:"/images/pic10.png",
   img3_url:"/images/pic11.png",

}, 
{
  title:"CHECKERED SHIRT",
  id:3,
  price:"$180",
  img_url:"/images/pic3.png",
  img1_url:"/images/pic9.png",
   img2_url:"/images/pic10.png",
   img3_url:"/images/pic11.png",

},
 {
  title:"SLEEVE STRIPED T-SHIRT",
  id:4,
  price:"$130",
  img_url:"/images/pic4.png",
  old_price:"$160",
  img1_url:"/images/pic9.png",
   img2_url:"/images/pic10.png",
   img3_url:"/images/pic11.png",

}
]
let star=[
  <FaStar key={1}/>,
  <FaStar key={2}/>,
  <FaStar key={3}/>,
  <FaStar key={4}/>,
   <FaStar key={5}/>]
export default function ProDetail(){
  const Params=useParams();
  const id=Params.id //for dynamic id
  const item=product.find((item)=> item.id === Number(id))
  if(!item){
    return <h2>pro not found</h2>
  }
  
  return(
    <div>
      <BreadcrumbDemo/>
      <div className="flex flex-col md:flex-row w-full md:w-[1300px] h-full md:h-[700px] mx-auto mt-6 pt-6 sm:px-8">
      {/* left images*/}
      <div className="flex flex-row md:flex-col justify-evenly w-full sm:w-[152px] h-full sm:h-[535px] mt-4 md:mt-0 sm:space-y-1 sm:mb-2 order-2 sm:order-1">
        <Image src={item.img1_url} alt="pro" width={200} height={100} className="rounded-[20px] sm:w-full w-[100px] h-[100px] sm:h-full"></Image>
        <Image src={item.img2_url} alt="pro" width={200} height={100} className="rounded-[20px] sm:w-full w-[110px] h-[100px] sm:h-full"></Image>
        <Image src={item.img3_url} alt="pro" width={200} height={100} className="rounded-[20px] sm:w-full w-[110px] h-[100px] sm:h-full"></Image>
      </div>
      {/* mid */}
      <div className="w-full md:w-[444px] h-full md:h-[550px] sm:ml-2 order-1 sm:order-2">
        <Image src={"/images/pic9.png"} alt="pro" width={200} height={100} className="w-full h-full rounded-[20px]"></Image>
      </div>
      {/* right */}
      <div className="w-full md:w-[600px] h-full md:h-[550px] md:ml-4 pl-4 pt-3 space-y-3 order-3">
        <h1 className="text-5xl font-extrabold ">One Life Graphic T-shirt</h1>
        <div className="flex text-[#FFC633]">
          {star}<span className="text-black ml-4">4.5/5</span>
        </div>
        <div className="">
          {item.price}<span className="ml-3 text-gray-500 line-through">{item.old_price}</span>
        </div>
        <p className="text-gray-600 w-full md:w-[580px] h-[33px] text-xs font-extralight">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
        {/* colors */}
        <h2 className="text-gray-600 font-extralight pt-8">Select colors</h2>
        <div className="flex space-x-4">
          <div className="w-[40px] h-[40px] bg-[#31344F] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" /></div>
          <div className="w-[40px] h-[40px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" /></div>
          <div className="w-[40px] h-[40px] bg-[#4F4631] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" /></div>
        </div>
        {/* choose */}

        <h2 className="pt-8 text-gray-600">Choose Size</h2>
        <Link href="" className="flex space-x-4 items-center">
          <div className="w-[80px] h-[40px] pt-2 bg-[#F0F0F0] hover:bg-black hover:text-white rounded-[62px] text-center">Small</div>
          <div className="w-[80px] h-[40px] pt-2 bg-[#F0F0F0] hover:bg-black hover:text-white rounded-[62px] text-center">Medium</div>
          <div className="w-[80px] h-[40px] pt-2 bg-[#F0F0F0] hover:bg-black hover:text-white rounded-[62px] text-center">Large</div>
          <div className="w-[80px] h-[40px] pt-2 bg-[#F0F0F0] hover:bg-black hover:text-white rounded-[62px] text-center">x-Large</div>
        </Link>
        <div className="space-x-4 flex pt-8 mb-4">
          <button className="h-[52px] w-[172px] bg-[#F0F0F0] rounded-[62px] text-black hover:bg-gray-950 hover:text-white  flex justify-between items-center pt-1 px-4"> <Minus />  1  <Plus /></button>
          <button className="h-[52px] w-[400px] bg-[#F0F0F0] rounded-[62px] text-black hover:bg-gray-950 hover:text-white">Add to cart</button>

        </div>

      </div>
    </div>
    <Allreviews/>
    < Tshirts/>
    </div>)
}

