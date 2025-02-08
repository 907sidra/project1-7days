"use client"
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Product } from '../../../types/product';
import { allproducts, four } from "@/sanity/lib/query";
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { addToCart } from '../action/action';
import Swal from 'sweetalert2'

const Sell = () => {
  const [product ,setProduct] = useState<Product[]>([])

    useEffect(() => {
        async function fetchproduct(){
            const fetchedproduct:Product[] = await client.fetch(allproducts)
            setProduct(fetchedproduct)
        }
        fetchproduct()
    },[])


    const handleAddToCart = (e : React.MouseEvent,product:Product) => {
      e.preventDefault()
      Swal.fire({
        position : "top-right",
        icon :"success",
        title :`${product.name} added to cart`,
        showConfirmButton :false,
        timer : 1000

      })
      addToCart(product)

      
    }
  return (
        <div className='w-full h-full sm:h-[700px] pt-12 mt-8'>
        <h2 className='text-4xl md:5xl lg:6xl font-extrabold text-center'>TOP SELLING </h2>
        <div className='grid grid-cols sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 justify-center md:justify-evenly items-center m-6 p-4'>

        {product.map((products) => (
    
    <div key={products._id}>
      <Link href={`/product/${products.slug?.current}`}>
   <h2> {products.name}</h2>
   {products.image && (
    <Image src={urlFor(products.image).url()} alt="pic" width={100} height={100}/>
   )}
   {products.price}
   {products.sizes}
   <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold y-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out' onClick={(e) =>handleAddToCart(e ,products) }>Add To Cart</button>

   </Link>
    </div>
)
)}
            </div> 
            </div>

  )
}
export default Sell;