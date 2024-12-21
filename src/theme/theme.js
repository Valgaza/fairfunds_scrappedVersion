// src/theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Black for primary elements
    },
    secondary: {
      main: '#444444', // Dark gray for secondary elements
    },
    background: {
      default: '#ffffff', // White background
      paper: '#f5f5f5',   // Light gray for elements like AppBar or cards
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#444444', // Dark gray text
    },
    error: {
      main: '#d32f2f', // Red for the Sign Out button
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff', // White for primary elements
    },
    secondary: {
      main: '#bbbbbb', // Light gray for secondary elements
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e',   // Slightly lighter dark background for elements
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#bbbbbb', // Light gray text
    },
    error: {
      main: '#d32f2f', // Red for the Sign Out button
    },
  },
});

export { lightTheme, darkTheme };
