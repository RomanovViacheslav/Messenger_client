import { createTheme } from '@mui/material';

const TypographyTheme = {
  typography: {
    fontFamily: 'Noto Sans, sans-serif',
    h1: {
      fontFamily: 'Noto Sans, sans-serif',
    },
    h2: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '20px',
      '@media (max-width:576px)': {
        fontSize: '18px',
        lineHeight: '18px',
      },
    },
    body1: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '13px',
      lineHeight: '13px',
    },
    body2: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: '15px',
    },
    caption: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '9px',
      lineHeight: '9px',
    },
  },
};

const ColorTheme = {
  palette: {
    primary: {
      main: '#343A4F',
      light: '#3369F3',
      dark: '#252838',
      contrastText: '#E2E2E4',
    },
    secondary: {
      main: '#717790',
      light: '#EAEAEA',
      dark: '#4C546F',
    },
    error: {
      main: '#F44D4D',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#E2E2E4',
      secondary: '#9898B0',
      disabled: '#E2E2E4',
    },
    background: {
      default: '#252838',
    },
  },
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
};

const spacing = 2;

const combinedTheme = { ...ColorTheme, ...TypographyTheme, breakpoints, spacing };

export const theme = createTheme(combinedTheme);

export type ThemeType = typeof theme;
