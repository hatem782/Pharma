import React, { useState } from "react";
import { useStyles } from "./RegisterStyles";
import { Grid } from "@mui/material";

import logo from "../../../assets/svgs/logo/logo1.svg";
import Input2 from "../../../components/Inputs/Input2";
import CheckBx from "../../../components/Inputs/CheckBox";
import SubmitBtn from "../../../components/Buttons/SubmitBtn";
import NavLinkEdited from "../../../components/NavLink/NavLink";

import {
  isPass,
  isMobile,
  isNom,
  isEmail,
} from "../../../functions/inputValidator";

function Register() {
  const css = useStyles();

  const [form, setform] = useState({
    name: { value: "", error: false },
    lastname: { value: "", error: false },
    email: { value: "", error: false },
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
    let { name, lastname, email, tel, pass } = form;

    // name verification
    if (!isNom(name.value)) {
      setform({
        ...form,
        name: { ...form.name, error: true },
      });
      return false;
    }

    // lastname verification
    if (!isNom(lastname.value)) {
      setform({
        ...form,
        lastname: { ...form.lastname, error: true },
      });
      return false;
    }

    // email verification
    if (!isEmail(email.value)) {
      setform({
        ...form,
        email: { ...form.email, error: true },
      });
      return false;
    }

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
                  <Input2
                    label="Nom"
                    errorMs="(Nom est invalide)"
                    type="text"
                    name="name"
                    error={form.name.error}
                    value={form.name.value}
                    onChange={inputHandler}
                  />
                  <Input2
                    label="Prénom"
                    errorMs="(Prénom est invalide)"
                    type="text"
                    name="lastname"
                    error={form.lastname.error}
                    value={form.lastname.value}
                    onChange={inputHandler}
                  />
                </div>
                <Input2
                  label="Adresse email"
                  errorMs="(Hé, votre Email est invalide)"
                  type="email"
                  name="email"
                  error={form.email.error}
                  value={form.email.value}
                  onChange={inputHandler}
                />

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

                <SubmitBtn onClick={submit}>
                  Rejoignez notre communauté!
                </SubmitBtn>
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
