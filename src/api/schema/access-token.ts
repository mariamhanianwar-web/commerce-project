import { parseCookies } from "nookies";
import { decode } from "next-auth/jwt";

export async function getAccessToken(ctx?: any) {
  const cookies = parseCookies(ctx);
  const token =
    cookies["next-auth.session-token"] ||
    cookies["__Secure-next-auth.session-token"];

  if (!token) return null;

  const decoded = await decode({
    token,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  if (!decoded || !decoded.accessToken) return null;

  return decoded.accessToken; // ← أهم جزء
}
