import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import createStore from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider as ScThemeProvider } from 'styled-components';
import theme from './common/theme';

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ScThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ScThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
