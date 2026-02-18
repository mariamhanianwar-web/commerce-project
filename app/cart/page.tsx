'use client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { CartResponse } from '../types/Cart-response'
import Loading from '../products/loading'
import { deletecartitem } from '@/src/api/servises/delete-cart-item'
import { toast } from 'sonner'
export default function Cart() {
    const QueryClient= useQueryClient()
  const { data: cartData, isLoading, isError } = useQuery<CartResponse>({
    queryKey: ['get-cart'],
    queryFn: async () => {
      const resp = await fetch('/api/cart')
      if (!resp.ok) throw new Error('Failed to fetch cart')
      return resp.json()
    },})
  const {mutate:delcartitem , isPending }=useMutation({
    mutationFn:deletecartitem,
    onSuccess:()=>{
      toast.success('product updated succe')
            QueryClient.invalidateQueries({queryKey:['get-cart']})},
    onError:()=>{
      toast.success('error')
    }})
  if (isLoading) return <Loading />
  if (isError) return <h1 className="text-red-500 text-center">Error loading cart</h1>
  if (!cartData?.data?.products?.length)
    return <h1 className="text-center">Cart is empty 🛒</h1>
    console.log(cartData)

  return (
    <div className="w-[80%]  relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
          <tr>
            <th className="px-16 py-3"><span className="sr-only">Image</span></th>
            <th className="px-6 py-3 font-medium">Product</th>
            <th className="px-6 py-3 font-medium">Qty</th>
            <th className="px-6 py-3 font-medium">Price</th>
            <th className="px-6 py-3 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {cartData.data.products.map((prod) => (
            <tr
              key={prod._id}
              className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
            >
              <td className="p-4">
                <img
                  src={prod.product.imageCover}
                  className=" w-16 md:w-24 max-w-full max-h-full"
                  alt={prod.product.title}
                /></td>
              <td className="px-6 py-4 font-semibold text-heading">
                {prod.product.title}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button className="h-6 w-6 rounded-full border">-</button>
                  <span>{prod.count}</span>
                  <button className="h-6 w-6 rounded-full border">+</button>
                </div></td>
              <td className="px-6 py-4 font-semibold text-heading">
                {prod.price} EGP</td>
              <td className="px-6 py-4">
                <button onClick={()=>{delcartitem(prod.product._id)}} className="font-medium text-fg-danger hover:underline">
                  Remove
                </button>
              </td></tr>))}
        </tbody>
      </table>
    </div>)} 