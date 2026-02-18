import React from 'react'
import { Button } from "@/components/ui/button"
import Addbtn from '@/app/_components/addbtn/Addbtn'

export default async function productdetails({ params } :{params:{id:string}}) {
    let {id} = await params
    let response =await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    let {data} = await response.json()
    return <>
        <div className="container flex-col md:flex-row flex my-10 w-[80%] mx-auto">
            <div className="w-full md:w-1/4 ">
                <img src={data.imageCover} alt="" />
            </div>
            <div className="w-full md:w-3/4 xlmt-23 mx-6">
            <h1 className='text-4xl font-semibold my-3'>{data?.category?.name}</h1>
                <h3 className='my-4'>{data.description}</h3>
                <div className="flex justify-between w-full mb-5">
                    <span>{data.price} EGP</span>
                    <span>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        {data.ratingsAverage}
                    </span>
                    <Addbtn productId={data._id}/>
                </div>
            </div>
        </div>
    </>
}
