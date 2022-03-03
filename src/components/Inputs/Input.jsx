import React from "react";

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  label: {
    color: "#C0C0BE",
    fontSize: "24px",
  },
  input: {
    fontSize: "20px",
    backgroundColor: "#00000000",
    border: "solid 2px black",
    borderRadius: "23px",
    padding: "15px",
    margin: "15px 5px",
    width: "100%",
  },
}));
function Input(props) {
  const css = useStyles();
  const { label, type = "text", value } = props;
  return (
    <div>
      <label className={css.label}>{label}</label>
      <input type={type} className={css.input} />
    </div>
  );
}

export default Input;
