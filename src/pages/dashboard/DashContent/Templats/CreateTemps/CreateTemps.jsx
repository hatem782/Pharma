import React, { useState } from "react";
import { useStyles } from "./CreateTemps.styles";
import Grid from "@mui/material/Grid";
import TextEditor from "../../../../../components/Inputs/TextEditor";

import TabButtonGf from "../../../../../components/Buttons/TabButtonGf";
import TabButtonYf from "../../../../../components/Buttons/TabButtonYf";

function CreateTemps() {
  const css = useStyles();
  const [Text, setText] = useState({ header: "", body: "", footer: "" });
  const setHeader = (text) => {
    setText({ ...Text, header: text });
  };
  const setBody = (text) => {
    setText({ ...Text, body: text });
  };
  const setFooter = (text) => {
    setText({ ...Text, footer: text });
  };
  return (
    <div className={css.main}>
      <h4>Créer un nouveau fichierMes fichiers</h4>
      <div className="create-temp">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <div className="model"></div>
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
                <TabButtonYf>Partager</TabButtonYf>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CreateTemps;
