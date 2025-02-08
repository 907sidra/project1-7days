import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import Offers from './offers';

export default function Footer() {
  return (
    <main className='bg-[#F0F0F0] w-full h-full md:h-[500px] relative mt-32 max-w-screen-2xl mx-auto'>
       <span className='absolute top-[-90px]'> <Offers/></span>

{/* top */}
<div className='flex md:flex-row flex-col md:justify-evenly justify-between py-16 pt-40 '>
  <div className='space-y-8 w-full md:w-[300px] px-4 md:px-0 '>
  <ul>
    <h2 className='text-3xl font-bold'>SHOP.CO</h2>
  </ul>
  <p className='text-sm'>We have clothes that suits your style and which youre proud to wear.From women to men.</p>
  {/* icon */}
  <div className='flex items-center gap-4'>
  <Link href={"https://twitter.com"} className='flex items-center justify-center bg-white w-6 h-6 border border-black rounded-full hover:bg-black' ><FaTwitter/></Link>
  <Link href={"/https://twitter.com"} className='flex items-center justify-center bg-white w-6 h-6 border border-black rounded-full hover:bg-black'><FaFacebook/></Link>
  <Link href={"/https://twitter.com"} className='flex items-center justify-center bg-white w-6 h-6 border border-black rounded-full hover:bg-black'> <FaInstagram/></Link>
  <Link href={"/https://twitter.com"} className='flex items-center justify-center bg-white w-6 h-6 border border-black rounded-full hover:bg-black'><FaGithub/></Link>
     </div>
     
</div>
{/* mid */}
<div className='flex md:flex-row flex-col sm:space-y-2 justify-evenly px-4 pt-6 md:pt-0 w-full md:w-[900px] '>
  <ul className='space-y-4 mb-2'>
    <h2 className='font-bold'>COMPANY</h2>
    <li>About </li>
    <li>Features </li>
    <li>Works</li>
    <li>Career</li>
    
  </ul>
  {/* box2 */}
  <ul className='space-y-4 mb-2'>
    <h2 className='font-bold'>HELP</h2>
    <li>Customer Support</li>
    <li>Delivery Details</li>
    <li>Terms & Conditions</li>
    <li>Privacy policy</li>
  </ul>
  {/* box3 */}
  <ul className='space-y-4 mb-2'>
    <h2 className='font-bold'>FAQ</h2>
    <li>Account</li>
    <li>Manage Deliveries</li>
    <li>Orders</li>
    <li>Payments</li>
    
  </ul>
  {/* box4*/}
  <ul className='space-y-4 mb-2'>
    <h2 className='font-bold'>RESOURCES</h2>
    <li>Free eBooks</li>
    <li>Develooment Tutorials</li>
    <li>How to -Blogs</li>
    <li>Youtube Playlist</li>
    </ul>
</div>
</div>
{/* bottom */}
<div className='flex md:flex-row flex-col justify-between bg-[#F0F0F0] items-center mx-0 md:mx-10 px-0 md:px-10'>
  <div>
  <p>shop © 2000-2021, All rights reserved</p>
  </div>
  <div className='flex'>
  <Image src={"/images/b1.png"} width={50} height={100} alt="pic"></Image>
  <Image src={"/images/b.png"} width={50} height={100} alt="pic"></Image>
  <Image src={"/images/b2.png"} width={50} height={100} alt="pic"></Image>
  <Image src={"/images/b3.png"} width={50} height={100} alt="pic"></Image>
  <Image src={"/images/b4.png"} width={50} height={100} alt="pic"></Image>
  </div>
 </div>
    </main>
  )
}