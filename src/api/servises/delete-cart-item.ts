export async function deletecartitem(productId: string) {
    const token = localStorage.getItem("userToken")

    if (!token) {
        throw new Error("Unauthorized")
    }
    const resp = await fetch(
        `https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
        {
            method: "DELETE",
            headers: {
                token: token,
                "Content-Type": "application/json",
            },})
    const payload = await resp.json()
    return payload
}