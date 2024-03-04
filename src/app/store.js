import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { moviesApi } from './components/movies/moviesApi';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
	reducer: {
		[moviesApi.reducerPath]: moviesApi.reducer,
		favorites: favoritesReducer,

	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;