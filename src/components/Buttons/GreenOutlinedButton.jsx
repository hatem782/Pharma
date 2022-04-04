import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  btn: {
    borderRadius: "5px",
    backgroundColor: "transparent",
    border: `solid 3px ${"#56C596"} `,
    outlined: "false",
    padding: "7px 60px",
    color: "#56C596",
    margin: "0px 10px",
    transition: "all 0.1s",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("xl")]: {
      fontSize: "16px",
      padding: "7px 50px",
    },

    "&:hover": {
      backgroundColor: "#56C596",
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
