    "use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/product'
import { getCartItems } from '../action/action'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { CgChevronRight } from 'react-icons/cg'
import Swal from 'sweetalert2'
import order from '@/sanity/schemaTypes/order'
import { client } from '@/sanity/lib/client'

export default function Checkout() {

const [cartItems , setCartItems] = useState<Product[]>([])
const [discount, setDiscount] = useState<number>(0)
const [formValues , setFormValues] = useState({
    firstName : "",
    lastName: "",
    email: "",
    phone:"",
    address: "",
    zipCode: "",
    city: "",
})

const [formErrors, setFormErrors] = useState({
    firstName:false,
    lastName:false,
    email:false,
    phone:false,
    address:false,
    zipCode:false,
    city:false,
})
 useEffect(() => {
    setCartItems(getCartItems())
    const appliedDiscount = localStorage.getItem("appliedDiscount")
    if (appliedDiscount){
        setDiscount(Number(appliedDiscount))
    }
 } ,[])
  const subTotal =cartItems.reduce(
    (total ,item) => total + item.price * item.stock, 0)
    const handleInputChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value 
        })
    }

    const validateForm =() => {
        const errors = {
            firstName :!formValues.firstName,
            lastName :!formValues.lastName,
            email:!formValues.email,
            phone:!formValues.phone,
            address:!formValues.address,
            zipCode:!formValues.zipCode,
            city:!formValues.city,
        };
        setFormErrors(errors); 
        return Object.values(errors).every((error) => !error);
        
    }
    const handlePlaceOrder = async () => {

              Swal.fire({
                        title:"your order is being processed",
                        text:"please wait a moment",
                        icon:"info",
                        showCancelButton:true,
                        confirmButtonColor:"#3085d6",
                        cancelButtonColor:"#d33",
                        confirmButtonText:"proceed",
            
                    }).then((result) => {
                        if(result.isConfirmed){
                   
                    if(validateForm()){
                        localStorage.removeItem("appliedDiscount");
                        Swal.fire(
            
                            "Order Placed",
                            "Your order has been placed successfully",
                            "success"
                        );
                    }
                    else{
                        Swal.fire(
                            "Error",
                            "Please fill all the fields",
                            "error"
                        )
                    }
                }
            });

        const OrderData ={
            _type :"order",
            firstName: formValues.firstName,
            lastName: formValues.lastName,  
            email: formValues.email,
            phone: formValues.phone,
            address: formValues.address,
            zipCode: formValues.zipCode,
            city: formValues.city,
            cartItems: cartItems.map((item) => ({
                _type:"reference",
                _ref:item._id
            })),
            total: subTotal,
            discount: discount,
            orderDate: new Date().toISOString(),

        };
        try {
            await client.create(OrderData)
            localStorage.removeItem("appliedDiscount");
        }
        catch(error){
            console.error("Error", error)

        }
        //     if(response.ok){
        //         localStorage.removeItem("appliedDiscount");
        //         Swal.fire(
        //             "Order Placed",
        //             "Your order has been placed successfully",
        //             "success"
        //         );
        //     }
        //     else{
        //         Swal.fire(
        //             "Error",
        //             "Something went wrong",
        //             "error"
        //         )
        //     }
        // };
        
        
    }
    
  return (
    <div className='min-h-screen bg-gray-50'>
        <div className='mt-6'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <nav className='flex items-center gap-2 py-4'>
                    <Link  href={"/addtocart"} className='text-[#00000] hover-text-black transition text-lg'>cart
                    </Link><CgChevronRight/>
                    <span>Checkout</span>
                </nav>

            </div>
        </div>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='bg-white border rounded-lg p-4 space-y-6'>
                    <h2 className='text-lg font-semibold mb-4'>
                        Order Summary
                    </h2>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) =>(
                            <div key={item._id} className='flex item-center gap-8 py-3 border-4'>
                                <div className='w-20 h-46 rounded overflow-hidden ml-8'>
                                    {item.image && (
                                    <Image src={urlFor(item.image).url()}
                                    alt="image"
                                    height={50}
                                    width={50}
                                    className="object-cover w-full h-full"/>
                                     )}
                    </div>
                              <div className='flex-1'>
                                    <h3 className='text-sm font-medium'>
                                        {item.name}
                                    </h3>
                                    <p className='text-xs text-gray-500'>Quantity : {item.stock}</p>
                                 </div>
                                 <p className='text-xs font-medium mr-6'>${item.price + item.stock}</p>
                            </div>
                        ))
                    ):(
                        <p>no items in cart</p>
                    
                    )}
                    <div className='text-right pt-4'>
                        <p className='text-sm'>Subtotal : <span className='font-medium'>$ {subTotal}</span></p>
                        <p className='text-sm'>Discount : <span className='font-medium'>$ {discount}</span></p>
                        <p className='text-lg font-semibold'>Total : $ {subTotal.toFixed()}</p>
                    </div>
                </div>
                <div  className='bg-white border rounded-lg p-4 space-y-8'>
                    <h2 className='text-lg font-semibold mb-4'>Billing Information</h2>
                
                <div>
                    <label htmlFor='firstName'className='mr-4'> Fist Name</label>
                    <input
                    type="text"
                    id="firstName"
                    placeholder='  Enter Your First Name'
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    className='border-2'
                    />
                    {formErrors.firstName && (
                        <p className='text-red-600 text-sm font-light'>First Name is Required!</p>
                    )}
                </div>
                <div>
                    <label htmlFor='lastname' className='mr-4'> Last Name</label>
                    <input
                    type="text"
                    id="lastName"
                    placeholder='  Enter Your Last Name'
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    className='border-2'
                    /> 
                    {formErrors.lastName && (
                        <p className='text-red-600 text-sm font-light'>Last Name is Required!</p>
                    )}
                </div>
                <div>
                    <label htmlFor='phone' className='mr-4'>Phone</label>
                    <input
                    type="text"
                    id="phone"
                    placeholder='  Enter Your phone'
                    value={formValues.phone}
                    onChange={handleInputChange}
                    className='border-2'
                    /> 
                    {formErrors.phone && (
                        <p className='text-red-600 text-sm font-light'>Number is Required!</p>
                    )}
                </div>
                <div>
                    <label htmlFor='email'className='mr-4'> Email </label>
                    <input
                    type="text"
                    id="email"
                    placeholder='  Enter Your Email'
                    value={formValues.email}
                    onChange={handleInputChange}
                    className='border-2'
                    />
                    {formErrors.email && (
                        <p className='text-red-600 text-sm font-light'>email is Required!</p>
                    )}
                </div>
                <div>
                    <label className='mr-4'> address</label>
                    <input
                    type="text"
                    id="address"
                    placeholder=' Enter Your address'
                    value={formValues.address}
                    onChange={handleInputChange}
                    className='border-2'
                    /> 
                    {formErrors.address && (
                        <p className='text-red-600 text-sm font-light'> address is Required!</p>
                    )}
                </div>
                <div>
                    <label className='mr-4'> Zip Code</label>
                    <input
                    type="text"
                    id="zipCode"
                    placeholder='  Enter Your Zip Code'
                    value={formValues.zipCode}
                    onChange={handleInputChange}
                    className='border-2'
                    />
                    {formErrors.firstName && (
                        <p className='text-red-600 text-sm font-light'>Zip Code is Required!</p>
                    )}
                </div>
                <div>
                    <label className='mr-4'> City</label>
                    <input
                    type="text"
                    id="city"
                    placeholder='  Enter Your city Name'
                    value={formValues.city}
                    onChange={handleInputChange}
                    className='border-2 '
                    />
                    {formErrors.firstName && (
                        <p className='text-red-600 text-sm font-light'>Name is Required!</p>
                    )}
                </div>
                
                <button onClick ={handlePlaceOrder} className='w-full h-12 mt-4 bg-[#F0F0F0] rounded-[22px] hover:bg-black hover:text-white'>
                    Place Order</button>
                    </div>
            </div>
        </div>
    </div>
  )
}
