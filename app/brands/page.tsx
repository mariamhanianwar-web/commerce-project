"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Brand {
  _id: string;
  name: string;
  image: string;
}

export default function BrandsPage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBrands() {
      try {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/brands"
        );
        const data = await res.json();
        setBrands(data.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBrands();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-green-700 text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Brands
        </h1>
      </section>

      {/* Brands Grid */}
      <section className="px-6 md:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brands.map((brand) => (
            <Link href={`/brands/${brand._id}`} key={brand._id}>
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-green-600 cursor-pointer">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={120}
                  height={120}
                  className="object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700 text-center">
                  {brand.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}