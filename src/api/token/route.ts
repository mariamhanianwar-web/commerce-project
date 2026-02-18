import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const tokenData = { token: "example-token-123" };
  return NextResponse.json(tokenData);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const response = { message: "Token received", data: body };
  return NextResponse.json(response);
}

