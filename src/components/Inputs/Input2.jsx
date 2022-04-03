import React from "react";

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  inputContainer: {
    marginTop: "30px",
  },

  label: {
    color: "#95989A",
    fontSize: "18px",
  },
  input: {
    fontSize: "20px",
    backgroundColor: "#FCFCFC",
    border: "solid 2px #95989A66",
    borderRadius: "5px",
    padding: "15px",
    margin: "10px 0px",
    width: "100%",
    outline: "none",
    "&:focus": {
      border: "solid 2px #95989A",
    },
  },
}));
function Input2(props) {
  const css = useStyles();
  const { label, name, type = "text", value, onChange } = props;
  return (
    <div className={css.inputContainer}>
      <label className={css.label}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        className={css.input}
      />
    </div>
  );
}

export default Input2;
