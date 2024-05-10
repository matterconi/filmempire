import styled from '@emotion/styled';
import { Button, Typography } from "@mui/material";

export const StyledContainer = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const StyledButton = styled(Button)(({ theme }) => ({   
    margin: "30px 2px"
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({    
    margin: "0 20px !important",
    color: theme.palette.text.primary
}));