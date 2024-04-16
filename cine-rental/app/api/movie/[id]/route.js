import Movies from "@/db/data.json";

export function GET(_req, { params }) {
  const movieId = params?.id;
  const data = Movies?.results.find((movie) => movie.id === Number(movieId));
  return Response.json(data);
}

export async function PATCH(req, { params }) {
  const title = await req.json();
  const movieId = params?.id;
  const titleIndex = Movies.results.findIndex(
    (movie) => movie.id === parseInt(movieId)
  );
  Movies.results[titleIndex].title = title.title;

  return Response.json(Movies.results[titleIndex]);
}

export async function DELETE(_req, { params }) {
  const movieId = params?.id;
  const movieIndex = Movies.results.findIndex(
    (movie) => movie.id === parseInt(movieId)
  );
  const movieToDelete = Movies.results[movieIndex];
  Movies.results.splice(movieIndex, 1);

  return Response.json(movieToDelete);
}
