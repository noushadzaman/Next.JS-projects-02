import MovieDetails from "@/components/MovieDetails";

export default function page({ params: id }) {

  return <MovieDetails id={id}/>;
}
