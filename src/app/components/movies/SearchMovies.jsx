import { useSearchMoviesQuery } from './moviesApi';
import MovieCard from './MovieCard';
import { useState } from "react";

const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, error, isLoading } = useSearchMoviesQuery(searchTerm);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.Search && data.Search.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMovies;
