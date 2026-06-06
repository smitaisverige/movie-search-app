import { useState } from "react";

import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

import type { Movie } from "./types/movie";

const App = () => {
  const [search, setSearch] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    if (search.trim() === "") return;

    const API_KEY = import.meta.env.VITE_OMDB_KEY;

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(search)}`,
    );

    const data = await response.json();

    setMovies(data.Search || []);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-right bg-no-repeat bg-[url('/background.jpg')]">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-8">
            Movie Search App
          </h1>

          <SearchBar
            search={search}
            setSearch={setSearch}
            fetchMovies={fetchMovies}
          />

          <MovieList movies={movies} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
