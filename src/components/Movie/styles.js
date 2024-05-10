import styled from '@mui/material/styles/styled';
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

export const StyledTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    textOverflow: 'ellipsis',
    width: '230px', // Corrected from 'whidth'
    overflow: 'hidden',
    whiteSpace: 'nowrap', // Ensure this is added if not already present elsewhere in your styles
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
    alignItems: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    [theme.breakpoints.up('xs')]: {
        display: 'flex',
        flexDirection: 'column',
    },
    '&:hover': {
        cursor: 'pointer',
    }
}));

export const StyledImg = styled('img')(({ theme }) => ({   
    borderRadius: '10px',
    height: 'auto',
    width: '100%',
    marginBottom: '10px',
    '&:hover': {
        transform: 'scale(1.05)',
    }
}));