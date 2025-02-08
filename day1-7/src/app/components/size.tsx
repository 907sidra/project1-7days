import Link from 'next/link'
import React from 'react'

export default function Size() {
  return (
    <div>
       <h2 className="p-4 text-xl font-bold">Choose Size</h2>
          <Link href="" className="flex flex-wrap space-x-3 p-3 mt-3 items-center">
            <div className="w-[80px] h-[40px] pt-2 bg-[#F0F0F0] hover:bg-black hover:text-white mb-2 rounded-[62px] text-center">Small</div>
            <div className="w-[80px] h-[40px] pt-2 bg-[#F0F0F0] hover:bg-black hover:text-white mb-2 rounded-[62px] text-center">Medium</div>
            <div className="w-[80px] h-[40px] pt-2 bg-[#F0F0F0] hover:bg-black hover:text-white mb-2 rounded-[62px] text-center">Large</div>
            <div className="w-[80px] h-[40px] pt-2 bg-[#F0F0F0] hover:bg-black hover:text-white mb-2 rounded-[62px] text-center">x-Large</div>
            <div className="w-[80px] h-[40px] pt-2 bg-[#F0F0F0] hover:bg-black hover:text-white mb-2 rounded-[62px] text-center">xx-large</div>
            <div className="w-[80px] h-[40px] pt-2 bg-[#F0F0F0] hover:bg-black hover:text-white mb-2 rounded-[62px] text-center">3x-large</div>
            <div className="w-[80px] h-[40px] pt-2 bg-[#F0F0F0] hover:bg-black hover:text-white mb-2 rounded-[62px] text-center">4x-large</div>
            <div className="w-[80px] h-[40px] pt-2 bg-[#F0F0F0] hover:bg-black hover:text-white mb-2 rounded-[62px] text-center">5x-large</div>
          </Link>
    </div>
  )
}