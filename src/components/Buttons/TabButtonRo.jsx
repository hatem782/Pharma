import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  btn: {
    borderRadius: "5px",
    border: `solid 2px ${theme.palette.error.main} `,
    outline: "none",

    backgroundColor: "transparent",
    padding: "6px 20px",
    margin: "0px 10px",

    color: theme.palette.error.main,
    fontStyle: "myriad",
    fontSize: "16px",
    fontWeight: "600",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    transition: "all 0.1s",
    cursor: "pointer",

    [theme.breakpoints.down("xl")]: {
      fontSize: "16px",
      padding: "7px 50px",
    },

    // "&:hover": {
    //   backgroundColor: theme.palette.error.main,
    //   color: "white",
    //   "& *": {
    //     fill: "white !important",
    //   },
    // },
  },
  iconBtn: {
    padding: "5px 15px",
  },
}));

// RED OUTLINED
function TabButtonRo(props) {
  const css = useStyles();
  const { onClick, children, isIcon = false, className } = props;
  return (
    <button
      className={`${css.btn} ${isIcon ? css.iconBtn : ""} ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TabButtonRo;
