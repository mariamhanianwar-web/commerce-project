export async function updatecartitem ({productId , count}:{productId:string , count:number}){
    const token = localStorage.getItem("userToken")

    if (!token) {
        throw new Error("Unauthorized")
    }
    const resp = await fetch(
        `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
        {
            method: "PUT",
            headers: {
                token: token,
                "Content-Type": "application/json",
            },
        body:JSON.stringify({
            count:count
        })
        })
    const payload = await resp.json()
    return payload
}