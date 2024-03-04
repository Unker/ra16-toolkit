import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavoritesMovies } from '../../favoritesSlice';
import './MovieCard.css';

const Favorites = () => {
  const favoritesMovies = useSelector(state => state.favorites.movies);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = movieId => {
    dispatch(removeFromFavoritesMovies(movieId));
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favoritesMovies.length > 0 ? (
        <div>
          {favoritesMovies.map(movie => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} />
              <div className="movie-details">
                <h3>{movie.Title} ({movie.Year})</h3>
                <button onClick={() => handleRemoveFromFavorites(movie.imdbID)}>Remove from Favorites</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No favorite movies yet</div>
      )}
    </div>
  );
};

export default Favorites;
