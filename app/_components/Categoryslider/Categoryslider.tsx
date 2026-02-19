"use client";

import React, { useEffect, useState } from 'react'
import Slider from '../Slider/Slider';

export default function Categoryslider() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getCategories() {
            try {
                let response = await fetch("https://ecommerce.routemisr.com/api/v1/categories");
                let result = await response.json();
                setData(result.data);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        }
        getCategories();
    }, []);

    return (
        <>
            <Slider data={data} />
        </>
    );
}
