'use client'
import React from "react"
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import {
  Form, FormField, FormItem,
  FormLabel, FormControl, FormMessage,
} from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { schemaaa } from "@/src/api/schema/Login"
import { signIn } from "next-auth/react"
export default function Login() {
  const router = useRouter()
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(schemaaa)
  })
  async function handleLogin(values: any) {
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false, 
    })
    if (result?.ok) {
      toast.success("Login Successfully")
      router.push("/home")
    } else {
      toast.error("Invalid email or password")
    }
  }
  return (
    <div className="container my-15 w-[60%] mx-auto">
      <h1 className='text-green-500 text-4xl text-center'>Login</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2">Email</FormLabel>
                <FormControl>
                  <Input className="mb-5" type="email" placeholder='Enter your Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-2">Password</FormLabel>
                <FormControl>
                  <Input className="mb-5" type="password" placeholder='Enter your Password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-green-400 text-white hover:bg-green-600">
            Log in
          </Button>
        </form>
      </Form>
    </div>
  )
}