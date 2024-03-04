import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavoritesMovies: (state, action) => {
      state.movies.push(action.payload);
    },
    removeFromFavoritesMovies: (state, action) => {
      state.movies = state.movies.filter(movie => movie.imdbID !== action.payload);
    },
  },
});

export const { addToFavoritesMovies, removeFromFavoritesMovies } = favoritesSlice.actions;
export default favoritesSlice.reducer;
