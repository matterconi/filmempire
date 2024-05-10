import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import { Provider } from 'react-redux';
import store from './app/store';
import ToggleColorModeProvider from './utils/ToggleColorMode';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleColorModeProvider>
        <Router>
          <App />
        </Router>
      </ToggleColorModeProvider>
    </Provider>
  </React.StrictMode>,
);
