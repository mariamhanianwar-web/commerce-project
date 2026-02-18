import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slider from '../Slider/Slider';

export default async function Categoryslider() {

    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`)
    let { data } = await response.json()
    return <>
        <Slider data={data} />
    </>
}
