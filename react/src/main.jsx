// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss'; // your global styles
// If you’re using react-router and/or context providers:
import { BrowserRouter } from 'react-router-dom';
import { CustomThemeProvider } from './context/ThemeContext';
import { SearchProvider } from './context/SearchContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <CustomThemeProvider>
          <App />
        </CustomThemeProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
