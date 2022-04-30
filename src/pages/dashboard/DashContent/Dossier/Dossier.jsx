import React, { useState } from "react";
import { useStyles } from "./DossierStyle";
import Calendar from "../../../../components/Inputs/Calendar";
import Button from "../../../../components/Buttons/SubmitBtn";
import addimg from "../../../../assets/svgs/icons/Groupe 17437.svg";
import Menu from "../../../../components/Menu/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import {
  Table,
  Th,
  Td,
  Thr,
  Tr,
} from "../../../../components/Table/TableFolder";
import Radio from "@mui/material/Radio";
import TabButtonGf from "../../../../components/Buttons/TabButtonGf";
import TabButtonGo from "../../../../components/Buttons/TabButtonGo";
import TabButtonYf from "../../../../components/Buttons/TabButtonYf";
import TabButtonRo from "../../../../components/Buttons/TabButtonRo";
import threp from "../../../../assets/svgs/icons/Groupe 17360.svg";
import EditedSelect from "../../../../components/Inputs/EditedSelect";
import RechInput from "../../../../components/Inputs/RechInput2";
// dialogs
import Renommer from "./Popups/Renommer";
import QRcode from "./Popups/QRcode";
import DeleteItem from "./Popups/DeleteItem";
import Partager from "./Popups/Partager";

function Dossier() {
  const css = useStyles();
  return (
    <main className={css.main}>
      <br />
      <h4>Mes dossier</h4>
      <h5>Mes dossiers / Tous mes dossiers</h5>
      <div className={css.filter}>
        <div className="part1">
          <h4>Affichage</h4>
          <div className="claned-filter">
            <Calendar />
          </div>
          <div className="source-filter">
            <EditedSelect />
          </div>
          <div className="rech-filter">
            <RechInput />
          </div>
        </div>
        <div className="part2">
          <Button>
            <img style={{ transform: "translateY(2px)" }} src={addimg} />{" "}
            Nouveau dossier
          </Button>
        </div>
      </div>
      <br />
      <FoldersTable />
    </main>
  );
}

function FoldersTable() {
  const css = useStyles();
  return (
    <div className={css.foldes}>
      <Table>
        <thead>
          <Thr>
            <Th></Th>
            <Th>Nom</Th>
            <Th>Source</Th>
            <Th>Date</Th>
            <Th>Taille</Th>
          </Thr>
        </thead>
        <tbody>
          <OneFolder />
          <br />
          <OneFolder />
          <br />
          <OneFolder />
          <br />
          <OneFolder />
          <br />
          <OneFolder />
          <br />
          <OneFolder />
        </tbody>
      </Table>
    </div>
  );
}

const OneFolder = (props) => {
  // the state for checkbox *************************************
  const [selected, setSelected] = useState(false);
  const click = () => {
    setSelected(!selected);
  };
  // the state for checkbox *************************************

  // the menu items of rename and delete ************************
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // the menu items of rename and delete ************************

  // the popup state to open and close **************************
  const [dialog, setdialog] = useState({
    active: false,
    type: "", // delete / rename / qrcode / share
    value: null,
  });
  const openDial = (type, value) => {
    setdialog({ active: true, type: type, value: value });
  };

  const closeDial = () => {
    setdialog({ active: false, type: "", value: null });
  };
  const openQrcode = () => {
    openDial("qrcode", null);
  };
  const openRename = () => {
    openDial("rename", null);
  };
  const openDelete = () => {
    openDial("delete", null);
  };
  const openShare = () => {
    openDial("share", null);
  };
  // the popup state to open and close **************************

  return (
    <Tr>
      <Td>
        <span className="space20" />
        <Radio onClick={click} checked={selected} />
      </Td>
      <Td>
        <div className={"folder-name green-underlined"}>
          <span>Nom du dossier</span>
          <span className="space50" />
        </div>
      </Td>
      <Td>
        <div className={"folder-name"}>
          <span>Nom de la source</span>
          <span className="space50" />
        </div>
      </Td>
      <Td>
        <span className="folder-name">
          14 Janvier 2022 <span className="space50" />
        </span>
      </Td>
      <Td>
        <span className="folder-name">
          200 Ko <span className="space50" />
        </span>
      </Td>
      <Td className="buttons-group">
        <TabButtonGf>Afficher</TabButtonGf>
        <TabButtonGo onClick={openQrcode}>Code QR</TabButtonGo>
        <TabButtonYf onClick={openShare}>Partager</TabButtonYf>
        <img src={threp} onClick={handleClick} />
        <div className="menu">
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            pos={5}
          >
            <div style={{ padding: "0px 10px" }} className="menu-items">
              <MenuItem>
                <TabButtonGf onClick={openRename}>Renommer</TabButtonGf>
              </MenuItem>
              <Divider />
              <MenuItem>
                <TabButtonRo onClick={openDelete}>Supprimer</TabButtonRo>
              </MenuItem>
            </div>
          </Menu>
        </div>
      </Td>
      {/************************  POPUPS ************************/}
      {dialog.type === "rename" ? (
        <Renommer dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}
      {dialog.type === "qrcode" ? (
        <QRcode dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}
      {dialog.type === "delete" ? (
        <DeleteItem dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}
      {dialog.type === "share" ? (
        <Partager dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {/************************  POPUPS ************************/}
    </Tr>
  );
};

export default Dossier;
