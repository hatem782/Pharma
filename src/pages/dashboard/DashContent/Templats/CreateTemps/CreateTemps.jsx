import React, { useState, useEffect } from "react";
import { useStyles } from "./CreateTemps.styles";
import Grid from "@mui/material/Grid";
import TextEditor from "../../../../../components/Inputs/TextEditor";

import TabButtonGf from "../../../../../components/Buttons/TabButtonGf";
//import TabButtonYf from "../../../../../components/Buttons/TabButtonYf";

import Partager from "./popups/Partager";

function CreateTemps() {
  const css = useStyles();
  const [Text, setText] = useState({ header: "", body: "", footer: "" });

  useEffect(() => {
    console.log(Text);
  }, [Text]);

  const setHeader = (text) => {
    setText({ ...Text, header: text });
  };
  const setBody = (text) => {
    setText({ ...Text, body: text });
  };
  const setFooter = (text) => {
    setText({ ...Text, footer: text });
  };

  // ********* popups ********
  const [dialog, setdialog] = useState({
    active: false,
    type: "", // share
    value: null,
  });
  const openDial = (type, value) => {
    setdialog({ active: true, type: type, value: value });
  };

  const closeDial = () => {
    setdialog({ active: false, type: "", value: null });
  };

  const openShare = () => {
    openDial("share", null);
  };

  return (
    <div className={css.main}>
      <h4>Créer un nouveau fichierMes fichiers</h4>
      <div className="create-temp">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <div className="model">
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
              <div className="footer">
                <div
                  className="subInfo"
                  dangerouslySetInnerHTML={{ __html: Text.footer }}
                />
              </div>
            </div>
            <a className="previsualise" href="#">
              Prévisualiser
            </a>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
            <div className="text-editers">
              <div className="text-editer">
                <TextEditor
                  date={Text.header}
                  onChange={setHeader}
                  height="200px"
                />
              </div>
              <div className="text-editer">
                <TextEditor
                  date={Text.body}
                  onChange={setBody}
                  height="200px"
                />
              </div>
              <div className="text-editer">
                <TextEditor
                  date={Text.footer}
                  onChange={setFooter}
                  height="200px"
                />
              </div>
              <div className="buttons">
                <TabButtonGf>Sauvegarder</TabButtonGf>
                <TabButtonGf onClick={openShare}>Partager</TabButtonGf>
                <TabButtonGf>Génerer</TabButtonGf>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {dialog.type === "share" ? (
        <Partager dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default CreateTemps;
