import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { link } from "fs/promises";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Addbtn from "../addbtn/Addbtn";

export default function ProductCard({ product }) {
    return (
        <Card className="w-full md:w-1/2 lg:w-1/4 ">
            <Link href={`products/${product.id}`}>
                <CardContent>
                    <img
                        src={product.imageCover}
                        alt={product.title}
                        className="w-full h-72 object-contain rounded-md bg-white"
                    />
                </CardContent>
                <CardHeader>
                    <CardTitle className="line-clamp-1">{product.title}</CardTitle>
                    <CardDescription>{product.category.name}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <div className="flex justify-between w-full">
                        <span>{product.price} EGP</span>
                        <span>
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            {product.ratingsAverage}
                        </span>
                    </div>
                </CardFooter>
            </Link>
            <Addbtn productId={product._id}/>
        </Card>
    );
}
