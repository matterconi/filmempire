// Import the API service and middleware
import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from '../services/TMDB'; // Adjust the path as necessary to where your tmdApi is defined
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import userReducer from '../features/auth';

export default configureStore({
  reducer: {
    // Add the API reducer to the store with the key 'tmdApi'
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});