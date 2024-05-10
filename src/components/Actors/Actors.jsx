import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetActorInformationQuery, useGetActorMoviesQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '..';

import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { ActorContainer, InfoContainer, StyledImg, StyledTypography, StyledButton } from './style';
import { ConstructionOutlined } from '@mui/icons-material';

const ActorPage = () => {
  const theme = useTheme();
  const { id } = useParams();
  console.log(id)
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetActorInformationQuery(id);
  const { data: moviesData, error: moviesError, isLoading: moviesIsLoading } = useGetActorMoviesQuery({id, page});

  console.log(moviesData);
  if (isLoading) return <StyledTypography>Loading...</StyledTypography>;
  if (error) return <StyledTypography>Error: {error.message}</StyledTypography>;
  if (!data) return <StyledTypography>No data found.</StyledTypography>;

  return (
      <>
        <ActorContainer>
          <Box sx={{ flexBasis: '40%' }}>
              <StyledImg src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt={data.name} />
          </Box>
          <InfoContainer sx={{ flexBasis: '60%' }}>
              <StyledTypography variant="h4">{data.name}</StyledTypography>
              <StyledTypography variant="subtitle1">Date of Birth: {data.birthday}</StyledTypography>
              <StyledTypography paragraph>
                  {data.biography}
              </StyledTypography>
              <StyledButton variant="contained" color="primary">Button 1</StyledButton>
              <StyledButton variant="outlined" color="secondary">Button 2</StyledButton>
          </InfoContainer>
        </ActorContainer>
       {moviesData && <MovieList movies={moviesData.results} isLoading={moviesIsLoading} error={moviesError} numberOfMovies={12}/>}
       <Pagination currentPage={page} setPage={setPage} totalPages={moviesData?.total_pages}/>
      </>
  );
}

export default ActorPage;