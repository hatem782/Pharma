import React from "react";
import { useStyles } from "./AccueilStyles";
import Header from "./header/Header";
import Section1 from "./Section1/Section1";
import Section234 from "./Section2_3_4/Section234";
import Section56 from "./Section5_6/Section56";
import Offres from "./Section8/Offres";

function Accueil() {
  const css = useStyles();

  return (
    <div className={css.main}>
      <Header />
      <Section1 />
      <Section234 />
      <Section56 />
      <Offres />
    </div>
  );
}

export default Accueil;
