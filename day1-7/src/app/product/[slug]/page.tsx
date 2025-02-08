import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Check, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { BreadcrumbDemo } from "@/app/components/breadcrumb";

interface ProductPageProps {
    params :  Promise<{slug : string}>
}

async function getProduct(slug : string): Promise<Product> {
    return client.fetch (
        groq`*[_type == "products" && slug.current == $slug][0]{
            _id,
            name, 
            _type,
            image,
            price,
        }`,{slug}
    )
}

export default async function ProductPage({params}:ProductPageProps ){
    const {slug} = await params;
    const product = await getProduct(slug);
    if (!product) {
        return <p className="text-red-600 text-center text-2xl">Product not found</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4">
            <BreadcrumbDemo/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square ">
                    {product.image && (
                        <Image
                        src ={urlFor(product.image).url()}
                        alt={product.name}
                        width={600}
                        height ={500}
                        className="rounded-lg shadow-md w-[00px] h-[600px] "
                        />
                    ) }
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    <p className="text-2xl font-sans">${product.price}</p>
                    <p>{product.colors}</p>
                    <p>{product.description}</p>
                    {/* colors */}
        <h2 className="text-gray-600 font-extralight pt-8">Select colors</h2>
        <div className="flex space-x-4">
          <div className="w-[40px] h-[40px] bg-[#31344F] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" /></div>
          <div className="w-[40px] h-[40px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" /></div>
          <div className="w-[40px] h-[40px] bg-[#4F4631] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" /></div>
        </div>
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
        </div>
    )
}