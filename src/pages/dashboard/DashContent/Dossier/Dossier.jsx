import React, { useState } from "react";
import { useStyles } from "./DossierStyle";
import Calendar from "../../../../components/Inputs/Calendar";
import Button from "../../../../components/Buttons/SubmitBtn";
import addimg from "../../../../assets/svgs/icons/Groupe 17437.svg";

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
import threp from "../../../../assets/svgs/icons/Groupe 17360.svg";
import EditedSelect from "../../../../components/Inputs/EditedSelect";
import RechInput from "../../../../components/Inputs/RechInput2";

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
        <TabButtonGo>Code QR</TabButtonGo>
        <TabButtonYf>Partager</TabButtonYf>
        <img src={threp} />
      </Td>
    </Tr>
  );
};

export default Dossier;
