import { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesListQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { MovieList, Pagination, FeaturedMovie } from '..';

const Movies = () => {
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const [page, setPage] = useState(1); 
  const [movies, setMovies] = useState([]); 
  const { data, isLoading, error } = useGetMoviesListQuery({ genreIdOrCategoryName, page, searchQuery });
  const xl = useMediaQuery((theme) => theme.breakpoints.up('xl'));
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const md = mdUp && lgDown;

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const numberOfMovies = xl ? 19 : 17;

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data, genreIdOrCategoryName, page]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem"/>
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center">
        An error has occurred
      </Typography>
    );
  }

  if (!data || !data.results || data?.results?.length === 0) {
    return (
      <Box display='flex' alignItems='center' justifyContent="center" mt='10px'>
        <Typography variant="h4" color="error" align="center">
          No movies that match your search
          <br />
          Try another search
        </Typography>
      </Box>
    );
  }

  return (
    <div>
      {!isMobile && <FeaturedMovie movie={data.results[0]} />}
      <MovieList movies={movies} numberOfMovies={md ? 19 : numberOfMovies} excludeFirst={!isMobile} isMobile={isMobile}/>
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages}/>
    </div>
  );
};

export default Movies;