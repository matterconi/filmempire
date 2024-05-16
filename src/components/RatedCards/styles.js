import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material'; 

export const StyledGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
    overflowX: 'scroll',
    marginBottom: '50px',
    scrollbarWidth: 'none',  // for Firefox
    '&::-webkit-scrollbar': {
        display: 'none'  // for Chrome, Safari, and Opera
    },
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
    },
}));

