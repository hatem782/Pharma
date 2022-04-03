import React from "react";

import { makeStyles } from "@mui/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const useStyles = makeStyles((theme) => ({
  inputContainer: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },

  label: {
    color: "#95989A",
    fontSize: "18px",
  },
  input: {
    color: theme.palette.primary.main,
    borderRadius: "5px",
    margin: "0px 10px 0px 0px !important",
    outline: "none",
    padding: "0px !important",
    "& .MuiSvgIcon-root": { fontSize: 26 },
  },
}));
function CheckBx(props) {
  const css = useStyles();
  const { label, name, value, onChange } = props;
  return (
    <div className={css.inputContainer}>
      <Checkbox className={css.input} />
      <label className={css.label}>{label}</label>
    </div>
  );
}

export default CheckBx;
