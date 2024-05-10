import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const ImageLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10% 0', // Corrected padding
});

export const StyledImage = styled('img')({
  width: '70%',
});

export const GenreLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary, // Accessing theme for text color
  textDecoration: 'none',
}));

export const GenreImage = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'light' ? 'dark' : 'invert(1)' , // Conditional styling based on theme mode
}));