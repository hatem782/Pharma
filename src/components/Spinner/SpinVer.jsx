import React from "react";

import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& p": {
      margin: "0px 0px 0px 10px",
    },
  },
}));

function SpinVer() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <CircularProgress color="primary" />
      <p>Vérification</p>
    </div>
  );
}

export default SpinVer;
