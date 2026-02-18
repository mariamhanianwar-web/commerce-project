import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
export async function GET(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!token?.accessToken) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );}
  const rep = await fetch(
    `${process.env.API}/cart`,
    {
      method: "GET",
      headers: {
        token: token.accessToken as string,
      },});
  const payload = await rep.json();
  return NextResponse.json(payload);
}