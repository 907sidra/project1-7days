import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface Iproduct{
  title:string,
  price:string,
  id:number,
  rating?:string,
  old_price?:string,
  img_url:string,
  
} 
let product:Iproduct[] =[
  {
   title:"T-SHIRT WITH TAPE DETAILS",
   id:1,
   price:"$120",
   img_url:"/images/pic1.png",
   

},
{
  title:"SKINNY FIT JEANS",
  id:2,
  price:"$240",
  old_price:"$260",
  img_url:"/images/pic2.png",
 

}, 
{
  title:"CHECKERED SHIRT",
  id:3,
  price:"$180",
  img_url:"/images/pic3.png",

},
 {
  title:"SLEEVE STRIPED T-SHIRT",
  id:4,
  price:"$130",
  img_url:"/images/pic4.png",
  old_price:"$160"

}
]


export default function 
Products() {
  return (
    <div className=' w-full h-full sm:h-[500px] mt-10'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12'>NEW ARRIVALS
        </h2>
        <div className='flex flex-col md:flex-col-2 lg:flex-row justify-center md:justify-evenly items-center'>
          {
            product.map((data ) => {
              return(
              <div  key={data.id} className='w-[190px] h-190px] md:w-[295px] md:h-[298px] bg-[#F0EEED] rounded-[20px] m-10'>
<Link href={`/product/${data.id}`}>
<Image src={data.img_url} alt={data.title} width={200} height={100} className='w-full h-full rounded-[20px] '></Image>
</Link>             
 <p className='text-lg font-bold mt-4'>{data.title}</p>
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