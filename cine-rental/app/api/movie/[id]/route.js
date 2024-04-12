import { getMoviesById } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET(req, { params }) {
  const movieId = params?.id;
  const data = getMoviesById(movieId);
  return NextResponse.json(data);
}
