import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";

export default function page({ params: id }) {
  return (
    <Modal>
      <MovieDetails id={id} />
    </Modal>
  );
}
