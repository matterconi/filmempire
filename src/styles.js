// StyledComponents.js
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
}));

export const StyledToolbar = styled(Box)(({ theme }) => ({
  height: '70px',
  backgroundColor: theme.palette.background.paper, // Using theme variables
}));

export const StyledContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4), // using theme.spacing for consistent spacing
  width: '100%',
}));
