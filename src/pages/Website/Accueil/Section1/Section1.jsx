import React from "react";
import Dash from "../../WebsiteComponents/Dash";
import { useStyles } from "./Section1Styles";

function Section1() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <div className="section">
        <div className="content">
          <Dash />
          <br />
          <h2>La meilleure solution </h2>
          <h2>écologique pour vous</h2>
          <p>
            La plateforme permet l'accès à tous types d'utilisateurs pour
            effectuer des échanges en réduisant le risque de perte de documents
            et en assurant une traçabilité optimale grâce à un système
            d'archivage numérique qui réduit la surface requise de vos fichiers
            et les frais généraux associés.
          </p>
          <h3>À propos de nous {"   "} ➜</h3>
        </div>
        <div className="steps"></div>
      </div>
    </div>
  );
}

export default Section1;
