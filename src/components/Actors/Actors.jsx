import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetActorInformationQuery, useGetActorMoviesQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '..';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { ActorContainer, InfoContainer, StyledImg, StyledTypography, StyledButtonContainer, StyledButton } from './style';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ActorPage = () => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetActorInformationQuery(id);
  const { data: moviesData, error: moviesError, isLoading: moviesIsLoading } = useGetActorMoviesQuery({ id, page });

  if (isLoading) return <StyledTypography>Loading...</StyledTypography>;
  if (error) return <StyledTypography>Error: {error.message}</StyledTypography>;
  if (!data) return <StyledTypography>No data found.</StyledTypography>;

  const handleIMDbClick = () => {
    window.open(`https://www.imdb.com/name/${data.imdb_id}`, '_blank');
  };

  const handleBackClick = () => {
    navigate(-1); // Use navigate with -1 to go back
  };

  return (
    <>
      <ActorContainer>
        <Box sx={{ flexBasis: '40%' }}>
          <StyledImg src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt={data.name} />
        </Box>
        <InfoContainer sx={{ flexBasis: '60%' }}>
          <StyledTypography variant="h4">{data.name}</StyledTypography>
          <StyledTypography variant="h6">Date of Birth: {data.birthday}</StyledTypography>
          <StyledTypography paragraph>
            {data.biography}
          </StyledTypography>
          <StyledButtonContainer>
            <StyledButton variant="contained" color="primary" onClick={handleIMDbClick}>IMDb Page</StyledButton>
            <StyledButton variant="outlined" color="secondary" onClick={handleBackClick} startIcon={<ArrowBackIcon />}>Back</StyledButton>
          </StyledButtonContainer>
        </InfoContainer>
      </ActorContainer>
      {moviesData && <MovieList movies={moviesData.results} isLoading={moviesIsLoading} error={moviesError} numberOfMovies={12} isRecommended={true} />}
      <Pagination currentPage={page} setPage={setPage} totalPages={moviesData?.total_pages} />
    </>
  );
}

export default ActorPage;
