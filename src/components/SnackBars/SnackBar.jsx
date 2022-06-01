import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { CloseSnakAction } from "../../store/actions/Snack.action";

const outerTheme = createTheme({
  palette: {
    success: {
      main: "#1DBF73",
    },
    error: {
      main: "#FF0000",
    },
    primary: {
      main: "#1DBF73",
      contrastText: "#ffffff",
    },
    spinner: {
      main: "#ffffff",
      contrastText: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  snackContainer: {
    transform: "scale(1.3)",
    bottom: "35px !important",
    right: "70px !important",
    "& .file_upload": {
      backgroundColor: "#1DBF73",
      color: "white",
      display: "flex",
      alignItems: "center",
      padding: "10px 20px",
      borderRadius: "10px",

      fontSize: "16px",
      fontWeight: "500",

      "& .spinner": {
        transform: "scale(0.75)",
      },
    },
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditedSnackBar = () => {
  const { open, type, msg } = useSelector((state) => state.Snack);
  const css = useStyles();
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(CloseSnakAction());
  };

  return (
    <ThemeProvider theme={outerTheme}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={type === "fileup" ? null : 6000}
        onClose={handleClose}
        className={css.snackContainer}
      >
        {type !== "fileup" ? (
          <Alert
            className={css.alert}
            onClose={handleClose}
            severity={type}
            sx={{ width: "100%" }}
          >
            {msg}
          </Alert>
        ) : (
          <div className="file_upload">
            <div className="spinner">
              <CircularProgress color="spinner" />
            </div>
            {msg}
          </div>
        )}
      </Snackbar>
    </ThemeProvider>
  );
};

export default EditedSnackBar;
