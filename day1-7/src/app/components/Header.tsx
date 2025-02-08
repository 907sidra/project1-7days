import { SearchIcon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { SheetSide } from './sheet';
import { NavigationMenuDemo } from './navigation-menu';



const Header = () => {
  return (
    <header className='flex justify-between items-center w-full h-[50px] my-6 max-w-screen-2xl mx-auto'>
     
         <div className='flex justify-center items-center'>  
         <SheetSide/>
          <h1 className='text-xl font-extrabold ml-0 md:ml-8'>SHOP.co</h1>
         </div>
         {/* nav bar */}
         <ul className='hidden md:block'>
          <li className='flex items-center space-x-5'>
          <Link href={"/"}><NavigationMenuDemo/></Link>
          <Link href={"/"}>On Sale</Link>   
          <Link href={"/product"}>New Arrivals</Link>
          <Link href={"/"}>Brands</Link></li>
         </ul>

          {/* search bar */}
          <div className=' hidden md:block '>
            <div className='flex justify-start items-center w-[350px] h-[35px] bg-[#F0F0F0] rounded-[62px]'>
            <SearchIcon className=" text-gray-400 text-xl " />
            <input
            type="text"
            className="bg-[#F0F0F0] ml-2 "
            placeholder="Search for products"
          />
          </div>
          </div>
          <div className='flex space-x-2 pr-4 mr-4'>
          <SearchIcon className=" h-6 w-6 md:hidden" /> 
          {/* cart */}
          <Link href={"/addtocart"}><ShoppingCartIcon className="h-6 w-6" /></Link>
        {/* login  */}
         <CgProfile className="h-6 w-6 " />
         
         </div>
        
    </header>
    
  )
}

export default Header