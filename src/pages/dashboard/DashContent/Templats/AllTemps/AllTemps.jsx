import React, { useState, useEffect } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import {
  GetAllTemplates,
  SetOneTemplate,
} from "../../../../../store/actions/Templates.action";
import { GetDocsByUserCreated } from "../../../../../store/actions/Fichier.action";

function AllTemps() {
  const css = useStyles();
  const navig = useNavigate();
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.Templates);

  const toCreatePage = () => {
    navig("/dashboard/templates/create");
  };

  useEffect(() => {
    dispatch(GetAllTemplates());
  }, []);

  return (
    <div className={css.main}>
      <h4>Mes fichiers</h4>
      <div className="templates">
        <div className="items">
          {templates.map((item, key) => {
            return <OneTemp Text={item} key={key} />;
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

const OneTemp = ({ Text }) => {
  const css = useStyles();
  const dispatch = useDispatch();
  const navig = useNavigate();

  const StartUpdate = () => {
    dispatch(SetOneTemplate(Text));
    navig("/dashboard/templates/modifier");
  };
  return (
    <div className={css.model} onClick={StartUpdate}>
      <div className="paper">
        <div className="g1">
          <div className="header">
            <div
              className="subInfo"
              dangerouslySetInnerHTML={{ __html: Text.header }}
            />
          </div>
          <div className="body">
            <div
              className="subInfo"
              dangerouslySetInnerHTML={{ __html: Text.body }}
            />
          </div>
        </div>
        <div className="footer">
          <div
            className="subInfo"
            dangerouslySetInnerHTML={{ __html: Text.footer }}
          />
        </div>
      </div>
    </div>
  );
};

function FoldersTable() {
  const css = useStyles();
  const files = useSelector((state) => state.Fichier);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetDocsByUserCreated());
  }, []);

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
          {files.map((file, key) => {
            return <OneDoc file={file} key={key} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

const OneDoc = ({ file }) => {
  const { id, selected, type, folder_name, created, document } = file;
  const { title, size, qr_code } = document;

  return (
    <Tr>
      <Td>
        <div className={"folder-name"}>
          <span>{title}</span>
          <span className="space50" />
        </div>
      </Td>
      <Td>
        <span className="folder-name">
          {new Date(created).toDateString()} <span className="space50" />
        </span>
      </Td>
      <Td>
        <span className="folder-name">
          {Math.floor(size / 1024)} ko <span className="space50" />
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
