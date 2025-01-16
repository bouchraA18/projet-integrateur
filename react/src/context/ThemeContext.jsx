import React, { createContext, useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ThemeContext = createContext();

export function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');
  const [fontSize, setFontSize] = useState(Number(localStorage.getItem('fontSize')) || 14);

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: '#0d2538' },
          secondary: { main: '#00a8e8' },
        },
        typography: {
          fontSize,
          fontFamily: "'Roboto', sans-serif",
        },
      }),
    [mode, fontSize]
  );

  return (
    <ThemeContext.Provider value={{ mode, setMode, fontSize, setFontSize }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
