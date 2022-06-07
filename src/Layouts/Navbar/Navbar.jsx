import React from "react";
import { useStyles } from "./NavbarStyles";
import logo from "../../assets/images/website/logo.png";
import Button from "../../components/Buttons/SubmitBtn";

function Navbar() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <div className="navbar">
        <img src={logo} />
        <div className="routes">
          <p> Accueil </p>
          <p> Télécharger </p>
          <p> Offres et Tarifs </p>
          <p> Contact </p>
        </div>
        <div className="button-group">
          <Button>Inscription</Button>
          <Button className="outlined">Connexion</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
