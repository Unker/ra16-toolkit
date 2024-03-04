import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, APIKEY } from '../../../fakeEnv'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    searchMovies: builder.query({
      query: (searchTerm) => `?apikey=${APIKEY}&s=${searchTerm}`,
    }),
    getMovieById: builder.query({
      query: (movieId) => `?apikey=${APIKEY}&i=${movieId}`,
    }),
  }),
});

export const { useSearchMoviesQuery, useGetMovieByIdQuery } = moviesApi;
