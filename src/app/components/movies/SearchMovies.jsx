// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMovies } from '../../actions';

// const SearchMovies = () => {
//   const [searchTitle, setSearchTitle] = useState('');
//   const dispatch = useDispatch();
//   const movies = useSelector(state => state.movies);
//   const loading = useSelector(state => state.status === 'loading');
//   const error = useSelector(state => state.status === 'error');

//   const handleChange = event => {
//     setSearchTitle(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     dispatch(fetchMovies(searchTitle));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={searchTitle} onChange={handleChange} />
//         <button type="submit">Search</button>
//       </form>
//       {loading && <div>Loading...</div>}
//       {error && <div>Error: Movies not found</div>}
//       {movies.length > 0 ? (
//         <div>
//           {movies.map(movie => (
//             <MovieCard key={movie.imdbID} movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div>No movies found</div>
//       )}
//     </div>
//   );
// };

// export default SearchMovies;

import React, { useState } from 'react';
import { useSearchMoviesQuery } from './moviesApi';
import MovieCard from './MovieCard';

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
