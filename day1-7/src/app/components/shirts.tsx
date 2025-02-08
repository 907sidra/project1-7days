import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar } from "react-icons/fa";


interface Isell{
  title:string,
  price:string,
  id:number, 
  rating?:string,
  old_price?:string,
  img_url:string
} 
let Topsell:Isell[] =[
  {
   title:"VERTICAL STRIPED SHIRT",
   id:5,
   old_price:"$232",
   price:"$212",
   img_url:"/images/pic12.png"

},
{
  title:"COURAGE GRAPHIC T-SHIRT",
  id:6,
  price:"$145",
  img_url:"/images/pic13.png"

}, 
{
  title:"Polo with Tipping Details",
  id:7,
  price:"$180",
  img_url:"/images/pic14.png"

},
 {
  title:"Black Striped T-shirt",
  id:8,
  price:"$120",
  old_price:"$150",
  img_url:"/images/pic15.png"

},
{
  title:"VERTICAL STRIPED SHIRT",
  id:5,
  old_price:"$232",
  price:"$212",
  img_url:"/images/pic12.png"

},
{
 title:"COURAGE GRAPHIC T-SHIRT",
 id:6,
 price:"$145",
 img_url:"/images/pic13.png"

}, 
{
 title:"Polo with Tipping Details",
 id:7,
 price:"$180",
 img_url:"/images/pic14.png"

},
{
 title:"Black Striped T-shirt",
 id:8,
 price:"$120",
 old_price:"$150",
 img_url:"/images/pic15.png"

},
{
  title:"Black Striped T-shirt",
  id:8,
  price:"$120",
  old_price:"$150",
  img_url:"/images/pic15.png"
 
 }
]
let star=[ <FaStar key={1}/>,
  <FaStar key={2}/>,
  <FaStar key={3}/>,
  <FaStar key={4}/>,
   <FaStar key={5}/>]

export default function Tshirts() {
  return (
    <div className='w-full h-full md:h-[700px] '>
        <h2 className='text-4xl md:5xl lg:6xl font-extrabold'>Casuals
        </h2>
        <div className='flex flex-wrap flex-col md:flex-col-2 lg:flex-row justify-center lg:space-y-0 space-y-24 md:justify-evenly items-center mt-2 '>
          {
            Topsell.map((data) => {
              return(
                <div key={data.id}>
              <Link href={"/products/id"}>
              <div className='w-[295px]  h-[298px] bg-[#F0EEED] rounded-[20px] '>
              <Image src={data.img_url} alt={data.title} width={200} height={100} className='w-full h-full rounded-[20px]'></Image>
              </div>
              </Link>
            <p className='text-lg font-bold mt-2'>{data.title}</p>
            <p className='flex text-[#FFC633]'>{star.map((icon,index)=>( <span key={index}>{icon}
                          </span>))}


            </p>
            <p className='text-lg font-bold mt-1'>{data.price}<span className='text-gray-500 line-through pl-2'>{data.old_price}</span>
            </p>
            </div> 
            )
            })
          }
        </div>
        </div>
  )
}