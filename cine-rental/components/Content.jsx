import Movies from "@/db/data.json";
import SingleCard from "./SingleCard";

const Content = () => {

    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {
                    Movies.results.map(movie => <SingleCard
                        key={movie.id}
                        movie={movie}
                    />)
                }
            </div>
        </div>
    );
};

export default Content;