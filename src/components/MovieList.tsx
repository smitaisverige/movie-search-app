import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

type MovieListProps = {
  movies: Movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
  if (movies.length === 0) {
    return (
      <p className="text-center text-white text-xl">
        No movies found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </div>
  );
};

export default MovieList;