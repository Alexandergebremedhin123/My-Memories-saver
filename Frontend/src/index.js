import React from 'react';
import ReactDOM from 'react-dom'; // Not from 'react-dom/client'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'; // MUI v4
import App from './App';
import './index.css';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));
const theme = createTheme(); // MUI v4 theme

// Legacy rendering (React 17)
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root') // No createRoot
);