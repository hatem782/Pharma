import React from "react";
import { useStyles } from "./AccueilStyles";
import Header from "./header/Header";
import Section1 from "./Section1/Section1";

function Accueil() {
  const css = useStyles();

  return (
    <div className={css.main}>
      <Header />
      <Section1 />
    </div>
  );
}

export default Accueil;
