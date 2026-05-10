type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  fetchMovies: () => void;
};

const SearchBar = ({
  search,
  setSearch,
  fetchMovies,
}: SearchBarProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 p-3 rounded-lg border border-gray-300 outline-none text-white placeholder-gray-300 bg-gray-800"
      />

      <button
        onClick={fetchMovies}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;