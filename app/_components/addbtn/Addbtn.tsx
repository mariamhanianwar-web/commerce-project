'use client'
import { Button } from '@/components/ui/button'
import { addToCart } from '@/src/api/servises/add-prod-cart'  
import {  useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-hot-toast'
export default function Addbtn({productId}:{productId:string}) {
  const QueryClient= useQueryClient()
  //const { data , isPending , error , isError , mutate:addProductToCart}= useMutation({
  const { data, isPending , error , isError , mutate:addProductToCart}=useMutation({
    mutationFn:addToCart,
    onSuccess:(data)=> {
      toast.success(data?.message || 'Added to cart')
        
      QueryClient.invalidateQueries({queryKey:['get-cart']})
    },
    onError:()=> {
      toast.error('login first')
    },
  })
  console.log(data);
  console.log("PRODUCT ID:", productId)

  return <>
  
  <Button onClick={()=>{addProductToCart(productId)}}
                className='
    w-[80%] mx-auto bg-green-900 cursor-pointer text-white transition-all duration-300 hover:bg-green-500 hover:text-black hover:shadow-[0_0_5px_#22c55e,0_0_15px_#22c55e,0_0_30px_#22c55e] hover:ring-2 hover:ring-green-500'
                variant="outline">
                Add To cart
            </Button>
  </>
}
