import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      light: "#233461",
      main: "#0f1d43",
      dark: "#080d2d",
      contrastText: "#ffffff",
    },
    secondary: {
      // This is green.A700 as hex.
      light: "#7946ff",
      main: "#F0FF46",
      dark: "#4600FF",
      contrastText: "#ffffff",
    },
    error: {
      main: "#e53e3e",
    },
  },
});
