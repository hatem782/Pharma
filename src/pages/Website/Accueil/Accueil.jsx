import React from "react";
import { useStyles } from "./AccueilStyles";
import Header from "./header/Header";

function Accueil() {
  const css = useStyles();

  return (
    <div className={css.main}>
      <Header />
    </div>
  );
}

export default Accueil;
