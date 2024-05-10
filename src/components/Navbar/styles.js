import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240;

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    flexWrap: 'wrap',
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const StyledDrawer = styled('nav')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,  // Ensure 'drawerWidth' is defined or replace it with an actual value.
    flexShrink: 0,
  },
}));

export const DrawerPaper = styled(Drawer)({
  width: drawerWidth,  // Ensure 'drawerWidth' is defined or replace it with an actual value.
});

export const StyledLinkButton = styled(IconButton)({
  '&:hover': {
    color: 'white !important',
    textDecoration: 'none',
  },
});
