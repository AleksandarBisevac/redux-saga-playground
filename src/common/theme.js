import { createTheme } from '@mui/material/styles';
import COLORS from './colorPallette';
// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY,
      light: COLORS.PRIMARY_LIGHT,
      dark: COLORS.PRIMARY_DARK,
      contrastText: COLORS.WHITE,
    },
    secondary: {
      main: COLORS.SECONDARY,
      light: COLORS.SECONDARY_LIGHT,
      dark: COLORS.SECONDARY_DARK,
      contrastText: COLORS.WHITE,
    },
    common: {
      tertiary: COLORS.TERTIARY,
      white: COLORS.WHITE,
      dark: COLORS.DARK,
    },
    error: {
      main: COLORS.ERROR,
      light: COLORS.ERROR_LIGHT,
      dark: COLORS.ERROR_DARK,
    },
    info: {
      main: COLORS.INFO,
      light: COLORS.INFO_LIGHT,
      dark: COLORS.INFO_DARK,
    },
    success: {
      main: COLORS.SUCCESS,
      light: COLORS.SUCCESS_LIGHT,
      dark: COLORS.SUCCESS_DARK,
    },
    warning: {
      main: COLORS.WARNING,
      light: COLORS.WARNING_LIGHT,
      dark: COLORS.WARNING_DARK,
    },
  },
  typography: {
    fontSize: 16,
    //headers
    h1: {
      fontSize: '2.5rem',
      lineHeight: 1.5,
      color: COLORS.DARK,
      textTransform: 'uppercase',
    },
    //links
  },
});

export default theme;
