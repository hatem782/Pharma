import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

function NavLinkEdited(props) {
  const cs = useStyles();
  return (
    <NavLink to={props.to} className={cs.main}>
      {props.children}
    </NavLink>
  );
}

export default NavLinkEdited;
