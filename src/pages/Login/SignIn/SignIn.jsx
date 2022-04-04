import React, { useState } from "react";
import { useStyles } from "./SignInStyles";
import { Grid } from "@mui/material";

import logo from "../../../assets/svgs/logo/logo1.svg";
import Input2 from "../../../components/Inputs/Input2";
import CheckBx from "../../../components/Inputs/CheckBox";
import SubmitBtn from "../../../components/Buttons/SubmitBtn";
import NavLinkEdited from "../../../components/NavLink/NavLink";

import { isPass, isMobile } from "../../../functions/inputValidator";

function SignIn() {
  const css = useStyles();

  const [form, setform] = useState({
    tel: { value: "", error: false },
    pass: { value: "", error: false },
  });

  const inputHandler = (e) => {
    setform({
      ...form,
      [e.target.name]: { error: false, value: e.target.value },
    });
  };

  const submit = (e) => {
    e.preventDefault();
    let { tel, pass } = form;

    // mobile verification
    if (!isMobile(tel.value)) {
      setform({
        ...form,
        tel: { ...form.tel, error: true },
      });
      return false;
    }

    // password verification
    if (!isPass(pass.value)) {
      setform({
        ...form,
        pass: { ...form.pass, error: true },
      });
      return false;
    }
  };

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
                  Vous n'avez pas encore de compte ?{" "}
                  <span className="main-color">
                    <NavLinkEdited to={"/registration"}>
                      S'inscrire
                    </NavLinkEdited>
                  </span>
                </p>
              </div>

              <form>
                <Input2
                  label="Numéro de téléphone"
                  errorMs="(Hé, votre numéro est invalide)"
                  type="text"
                  name="tel"
                  error={form.tel.error}
                  value={form.tel.value}
                  onChange={inputHandler}
                />
                <Input2
                  label="Mot de passe"
                  errorMs="(Hé, votre mot de passe est invalide)"
                  type="password"
                  name="pass"
                  error={form.pass.error}
                  value={form.pass.value}
                  onChange={inputHandler}
                />
                <CheckBx label="Se souvenir de moi" />
                <SubmitBtn onClick={submit}> Connexion </SubmitBtn>
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

export default SignIn;
