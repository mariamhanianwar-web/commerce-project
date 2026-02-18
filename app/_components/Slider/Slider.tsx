'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

type Props = {
  data: any[]
}

export default function Slider({ data }: Props) {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={7}
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
    >
      {data?.map((product) => (
        <SwiperSlide key={product._id}>
          <div className=" flex flex-col items-center">
            <img
              className="w-full h-50 object-cover"
              src={product.image}
              alt={product.name}
            />
            <h2 className="text-center mt-2 text-m font-medium">
              {product.name}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
