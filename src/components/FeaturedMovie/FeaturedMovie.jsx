import React from 'react'

import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { StyledBox, StyledCard, StyledCardMedia, StyledCardContent, StyledTyphography } from './styles'

const FeaturedMovie = ({ movie }) => {
  if (!movie) {
    return null
  }
  return (
    <StyledBox component={Link} to={`/movie/${movie.id}` }>
        <StyledCard>
              <StyledCardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
              />
            <Box padding="20px">
                <StyledCardContent>
                    <Typography variant="h4" component="h1">{movie.title}</Typography>
                    <StyledTyphography variant="body1" component="p">{movie.overview}</StyledTyphography>
                </StyledCardContent>
            </Box>
        </StyledCard>
    </StyledBox>
  )
}

export default FeaturedMovie