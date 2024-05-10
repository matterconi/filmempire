import styled from '@mui/material/styles/styled';
import { Box, Card, CardMedia } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    height: '490px',
    textDecoration: 'none',
}));

export const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: 'black'
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    position: 'absolute',   
    top: 0,
    right: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    opacity: '0.8'
}));

export const StyledCardContent = styled(CardMedia)(({ theme }) => ({
    backgroundColor: 'transparent',
    color: 'white',
    width: '40%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));