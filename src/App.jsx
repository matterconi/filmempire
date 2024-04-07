import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import useStyles from './styles';

import { Actors, MovieInformation, Movies, Navbar, Profile } from './components/index';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <Navbar />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/movie/:id" element={<MovieInformation />} />
              <Route path="/actors" element={<Actors />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
};

export default App;
