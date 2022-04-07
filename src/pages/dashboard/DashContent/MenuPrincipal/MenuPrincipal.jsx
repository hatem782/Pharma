import React from "react";
import { useStyles } from "./MenuPrincipalStyle";
import folderIcon from "../../../../assets/images/Folder.png";
import H1 from "../../../../components/Typography/H1";

import Button from "../../../../components/Buttons/Button";

function MenuPrincipal() {
  const css = useStyles();
  return (
    <main className={css.main}>
      <H1>Bienvenue Mr. Alexandre Bertan !</H1>
      <Filedrag />
    </main>
  );
}

const Filedrag = () => {
  const css = useStyles();

  return (
    <div className={css.filedrag}>
      <div className="container">
        <img src={folderIcon} alt="upload" />
        <p>
          Faites glisser vos documents ici pour commencer le téléchargement.
        </p>
        <span className={css.devider}>
          <hr />
          <p className="devider-content">OU</p>
        </span>
        <Button>Parcourir les fichiers</Button>
      </div>
    </div>
  );
};

export default MenuPrincipal;
