import React from "react";
//import RechInput from "../../../components/Inputs/RechInput";
import { useStyles } from "./TopBarStyles";
import Notif_Avatar from "./Notif_Avatar";
function ToBaar() {
  const css = useStyles();

  return (
    <div className={css.TopBar}>
      {/* <RechInput /> */}
      <h3>{/* Paramètres du profil */}</h3>
      <Notif_Avatar />
    </div>
  );
}

export default ToBaar;
