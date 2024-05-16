import { styled } from '@mui/material/styles';
import { Grid, Modal } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledOuterGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',  // Ensures vertical centering of all child components
    justifyContent: 'space-around',
    padding: '0px 10px 0 10px !important',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('lg')]: {
        minWidth: "100%",
        paddingRight: "50px !important",
    },
}));

export const StyledCastGrid = styled(Grid)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('lg')]: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',  // Explicitly defining the grid columns
    },
    [theme.breakpoints.up('xl')]: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',  // Explicitly defining the grid columns
    },
}));

export const StyledImageGrid = styled(Grid)(({ theme }) => ({ 
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignSelf: "flex-start",
    [theme.breakpoints.up('lg')]: {
       justifyContent: "flex-start",
    },
    [theme.breakpoints.up('xl')]: {
        paddingLeft: "0px",  // Ensures consistent width at xl
    },
}));

export const StyledImg = styled('img')(({ theme }) => ({
    borderRadius: '20px',
    boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
    width: '80%',  // Default width
    [theme.breakpoints.down('lg')]: {
        width: '60%',  // Adjusts width on lg and larger screens
        marginBottom: '50px',
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',  // Takes precedence over 'down(sm)' if screen is md or larger
        height: '350px',
        marginBottom: '50px',
    },
    [theme.breakpoints.up('lg')]: {
        width: '100%',  // Adjusts width on lg and larger screens
        marginBottom: '50px',
    },
    [theme.breakpoints.up('xl')]: {
        width: '80%',  // Ensures consistent width at xl
    },
}));


export const StyledGenresGrid = styled(Grid)(({ theme }) => ({
    margin: '10px 0 !important',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
}));

export const StyledGenreImg = styled('img')(({ theme }) => ({
    filter: theme.palette.type === 'dark' ? 'invert(1)' : 'invert(0)',
    marginRight: '10px',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        padding: '0.5rem 1rem',
    },
}));

export const StyledCastImg = styled('img')(({ theme }) => ({
    minWidth: '100%',
    maxWidth: '10rem',
    height: '10rem',
    objectFit: 'cover',
    borderRadius: '10px',
    [theme.breakpoints.down('lg')]: {
        width: "100%",
        minWidth: '0%',
    },
}));

export const StyledDivButtonGroup = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    minWidth: '275px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

export const StyledGridButtonGroup = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: "10px",
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

export const StyledModal = styled(Modal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledIframe = styled("iframe")(({ theme }) => ({
    width: '50%',
    height: '50%',
    [theme.breakpoints.down('sm')]: {
        width: '90%',
        height: '90%',
    },
}));

export const StyledContainerSpaceAround = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '10px 0 !important',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
}));
