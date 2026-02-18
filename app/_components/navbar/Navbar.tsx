'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export default function Navbar() {
    let path = usePathname()
    return (
        <>
            <nav className="bg-green-900 py-5 px-17 flex justify-between items-center">
                <div >
                    <ul className="flex flex-col md:flex-row gap-4 text-white text-xl">
                    <li><Link href={'/'} className="flex items-center"> 
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="text-2xl">freshcart</span>
                    </Link></li>
                    <li><Link className={path=="/home" ? "active":""} href={'/home'}>Home</Link></li>
                    <li><Link className={path=="/cart" ? "active":""} href={'/cart'}>Cart</Link></li>
                    <li><Link className={path=="/products" ? "active":""} href={'/products'}>Products</Link></li>
                    <li><Link className={path=="/categories" ? "active":""} href={'/categories'}>Categories</Link></li>
                    <li><Link className={path=="/brands" ? "active":""} href={'/brands'}>Brands</Link></li>
                </ul>
                </div>
                <div>
                    <ul className="flex gap-2 text-white">
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-brands fa-linkedin"></i></li>
                        <li><i className="fa-brands fa-tiktok"></i></li>
                        <li><a href="/register">register</a></li>
                        <li><a href="/login">login</a></li>
                        <li><a href="">signout</a></li>
                    </ul>
                </div>
            </nav>
        </>);}
