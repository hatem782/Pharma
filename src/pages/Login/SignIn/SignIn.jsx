import React from "react";
import { useStyles } from "./SignInStyles";
import { Grid } from "@mui/material";

import logo from "../../../assets/svgs/logo/logo1.svg";
import Input2 from "../../../components/Inputs/Input2";
import CheckBx from "../../../components/Inputs/CheckBox";
import SubmitBtn from "../../../components/Buttons/SubmitBtn";

function SignIn() {
  const css = useStyles();
  return (
    <main className={css.main}>
      <Grid container spacing={0}>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <div className="images"></div>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <div className="login">
            <div>
              <img src={logo} alt="PBird" className="logo" />

              <div className="title">
                <h1>Bienvenue sur PBird</h1>
                <p>
                  Vous n'avez pas encore de compte ?
                  <span className="main-color"> S'inscrire </span>
                </p>
              </div>

              <form>
                <Input2 label="Numéro de téléphone" type="text" name="num" />
                <Input2 label="Mot de passe" type="password" name="pass" />
                <CheckBx label="Se souvenir de moi" />
                <SubmitBtn> Connexion </SubmitBtn>
              </form>
            </div>

            <h6>
              En vous inscrivant, vous acceptez <span> les Conditions </span> et
              <span>la Politique de confidentialité.</span>
            </h6>
          </div>
        </Grid>
      </Grid>
    </main>
  );
}

export default SignIn;
