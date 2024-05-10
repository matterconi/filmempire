import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Assuming REACT_APP_TMD_API_KEY is correctly set in your .env file
const API_KEY = 'de3a171c0b1b6a67bd62567eb91a752f'

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        //Get movies list 
        getMoviesList: builder.query({
            query: ({ genreIdOrCategoryName, page, searchQuery }) => {
                console.log('genreIdOrCategoryName', genreIdOrCategoryName)
                if(searchQuery) {
                    return `search/movie?query=${searchQuery}&page=${page}&api_key=${API_KEY}`
                } 
                else if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string' ) {
                    return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${API_KEY}`
                } else if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
                    return `discover/movie?api_key=${API_KEY}&with_genres=${genreIdOrCategoryName}&page=${page}`
                }
                return `movie/popular?page=${page}&api_key=${API_KEY}`
            }
        }),
        //Get genres
        getMoviesGenres: builder.query({
            query: () => `genre/movie/list?api_key=${API_KEY}`,
        }),
        //Get movies by popularity
        getMoviesByPopularity: builder.query({
            query: ({ currentGenreOrCategoryName, page }) => {
                if(currentGenreOrCategoryName && typeof currentGenreOrCategoryName === 'string' ) {
                    return `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${currentGenreOrCategoryName}&api_key=${API_KEY}`
                    }
                if(currentGenreOrCategoryName && typeof currentGenreOrCategoryName === 'number') {
                    return `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${currentGenreOrCategoryName}&api_key=${API_KEY}`
                }
            }
        }),

        //Get movie details
        getMovieDetails: builder.query({
            query: (id) => `movie/${id}?append_to_response=videos,credits&api_key=${API_KEY}`
        }),

        //Get recommended movies
        getRecommendedMovies: builder.query({
            query: ({id, list}) => `movie/${id}/${list}?api_key=${API_KEY}`
        }),

        getActorInformation: builder.query({
            query: (id) => `person/${id}?api_key=${API_KEY}`
        }),
        getActorMovies: builder.query({
            query: ({ id, page }) => `discover/movie?with_cast=${id}&page=${page}&api_key=${API_KEY}`
        }),

        getList: builder.query({
            query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?api_key=${API_KEY}&session_id=${sessionId}&page=${page}`
        })
    }),
});

// This export will allow you to import the hook directly and use it in your components
export const { 
    useGetMoviesListQuery,
    useGetMoviesGenresQuery,
    useGetMoviesByPopularityQuery,
    useGetMovieDetailsQuery,
    useGetRecommendedMoviesQuery,
    useGetActorInformationQuery,
    useGetActorMoviesQuery,
    useGetListQuery,
} = tmdbApi;
