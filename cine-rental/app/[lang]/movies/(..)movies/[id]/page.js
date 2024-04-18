import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";

export default function page({ params: { id, lang } }) {

  return (
    <Modal>
      <MovieDetails id={id} lang={lang} />
    </Modal>
  );
}
