import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  input: {
    width: "655px",
    "& input": {
      padding: "10px 0px !important",
    },
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

export default function RechInput() {
  const css = useStyles();
  return (
    <TextField
      className={css.input}
      id="input-with-icon-textfield"
      //label="Rechercher les données des patients et les prescriptions médicales"
      placeholder="Rechercher les données des patients et les prescriptions médicales"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon className={css.icon} />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
}
