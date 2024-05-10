import { useEffect, useState } from 'react';
import { MovieList } from '..';
import { Grid, Typography, Button, ButtonGroup, Box, CircularProgress,useMediaQuery, Rating } from '@mui/material';
import { StyledOuterGrid, StyledGrid, StyledImg, StyledGenresGrid, StyledGenreImg, StyledLink, StyledCastGrid, StyledCastImg, StyledGridButtonGroup, StyledDivButtonGroup, StyledModal, StyledIframe, StyledContainerSpaceAround, StyledImageGrid } from './styles';

import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Star, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useGetMovieDetailsQuery, useGetRecommendedMoviesQuery, useGetListQuery } from '../../services/TMDB';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import genreIcons from '../../assets/genres';
import { userSelector } from '../../features/auth';

const MovieInformation = () => {
  const user = useSelector(userSelector);
  const { id } = useParams();
  const { data, error, isLoading } = useGetMovieDetailsQuery(id);
  const { data: recommendedMovies, error: isError, isLoading: isIsLoading } = useGetRecommendedMoviesQuery({id, list: 'recommendations'});
  const { data: favoriteMovies, error: listError, isLoading: isListLoading } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1})
  const { data: watchListMovies, error: watchError, isLoading: isWatchLoading } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1})

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isMovieFavorite, setIsMovieFavorite] = useState(false);
  const [isMovieWatchListed, setIsMovieWatchListed] = useState(false);
  const API_KEY = "de3a171c0b1b6a67bd62567eb91a752f"

  const addToFavorites = async () => {
    axios.post(`https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=${API_KEY}&session_id=${localStorage.getItem('session_id')}`, {
      media_type: "movie",
      media_id: id,
      favorite: !isMovieFavorite
    });
    setIsMovieFavorite((prev) => !prev);
  }

  const addToWatchlist = () => {
      axios.post(`https://api.themoviedb.org/3/account/${user.id}/watchlist?api_key=${API_KEY}&session_id=${localStorage.getItem('session_id')}`, {
      media_type: "movie",
      media_id: id,
      watchlist: !isMovieWatchListed
    });
    setIsMovieWatchListed((prev) => !prev);
  }


  useEffect(() => {
    setIsMovieFavorite(!!favoriteMovies?.results?.find((movie) => movie?.id === Number(id)))
  }, [favoriteMovies, id])

  useEffect(() => {
    setIsMovieWatchListed(!!watchListMovies?.results?.find((movie) => movie?.id === Number(id)))
  }, [watchListMovies, data])

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center"
      marginTop="60px">
        <CircularProgress size="8rem"/>
      </Box>
    )
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center"
      marginTop="60px">
        <Link to="/">Error fetching movie details, go back to homepage please</Link>
      </Box>
    )
  }
  return (
    <StyledOuterGrid container >
      <StyledImageGrid item sm={12} lg={4} sx={{display:"flex",justifyContent: "center"}} >
        <StyledImg src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt={data.title} />
      </StyledImageGrid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>{data?.title} ({data?.release_date?.split('-')[0]})</Typography>
        <Typography variant="h5" align="center" gutterBottom>{data?.tagline}</Typography>
        <StyledContainerSpaceAround item >
          <Box display="flex"  align="center" sx={{ height: '100%' }}>
              <Rating readOnly value={data?.vote_average / 2} precision={0.1} icon={<Star fontSize="inherit" />} />
              <Typography variant="subtitle1" gutterBottom ml={1}>{data?.vote_average.toFixed(1)} / 10</Typography>
          </Box>
          <Typography variant="subtitle1" align="center" gutterBottom>{data?.runtime} min {data?.spoken_languages.length > 0 ? '/ ' + data.spoken_languages[0].name : ''}</Typography>
        </StyledContainerSpaceAround>
        <StyledGenresGrid item>
          {data?.genres.map((genre, i) => (
            <StyledLink to={'/'} key={genre.name} onClick={() => dispatch(selectGenreOrCategory(genre.id))}>
              <StyledGenreImg src={genreIcons[genre.name.toLowerCase()]} height="30px"/>
              <Typography color="textPrimary" variant="subtitle1" gutterBottom>{genre?.name}</Typography>
            </StyledLink>
          ))}
        </StyledGenresGrid>
        <Typography variant="h5" gutterBottom sx={{marginTop: "10px"}}>Overview</Typography>
        <Typography gutterBottom sx={{marginBottom: "2rem"}}>{data?.overview}</Typography>
        <Typography variant="h5" gutterBottom>Top Cast</Typography>
        <StyledCastGrid item container spacing={2}>
            {data && data?.credits?.cast?.map((actor, i) => (
                actor?.profile_path && 
                <StyledGrid item key={i} xs={6} sm={6} md={4} lg={2} xl={2} xxl={2} component={Link} to={`/actors/${actor.id}`} sx={{ textDecoration: "none" }}>
                      <StyledCastImg src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
                      <Typography 
                        variant="subtitle1" 
                        sx={{
                          minWidth: "150px", 
                        }}>
                        {actor.name}
                      </Typography>

                      <Typography 
                        variant="subtitle2" 
                        sx={{
                          minWidth: "100%", 
                        }}>
                        {actor.character}
                      </Typography>
                </StyledGrid>
            )).slice(0, 6)}
        </StyledCastGrid>
        <Grid item container style={{marginTop: "2rem"}}>
            <StyledDivButtonGroup>
              <StyledGridButtonGroup item xs={12} sm={6}>
                  <ButtonGroup variant="outlined" size="small" aria-label="contained primary button group">
                    <Button target="_blank" rel="noopener noreferrer" href={data?.homepage} endIcon={<Language />}>Website</Button>
                    <Button  target="_blank" rel="noopener noreferrer" component={Link} to={`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={<MovieIcon />}>IMDB</Button>
                    <Button onClick={() => setOpen(true)} href="#" endIcon={<Theaters />}>Trailer</Button>
                  </ButtonGroup>
                <StyledGridButtonGroup/>
                <StyledGridButtonGroup item xs={12} sm={6}>
                  <ButtonGroup variant="outlined" size="small" aria-label="contained primary button group">
                    <Button onClick={addToFavorites} endIcon={isMovieFavorite ? <FavoriteBorderOutlined /> : <Favorite />}>{isMovieFavorite ? 'Unfavorite' : 'Favorite'}</Button>
                    <Button onClick={addToWatchlist} endIcon={isMovieWatchListed ? <Remove /> : <PlusOne />}>{isMovieWatchListed ? 'Watchlist' : 'Watchlist'}</Button>
                    <Button endIcon={<ArrowBack />}sx={{ borderColor: 'primary.main', textDecoration: 'none'}}>
                      <Typography variant="subtitle2" color="inherit" component={Link} to="/" sx={{ borderColor: 'primary.main', textDecoration: 'none'}}>Back</Typography>
                    </Button>
                  </ButtonGroup>
                </StyledGridButtonGroup>
              </StyledGridButtonGroup>
            </StyledDivButtonGroup>
        </Grid> 
      </Grid>
      <Box marginTop="5rem" width="100%">
          <Typography variant="h3" gutterBottom>You might also like</Typography>
          {isIsLoading && <CircularProgress />}
          {isError && <Typography>Error fetching recommended movies</Typography>}
          {recommendedMovies
            ? <MovieList movies={recommendedMovies.results}
            numberOfMovies={12}
            />
            : <Typography>No recommended movies found</Typography>}
      </Box>
      <StyledModal
        closeAfterTransition
        open={open}
        onClose={() => setOpen(false)}
      >
      {data?.videos?.results?.length > 0 && 
        <StyledIframe
          autoPlay
          frameBorder = "0"
          title="Trailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      }
      </StyledModal>
    </StyledOuterGrid>
  )
}

export default MovieInformation;
