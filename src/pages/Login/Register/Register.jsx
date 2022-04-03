import React from "react";
import { useStyles } from "./RegisterStyles";
import { Grid } from "@mui/material";

import logo from "../../../assets/svgs/logo/logo1.svg";
import Input2 from "../../../components/Inputs/Input2";
import CheckBx from "../../../components/Inputs/CheckBox";
import SubmitBtn from "../../../components/Buttons/SubmitBtn";
import NavLinkEdited from "../../../components/NavLink/NavLink";

function Register() {
  const css = useStyles();
  return (
    <main className={css.main}>
      <Grid container spacing={0}>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <div className="images"></div>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <div className="register">
            <div>
              <img src={logo} alt="PBird" className="logo" />

              <div className="title">
                <h1>Rejoignez notre communauté!</h1>
                <p>
                  Vous avez déjà un compte?{" "}
                  <span className="main-color">
                    <NavLinkEdited to={"/signin"}>Connexion</NavLinkEdited>
                  </span>
                </p>
              </div>

              <form>
                <div className="row">
                  <Input2 label="Nom" type="text" name="name" />
                  <Input2 label="Prénom" type="text" name="lastname" />
                </div>
                <Input2 label="Adresse email" type="email" name="num" />
                <Input2 label="Numéro de téléphone" type="text" name="num" />
                <Input2 label="Mot de passe" type="password" name="pass" />
                <SubmitBtn> Rejoignez notre communauté! </SubmitBtn>
              </form>
            </div>

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

export default Register;
