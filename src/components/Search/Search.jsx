import { useState, useEffect } from 'react'
import { StyledSearch, StyledTextField } from './styles'
import { InputAdornment } from '@mui/material'
import { Search as SearchIcon, Style } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { searchMovie } from '../../features/currentGenreOrCategory'

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchMovie(query));
    }
  }
   if (location.pathname !== '/') {
    return null;
  }
  return (
    <StyledSearch>
      <StyledTextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"  
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </StyledSearch>
  )
}

export default Search