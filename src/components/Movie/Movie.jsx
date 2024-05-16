import { Grid, Rating, Tooltip } from '@mui/material'
import { 
  StyledTitle, 
  StyledLink, 
  StyledImg, 
  StyledDiv, 
  StyledRating, 
  RecommendedLink, 
  RecommendedImg,
  RecommendedTitle,
  RecommendedRating
} from './styles';
import { FeaturedMovie } from '..'

const Movie = ({ movie, i, isFocused, isMobile, isRecommended }) => {
  console.log(isRecommended);
  const LinkComponent = isRecommended ? RecommendedLink : StyledLink;
  const ImgComponent = isRecommended ? RecommendedImg : StyledImg;
  const TitleComponent = isRecommended ? RecommendedTitle : StyledTitle;
  const RatingComponent = isRecommended ? RecommendedRating : StyledRating;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      {isFocused && <FeaturedMovie movie={movie} />}
      {!isFocused && (
        <LinkComponent to={`/movie/${movie.id}`}>
          <ImgComponent
            src={movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-1c0a0b08f3b3c3d2c3f3d0d0d2f4b0d0a5'}
            alt={movie.title}
          />
          {(isMobile && !isRecommended) && (
            <StyledDiv>
              <StyledTitle variant="h6">{movie.title}</StyledTitle>
              <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
                <div>
                  <StyledRating name="read-only" value={movie.vote_average / 2} readOnly precision={0.1} />
                </div>
              </Tooltip>
            </StyledDiv>
          )}
          {(!isMobile || isRecommended) && (
            <>
              <TitleComponent variant="h6">{movie.title}</TitleComponent>
              <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
                <div>
                  <RatingComponent name="read-only" value={movie.vote_average / 2} readOnly precision={0.1} />
                </div>
              </Tooltip>
            </>
          )}
        </LinkComponent>
      )}
    </Grid>
  );
};



export default Movie