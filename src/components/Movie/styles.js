import styled from '@mui/material/styles/styled';
import { Typography, Rating } from "@mui/material";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)(({ theme }) => ({
    alignItems: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '&:hover': {
        cursor: 'pointer',
    }, 
    [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '80%',
    },
}));

export const RecommendedLink = styled(Link)(({ theme }) => ({
    alignItems: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '&:hover': {
        cursor: 'pointer',
    },
}));

export const StyledImg = styled('img')(({ theme }) => ({   
    borderRadius: '10px',
    height: 'auto',
    width: '100%',
    marginBottom: '10px',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    [theme.breakpoints.down('sm')]: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        position: 'absolute',
        marginBottom: 0,
        top: 0, 
        left: 0
    },
}));

export const RecommendedImg = styled('img')(({ theme }) => ({
    borderRadius: '10px',
    height: 'auto',
    width: '100%',
    marginBottom: '10px',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

export const StyledDiv = styled('div')(({ theme }) => ({
    position: 'absolute',
    bottom: 0, // Position it at the bottom
    left: 0,
    right: 0, // Stretch across the width
    color: 'white', // Text color for visibility
    padding: '10px', // Padding for some internal spacing
    textAlign: 'center', // Center-align the text
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    textOverflow: 'ellipsis',
    width: '230px', // Corrected from 'whidth'
    overflow: 'hidden',
    whiteSpace: 'nowrap', // Ensure this is added if not already present elsewhere in your styles
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        color: 'white'
     },
}));

export const RecommendedTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    textOverflow: 'ellipsis',
    width: '230px', // Corrected from 'whidth'
    overflow: 'hidden',
    whiteSpace: 'nowrap', // Ensure this is added if not already present elsewhere in your styles
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
}));

export const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty': {
        color: theme.palette.action.disabled, // Default empty color
    },
    [theme.breakpoints.down('sm')]: {
        '.MuiRating-iconEmpty': {
            color: 'white', // Change to white on mobile
        }
    },
}));

export const RecommendedRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty': {
        color: theme.palette.action.disabled, // Default empty color
    },
}));
