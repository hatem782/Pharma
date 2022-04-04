import React, { useState } from "react";
import { useStyles } from "./NumValidationStyles";
import { Grid } from "@mui/material";

import logo from "../../../assets/svgs/logo/logo1.svg";
import GreenOutlinedButton from "../../../components/Buttons/GreenOutlinedButton";

function NumValidation() {
  const css = useStyles();

  return (
    <main className={css.main}>
      <Grid container spacing={0}>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <div className="images"></div>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <div className="validation">
            <div>
              <img src={logo} alt="PBird" className="logo" />

              <div className="title">
                <h1>Bienvenue sur PBird</h1>
              </div>
            </div>

            <form>
              <p>
                Entrer le code secret envoyé par SMS sur votre téléphone
                portable
              </p>
              <InpNums />
              <p className="resend-code">Demander un nouveau code</p>
              <GreenOutlinedButton>Suivant</GreenOutlinedButton>
            </form>

            <h6>
              En vous inscrivant, vous acceptez <span> les Conditions </span> et
              <span> la Politique de confidentialité.</span>
            </h6>
          </div>
        </Grid>
      </Grid>
    </main>
  );
}

export default NumValidation;

const InpNums = () => {
  const [number, setNumber] = useState(["", "", "", "", "", ""]);

  const handlerChange = (event, key) => {
    //if (number[key].length == 0 || event.target.value === "") {
    let newNumber = [...number];
    newNumber[key] = event.target.value;
    setNumber([...newNumber]);
    if (key < 5) {
      document.getElementById(`inp_${key + 1}`).focus();
    }
    //}
  };

  return (
    <div className="inputs">
      {number.map((num, key) => {
        return (
          <input
            key={key}
            value={num}
            maxLength="1"
            onChange={(event) => {
              handlerChange(event, key);
            }}
            type="text"
            name={`inp_${key}`}
            id={`inp_${key}`}
          />
        );
      })}
    </div>
  );
};
