import { styled } from '@mui/material/styles';
import { TextField, InputAdornment } from '@mui/material';

export const StyledSearch = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
    color: theme.palette.mode === 'light' ? 'black' : 'inherit',  // Use a ternary operator for conditional styles
    filter: theme.palette.mode === 'light' ? 'invert(1)' : 'none',
    [theme.breakpoints.down('sm')]: {
        marginTop: '-10px',
        marginBottom: '10px',
    },
}));

