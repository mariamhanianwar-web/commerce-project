"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
interface Brand {
  _id: string;
  name: string;
  image: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export default function SpecificBrandPage() {
  const { id } = useParams();
  const [brand, setBrand] = useState<Brand | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBrand() {
      try {
        const res = await fetch(
          `https://ecommerce.routemisr.com/api/v1/brands/${id}`
        );

        const data = await res.json();
        setBrand(data.data);
      } catch (error) {
        console.error("Error fetching brand:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchBrand();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-green-700 text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (!brand) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-xl font-semibold">
          Brand Not Found
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center border border-green-200">

        <Image
          src={brand.image}
          alt={brand.name}
          width={200}
          height={200}
          className="mx-auto object-contain mb-6"
        />

        <h1 className="text-3xl font-bold text-green-800 mb-4">
          {brand.name}
        </h1>

        <p className="text-gray-500 text-sm mb-2">
          Slug: {brand.slug}
        </p>

        <p className="text-gray-400 text-xs">
          Created: {new Date(brand.createdAt).toLocaleDateString()}
        </p>

      </div>
    </div>
  );
}