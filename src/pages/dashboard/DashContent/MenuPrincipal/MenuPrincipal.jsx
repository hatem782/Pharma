import React, { useState } from "react";
import { useStyles } from "./MenuPrincipalStyle";
import folderIcon from "../../../../assets/images/Folder.png";
import H1 from "../../../../components/Typography/H1";

import Button from "../../../../components/Buttons/Button";
import Spinner from "../../../../components/Spinner/SpinVer";
import { ltoa } from "../../../../functions/help";

import {
  Table,
  Th,
  Td,
  Thr,
  Tr,
} from "../../../../components/Table/TableFolder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Radio from "@mui/material/Radio";
import Gobutton from "../../../../components/Buttons/GreenOutlinedButton";
import H2 from "../../../../components/Typography/H2";
import ProgressBar from "../../../../components/Spinner/ProgressBar";

function MenuPrincipal() {
  const css = useStyles();
  return (
    <main className={css.main}>
      <br />
      <H1>Bienvenue Mr. Alexandre Bertan !</H1>
      <Filedrag />

      <br />
      <H2>Derniers fichiers importés</H2>
      <FoldersTable />
    </main>
  );
}

const Filedrag = () => {
  const css = useStyles();
  const [uploading, setuploading] = useState({
    up: false,
    value: 0,
    done: false,
  });

  const onDragEnter = (e) => {
    e.preventDefault();
    document.getElementById("dragZone").classList.add(css.dragging);
    return false;
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    document.getElementById("dragZone").classList.remove(css.dragging);
    return false;
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();

    document.getElementById("dragZone").classList.remove(css.dragging);
    // getting files from drag zone
    let files = ltoa(e.dataTransfer.files);
    console.log(files);
    // creating form data
    let formData = new FormData();

    // preparing data to be sended via APIs
    files.forEach((file) => {
      formData.append("file[]", file);
    });
    console.log(formData);
    console.log(formData.getAll("file[]"));

    // fake file sending
    let i = 0;
    let tm = setInterval(() => {
      i++;
      console.log(i);
      setuploading({ up: true, value: i, done: false });
      if (i === 100) {
        setuploading({ up: true, value: i, done: true });
        clearInterval(tm);
        // to end the uploading and back to normal
        setTimeout(() => {
          setuploading({ up: false, value: 0, done: false });
        }, 4000);
      }
    }, 200);

    return false;
  };

  return (
    <div>
      {/* ************ FILE ZONE DRAG ****************** */}
      <div id="dragZone" className={css.filedrag}>
        {uploading.up ? (
          <Spinner
            text="Mise à jour des fichiers"
            done={uploading.done}
            doneText="Votre fichier a été téléchargé avec succès"
          />
        ) : (
          <>
            {/* !************ ZONE DRAG ******************! */}
            <div
              className="drag-zone"
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
              onDragOver={onDragOver}
              onDrop={onDrop}
            />
            {/* !************ ZONE DRAG ******************! */}

            <div className="container">
              <img src={folderIcon} alt="upload" />
              <p>
                Faites glisser vos documents ici pour commencer le
                téléchargement.
              </p>
              <span className={css.devider}>
                <hr />
                <p className="devider-content">OU</p>
              </span>
              <Button>Parcourir les fichiers</Button>
            </div>
          </>
        )}
      </div>
      {/* ************ PRORESS BAR ****************** */}

      {uploading.up && !uploading.done ? (
        <div className={css.uploadingState}>
          <ProgressBar value={uploading.value} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

function FoldersTable() {
  const css = useStyles();
  return (
    <div className={css.foldes}>
      <Table>
        <thead>
          <Thr>
            <Th>{/*selection*/}</Th>
            <Th /*align="center"*/>Dossier</Th>
            <Th>Date</Th>
          </Thr>
        </thead>
        <tbody>
          <OneFolder />
          <OneFolder />
          <OneFolder />
          <OneFolder />
          <OneFolder />
          <OneFolder />
        </tbody>
      </Table>
    </div>
  );
}

const OneFolder = (props) => {
  const [selected, setSelected] = useState(false);

  const click = () => {
    setSelected(!selected);
  };

  return (
    <Tr>
      <Td>
        <span className="space20" />
        <Radio onClick={click} checked={selected} />
      </Td>
      <Td>
        <div className={"folder-name"}>
          <span>Infection palustre</span>
          <span className="space50" />
        </div>
      </Td>
      <Td>
        <span className="folder-date">
          12/01/2022 12:35h <span className="space50" />
        </span>
      </Td>
      <Td className="buttons-group">
        <Gobutton>Afficher</Gobutton>
        <Gobutton>Envoyer</Gobutton>
        <Gobutton>Code QR</Gobutton>
        <Gobutton isIcon={true}>
          <MoreHorizIcon />
        </Gobutton>
      </Td>
    </Tr>
  );
};

export default MenuPrincipal;
