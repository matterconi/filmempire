import React from 'react'
import { Typography, Box, Grid } from '@mui/material'
import { StyledGrid } from './styles'
import { Movie } from '..'

const RatedCards = ({ title, data }) => {
  return (
    <Box>
        <Typography variant="h5" gutterBottom sx={{marginTop: "10px"}}>{title}</Typography>
        <StyledGrid container spacing={4}>
            {data?.results?.map((movie, i) => (
                <Movie key={movie.id} movie={movie} i={i} isRecommended={true}/>
            ))}
        </StyledGrid>
    </Box>
  )
}

export default RatedCards