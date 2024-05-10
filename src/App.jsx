import { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { StyledRoot, StyledToolbar, StyledContent } from './styles';

import { Actors, MovieInformation, Movies, Navbar, Profile } from './components/index';
import { Provider } from 'react-redux';
import store from './app/store';
import ToggleColorModeProvider from './utils/ToggleColorMode';
import { fetchGenres } from './utils';

import useAlan from './components/Alan';

const App = () => {

  const alanBtnInstance = useRef(null);

  useAlan();

  return (
        <StyledRoot>
            <CssBaseline />
            <Navbar />
            <StyledContent>
              <StyledToolbar />
              <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/approved" element={<Movies />} />
                <Route path="/movie/:id" element={<MovieInformation />} />
                <Route path="/actors/:id" element={<Actors />} />
                <Route path="/profile/:username" element={<Profile />} />
              </Routes>
            </StyledContent>
            <div ref={alanBtnInstance}></div>
        </StyledRoot>
      );
};

export default App;
