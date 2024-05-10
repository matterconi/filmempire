import React from 'react'
import { Typography, Box } from '@mui/material'
import { StyledBox } from './styles'
import { Movie } from '..'

const RatedCards = ({ title, data }) => {
  return (
    <Box>
        <Typography variant="h5" gutterBottom sx={{marginTop: "10px"}}>{title}</Typography>
        <StyledBox>
            {data?.results?.map((movie, i) => (
                <Movie key={movie.id} movie={movie} i={i} />
            ))}
        </StyledBox>
    </Box>
  )
}

export default RatedCards