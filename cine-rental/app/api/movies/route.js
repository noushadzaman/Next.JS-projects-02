import { getAllMovies } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET() {
  const movies = getAllMovies();
  return NextResponse.json(movies);
}
