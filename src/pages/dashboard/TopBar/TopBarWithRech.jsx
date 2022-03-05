import React from "react";
import RechInput from "../../../components/Inputs/RechInput";
import { useStyles } from "./TopBarStyles";
import Notif_Avatar from "./Notif_Avatar";
function TopBarWithRech() {
  const css = useStyles();

  return (
    <div className={css.TopBar}>
      <RechInput />
      <Notif_Avatar />
    </div>
  );
}

export default TopBarWithRech;
