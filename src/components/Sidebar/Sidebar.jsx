import React, { useState, useEffect } from 'react'
import { Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Box, CircularProgress } from '@mui/material' 
import { useTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'

import { selectGenreOrCategory, currentGenreOrCategoryName   } from '../../features/currentGenreOrCategory'
import { useGetMoviesGenresQuery } from '../../services/TMDB'
import { ImageLink, StyledImage, GenreLink, GenreImage } from './styles'; // Assuming styles are defined as above
import genreIcons from '../../assets/genres';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
]

const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ( { setMobileOpen }) => {
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const theme = useTheme();
  const { data, error, isLoading } = useGetMoviesGenresQuery();
  const dispatch = useDispatch();
  const [genres, setGenres] = useState([]);
  
  useEffect(() => {
    if (data && data.genres) {
      setGenres(data.genres);
      console.log(currentGenreOrCategoryName)
    }
  }, [data]); 

  useEffect(() => {
    setMobileOpen(false);
  }
  , [genreIdOrCategoryName]);

  return (
    <>
      <ImageLink to="/">
        <StyledImage src={theme.palette.mode === 'light' ? redLogo : blueLogo} alt="logo" />
      </ImageLink>
      <Divider />
      <List sx={{ padding: '0', width: '100%' }}>
        <ListSubheader>Categories</ListSubheader>
          {categories.map(({label, value}) => (
            <GenreLink to={`/`} key={value}>
              <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} button>
                <ListItemIcon primary={label}>
                  <GenreImage src={genreIcons[label.toLowerCase()]} height={30} alt={name} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </GenreLink>
          ))}
      </List>
      <Divider />
      <List>
      <ListSubheader>Genres</ListSubheader>
          {isLoading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress size="4rem"/>
            </Box>
          )
          : genres.map(({name, id}) => (
          <GenreLink to={`/`} key={name}>
            <ListItem onClick={() => dispatch(selectGenreOrCategory(id))} button>
              <ListItemIcon>
                <GenreImage src={genreIcons[name.toLowerCase()]} height={30} alt={name} />
              </ListItemIcon>
              <ListItemText primary={name} /> 
            </ListItem>
          </GenreLink>
        ))}
      </List>
    </>
  );
};

export default Sidebar;