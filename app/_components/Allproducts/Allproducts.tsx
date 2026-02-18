import getproducts from '@/src/api/products.api';
import React from 'react'
import ProductCard from '../productcard/Productcard';

export default async function Allproducts() {
    let data = await getproducts();
    return <>
        <div className="container w-[80%] mx-auto">
            <div className="flex flex-wrap p-5 gap-6">
                {data.map((Product:any) =>
                

                (<ProductCard key={Product._id} product={Product} />
                ))}
            </div> </div>
        ;


    </>
}
