"use client" 
import React from 'react'
import img1 from "../../images/21763.jpg"
import img2 from "../../images/clothing-rack-with-floral-hawaiian-shirts-hangers-hat.jpg"
import img3 from "../../images/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background (1).jpg"
import img4 from "../../images/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background.jpg"
import img5 from "../../images/still-life-spring-wardrobe-switch.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import Image from 'next/image'
import { Autoplay } from 'swiper/modules'

export default function Homeslider() {
  return <>
  <div className="container my-10 w-[80%] mx-auto flex">
    <div className="w-3/4 my-0">
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{delay:2000}}
    >
      <SwiperSlide>
        <Image src={img1} alt='test' className='h-120 w-full object-contain'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img2} alt='test' className='h-120 w-full object-cover'/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img3} alt='test' className='h-120 w-full object-cover'/>
      </SwiperSlide>
          </Swiper>
    </div>
    <div className="w-1/4 my-0">
    <Image src={img4} alt='test' className='h-60 w-full object-cover'/>
    <Image src={img5} alt='test' className='h-60 w-full object-cover'/>
    </div>
    
  </div>
  
  
  </>
}
