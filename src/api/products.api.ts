import { METHODS } from "http";
import next from "next";

export default async function getproducts() {
    let response = await fetch(
        "https://ecommerce.routemisr.com/api/v1/products",
        {
            method: "GET",
            next: { revalidate: 60 },
        }
    );

    const { data } = await response.json();
    return data;
}
