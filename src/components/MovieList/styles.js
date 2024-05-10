import styled from '@mui/material/styles/styled';
import { Grid } from "@mui/material";

export const StyledGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
    overflowX: 'scroll',
    scrollbarWidth: 'none',  // for Firefox
    '&::-webkit-scrollbar': {
        display: 'none'  // for Chrome, Safari, and Opera
    },
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
    },
}));
