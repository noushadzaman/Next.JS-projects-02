import { getAllMovies } from "@/lib/data";
import SingleCard from "./SingleCard";

const Content = () => {
    const allMovies = getAllMovies();

    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {
                    allMovies.results.map(movie => <SingleCard
                        key={movie.id}
                        movie={movie}
                    />)
                }
            </div>
        </div>
    );
};

export default Content;