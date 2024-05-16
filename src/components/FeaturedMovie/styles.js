import styled from '@mui/material/styles/styled';
import { Box, Card, CardMedia, Typography, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledBox = styled(Box)(({ theme }) => ({
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    height: '490px',  // Default height for larger screens
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        height: '50vh',  // Adjusted height for small devices
    },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: 'black',
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    opacity: '0.75',
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: 'white',
    width: '40%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));

export const StyledTyphography = styled(Typography)(({ theme }) => ({
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    [theme.breakpoints.down('sm')]: {
        WebkitLineClamp: 5,  // Truncate after 5 lines on small devices
    },
    [theme.breakpoints.up('md')]: {
        WebkitLineClamp: 7,  // Truncate after 7 lines on medium and larger devices
    },
}));
