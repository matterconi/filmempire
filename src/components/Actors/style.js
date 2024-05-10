import { styled } from '@mui/material/styles';

import { Box, Button, Typography } from '@mui/material';

export const StyledImg = styled('img')(({ theme }) => ({
    borderRadius: '20px',
    boxShadow: '0.5em 1em 1em rgba(64, 64, 70, 0.7)',
    width: '100%',  // Adjusted to fill the parent grid item
    height: 'auto',
    marginBottom: theme.spacing(2),
}));

export const ActorContainer = styled(Box)(({ theme }) => ({
    marginTop: '60px !important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(3),
    maxWidth: 1200,
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    }
}));

export const InfoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        textAlign: 'left',
    }
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}));