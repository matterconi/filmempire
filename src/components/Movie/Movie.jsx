import { Grid, Grow, Rating, Tooltip } from '@mui/material'
import { StyledTitle, StyledLink, StyledImg } from './styles'
import { FeaturedMovie } from '..'

const Movie = ( { movie, i, isFocused }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
    {isFocused && <FeaturedMovie movie={movie}/>}
    {!isFocused && 
            <StyledLink to={`/movie/${movie.id}`}>
                <StyledImg src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-1c0a0b08f3b3c3d2c3f3d0d0d2f4b0d0a5' } alt={movie.title} />
                <StyledTitle variant="h6">{movie.title}</StyledTitle>
                <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
                    <div>
                        <Rating name="read-only" value={movie.vote_average / 2} readOnly precision={0.1}/>
                    </div>
                </Tooltip>
            </StyledLink>
    }
    </Grid>
  )
}

export default Movie