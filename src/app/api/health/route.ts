import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { status: "ok", service: "rentflow360" },
    { status: 200 }
  );
}
