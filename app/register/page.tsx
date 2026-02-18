'use client'
import React from "react"
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import axios from "axios"
import {Form,FormField,FormItem,FormLabel,FormControl,FormMessage,
} from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { schema } from "@/src/api/schema/registerValidation.schema"
export default function Register() {
  const x = useRouter()
  const form = useForm({
    defaultValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:'',
    },
    resolver:zodResolver(schema)})
  async function handelRegister(values: any){
    
    console.log("FORM SUBMITTED")
    try{
      let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
      console.log(data);
      if(data.message=='success'){
      toast.success("Register Successfully")
      x.push('/login')
      }
    } catch(error){
      console.log(error);
    }}
  console.log(form)
  return <>
  <div className="container my-15 w-[60%] mx-auto">
    <h1 className='text-green-500 text-4xl text-center '>Register</h1>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handelRegister)} action="">
      <FormField 
      control={form.control}
      name="name"
      render={({ field })=>(
        <FormItem>
          <FormLabel className="mb-2">Name</FormLabel>
          <FormControl>
            <Input className="mb-5" type="text" placeholder='Enter your name' {...field}/>
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}/>        
      <FormField 
      control={form.control}
      name="email"
      render={({ field })=>(
        <FormItem>
          <FormLabel className="mb-2">Email</FormLabel>
          <FormControl>
            <Input className="mb-5" type="email" placeholder='Enter your Email' {...field}/>
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}/>        
      <FormField 
      control={form.control}
      name="password"
      render={({ field })=>(
        <FormItem>
          <FormLabel className="mb-2">Password</FormLabel>
          <FormControl>
            <Input className="mb-5" type="password" placeholder='Enter your Password' {...field}/>
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}/>        
      <FormField 
      control={form.control}
      name="rePassword"
      render={({ field })=>(
        <FormItem>
          <FormLabel className="mb-2">RePassword</FormLabel>
          <FormControl>
            <Input className="mb-5" type="password" placeholder='Enter your Repassword ' {...field}/>
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}/>     
      <FormField 
      control={form.control}
      name="phone"
      render={({ field })=>(
        <FormItem>
          <FormLabel className="mb-2">Phone</FormLabel>
          <FormControl>
            <Input className="mb-5" type="tel" placeholder='Enter your Phone number' {...field}/>
          </FormControl>
          <FormMessage/>
        </FormItem>
      )}/>     
      <Button 
  type="submit"   onClick={() => console.log("BUTTON CLICKED")}
  className="w-full bg-green-400 text-white hover:bg-green-600 hover:text-white text-amber-100 cursor-pointer"
  variant="outline">
  Sign up
</Button>
    </form>
    </Form>
  </div>
  </>}
