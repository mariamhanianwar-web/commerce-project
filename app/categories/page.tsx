import React from 'react'

export default async function Category() {
  let response = await fetch("https://ecommerce.routemisr.com/api/v1/categories", {
    cache: "no-store"
  });

  let { data } = await response.json();

  return (
    <div className="container w-[80%] mx-auto">
      <div className="flex flex-wrap">
        {data.map((category : any) => (

          <div key={category._id} className='w-1/3'>
            <div className="inner p-4">
              <img 
                src={category.image} 
                alt={category.name} 
                className='w-[325px] h-[325px] object-contain mx-auto'
              />
              <h2 className='text-2xl text-center mt-3'>
                {category.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
