import React, { useEffect, useState, useContext } from 'react';
import {AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery, Icon } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { StyledToolbar, MenuButton, StyledDrawer, DrawerPaper, StyledLinkButton } from './styles';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import { ColorModeContext } from '../../utils/ToggleColorMode';
import auth, { setUser, userSelector, setAuthenticated } from '../../features/auth';
import { Sidebar } from '../index';
import { Search } from '../index';
import { moviesApi, fetchToken, fetchSessionId } from '../../utils';

// Then in your component you can use it like this:
const Navbar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:580px)');
  const theme = useTheme();
  const dispatch = useDispatch();

  const colorMode = useContext(ColorModeContext);

  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
          dispatch(setUser(data));
        } else {
          console.log('fetching session id');
          const sessionId = await fetchSessionId(); // Ensure this function is defined somewhere
          if (sessionId) {
            const { data } = await moviesApi.get(`/account?session_id=${sessionId}`);
            const userData = data.username;
            dispatch(setUser(data));
          }
        }
      }
    };

    logInUser();
  }, [token, dispatch]); 

  return (
    <>
      <AppBar position="fixed" style={{maxWidth: "100%"}}>
        <StyledToolbar>
          {isMobile && (
            <MenuButton 
              color="inherit" 
              edge="start"
              onClick={() => setMobileOpen((prev) => !prev )}
            >
              <Menu />
            </MenuButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1}} onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <StyledLinkButton color="inherit" onClick={fetchToken}>
                Login <AccountCircle />
              </StyledLinkButton> ) : (
                <StyledLinkButton 
                  color="inherit" 
                  component={Link}
                  to={`/profile/${user.id}`}
                  onClick={() => {}}
                >
                {!isMobile && 'My Movies'}
                  <Avatar sx={{ width: 32, height: 32, ml: 1 }} alt='Profile' src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar_path}`}/>
                </StyledLinkButton>
              )
            }
          </div>
          {isMobile && <Search />}
        </StyledToolbar>
      </AppBar>
      <div>
          <StyledDrawer>
            {isMobile ? (
                <DrawerPaper
                  variant='temporary'
                  anchor='right'
                  open={mobileOpen}
                  onClose={() => setMobileOpen((prev) => !prev )}
                  sx={{
                    '& .MuiDrawer-paper': {
                      width: 240, // Specify your drawer width here
                      // Add any other styles you need for the drawer
                    }
                  }}
                  ModalProps={{ keepMounted: true }}
                >
                  <Sidebar setMobileOpen={setMobileOpen}/>
                </DrawerPaper>
              ) : (
                <DrawerPaper variant="permanent" open>
                  <Sidebar setMobileOpen={setMobileOpen}/>
                </DrawerPaper>
              )
            }
          </StyledDrawer>
      </div>
    </>
  );
};



export default Navbar
