import { getAccessToken } from "../schema/access-token"

export async function addToCart(productId: string) {
  const token = await getAccessToken()

  if (!token) {
    throw new Error("Unauthorized")
  }

  const resp = await fetch(`${process.env.API}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "token": token 
    },
    body: JSON.stringify({ productId }),
  })

  const payload = await resp.json()
  return payload
}
