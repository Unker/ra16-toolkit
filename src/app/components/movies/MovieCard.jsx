import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMovieByIdQuery } from './moviesApi';
import { addToFavoritesMovies, removeFromFavoritesMovies } from '../../favoritesSlice';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favoritesMovies = useSelector(state => state.favorites.movies);
  const { data, error, isLoading } = useGetMovieByIdQuery(movie.imdbID);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleAddToFavorites = () => {
    dispatch(addToFavoritesMovies(movie));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavoritesMovies(movie.imdbID));
  };

  const isFavorite = favoritesMovies.some(favorite => favorite.imdbID === movie.imdbID);

  return (

    <div className="movie-card">
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <img src={movie.Poster} alt={movie.Title} />
          <div className="movie-details">
            <h2>{data.Title}</h2>
            <div className="movie-details-list">
              <p>Year: {data.Year}</p>
              <p>Genre: {data.Genre}</p>
              <p>Runtime: {data.Runtime}</p>
              <p>Director: {data.Director}</p>
              <p>Actors: {data.Actors}</p>
              <p>IMDb Rating: {data.imdbRating}</p>
            </div>
            {isFavorite ? (
              <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
            ) : (
              <button onClick={handleAddToFavorites}>Add to Favorites</button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
