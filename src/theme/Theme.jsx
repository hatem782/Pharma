// #1976D2 blue
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#1DBF73",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FECD54",
      contrastText: "#ffffff",
    },
    error: {
      main: "#F7617D",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#FFCD54",
      contrastText: "#ffffff",
    },
  },
});

const Theme = (props) => {
  const { /*theme,*/ children } = props;

  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default Theme;
