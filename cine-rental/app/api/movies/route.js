import Movies from "@/db/data.json";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(Movies);
}
