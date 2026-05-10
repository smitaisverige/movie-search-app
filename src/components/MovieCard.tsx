import type { Movie } from "../types/movie";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.Title}
        className="w-full h-[400px] object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">
          {movie.Title}
        </h2>

        <p className="text-gray-600">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;