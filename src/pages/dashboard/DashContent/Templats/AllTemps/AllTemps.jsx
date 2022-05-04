import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./AllTemps.styles";
import Button from "../../../../../components/Buttons/SubmitBtn";
import addimg from "../../../../../assets/svgs/icons/Groupe 17437.svg";
import fak1 from "../../../../../assets/images/fakeTemplates/1.png";
import fak2 from "../../../../../assets/images/fakeTemplates/2.png";
import fak3 from "../../../../../assets/images/fakeTemplates/3.png";

import TabButtonGf from "../../../../../components/Buttons/TabButtonGf";
import TabButtonGo from "../../../../../components/Buttons/TabButtonGo";
import TabButtonYf from "../../../../../components/Buttons/TabButtonYf";
import TabButtonRo from "../../../../../components/Buttons/TabButtonRo";
import {
  Table,
  Th,
  Td,
  Thr,
  Tr,
} from "../../../../../components/Table/TableFolder";

function AllTemps() {
  const css = useStyles();
  const navig = useNavigate();

  const toCreatePage = () => {
    navig("/dashboard/templates/create");
  };

  return (
    <div className={css.main}>
      <h4>Mes fichiers</h4>
      <div className="templates">
        <div className="items">
          {Temps.map((item, key) => {
            return <TempCard item={item} key={key} />;
          })}
        </div>
        <Button onClick={toCreatePage}>
          <img style={{ transform: "translateY(2px)" }} src={addimg} /> Créer un
          nouveau fichier
        </Button>
      </div>
      <h4 className="table-title">Fichiers créés récemment</h4>
      <FoldersTable />
    </div>
  );
}

export default AllTemps;

const Temps = [
  { title: "Document vierge", img: fak1 },
  { title: "Template 1", img: fak2 },
  { title: "Template 2", img: fak3 },
];
const TempCard = ({ item }) => {
  const css = useStyles();
  const { img, title } = item;
  return (
    <div className={css.card}>
      <img src={img} alt="template" />
      <p>{title}</p>
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
            <Th>Nom</Th>
            <Th>Date</Th>
            <Th>Taille</Th>
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
        <div className={"folder-name"}>
          <span>Infection palustre</span>
          <span className="space50" />
        </div>
      </Td>
      <Td>
        <span className="folder-name">
          12/01/2022 12:35h <span className="space50" />
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
        <TabButtonRo className="red-btn">Supprimer</TabButtonRo>
      </Td>
    </Tr>
  );
};
