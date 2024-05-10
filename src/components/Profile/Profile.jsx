import { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';
import { useGetListQuery } from '../../services/TMDB';
import { RatedCards } from '..';

const Profile = () => {
  const { user } = useSelector(userSelector);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }
  const { data: favoriteMovies, refetch: refetchFavorites, error: listError, isLoading: isListLoading } = useGetListQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1})
  const { data: watchListMovies, refetch: refetchWatchList, error: watchError, isLoading: isWatchLoading } = useGetListQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1})

  useEffect(() => {
    refetchFavorites();
    refetchWatchList();
  } ,[])

  return (
    <Box marginTop="60px">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>Profile</Typography>
          <Button color="inherit" onClick={logout}>
            Logout <ExitToApp />
          </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchListMovies?.results?.length
      ? (
        <Typography>You have no favorite movies, add favorites or watchlist some movies to see them here! </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favoriteMovies} />
          <RatedCards title="Watchlist Movies" data={watchListMovies} />
        </Box>
      )}
    </Box>
  )
}

export default Profile;
