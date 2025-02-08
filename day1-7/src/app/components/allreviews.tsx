import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import React from 'react'
import { FaStar } from 'react-icons/fa';

const reviews = [
    {
      name: "Samantha D.",
      feedback:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      verified: true,
        date:"Posted on August 14, 2023"
    },
    {
      name: "John D.",
      feedback:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”", 
      verified: true,
        date:"Posted on August 16, 2023"

    },
    {
      name: "Emma L.",
      feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: false,
        date:"Posted on August 17, 2023"
    },
    {
      name: "Michael B.",
      feedback:
       "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
        date:"Posted on August 18, 2023"
    },
    {
      name: "Sophia K.",
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"Posted on August 19, 2023"
    },
    {
        name: "Ava H.",
        feedback:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        verified: true,
        date:"Posted on August 20, 2023"
      }
  ];
  let star=[
  <FaStar key={1}/>,
  <FaStar key={2}/>,
  <FaStar key={3}/>,
  <FaStar key={4}/>,
   <FaStar key={5}/>]
export default function Allreviews() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
       {/* top */}
       <div className='p-5 flex justify-between items-center'>
        <h1 className='text-2xl'>All reviews</h1>
        <div className='space-x-6'>
        <Button variant={"outline"}className='rounded-[20px] border text-lg bg-[#F0F0F0] hidden md:block text-black  hover:bg-black hover:text-white'>Latest</Button>
        <Button className='rounded-[20px] border text-lg bg-[#F0F0F0] text-black hover:bg-black hover:text-white'>Write a Review</Button>
        </div>
       </div>
     
       <div className='grid grid-cols-1 md:grid-cols-2 p-4 gap-6'>
        {
            reviews.map((data,index)=>{
                return(
                    <div className='border rounded-[20px] p-8 space-y-4' key={index}>
                         <p className='flex text-yellow-300'>{star.map((icon,index)=>( <span key={index}>{icon}
                          </span>))}

                         </p>
                        <h2 className='font-bold flex gap-2 text-xl'>{data.name}<Check className='rounded-full bg-green-600 text-white'/></h2>
                        <p className='text-gray-600 text-sm'>{data.feedback}</p>
                        <h4 className='text-gray-600'>{data.date}</h4>

                        </div>
                )
            })
        }
       </div>
    </div>
  )
}