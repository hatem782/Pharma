import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  btn: {
    borderRadius: "10px",
    backgroundColor: "transparent",
    border: `solid 2px ${theme.palette.primary.main} `,
    outlined: "false",
    padding: "5px 30px",
    height: "40px",
    color: theme.palette.primary.main,
    margin: "0px 10px",
    transition: "all 0.1s",
    cursor: "pointer",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      "& *": {
        fill: "white !important",
      },
    },
  },
  iconBtn: {
    padding: "8px 15px",
  },
}));

function GreenOutlinedButton(props) {
  const css = useStyles();
  const { onClick, children, isIcon = false } = props;
  return (
    <button
      className={`${css.btn} ${isIcon ? css.iconBtn : ""}`}
      variant="outlined"
    >
      {children}
    </button>
  );
}

export default GreenOutlinedButton;
