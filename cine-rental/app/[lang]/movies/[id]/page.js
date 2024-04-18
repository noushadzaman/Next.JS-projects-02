import MovieDetails from "@/components/MovieDetails";

export default function page({ params: { id, lang } }) {
  return <MovieDetails id={id} lang={lang} />;
}
