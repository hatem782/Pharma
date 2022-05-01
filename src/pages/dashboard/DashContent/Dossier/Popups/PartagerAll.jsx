import React, { useState, useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import Input from "../../../../../components/Inputs/Input2";
import Button from "../../../../../components/Buttons/TabButtonGf";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: "650px",
  },
  main: {
    padding: "30px",
    minWidth: "650px",
    "& h3": {
      color: theme.palette.primary.main,
      fontSize: "24px",
      margin: "0px 0px 20px 0px",
      fontWeight: "600",
    },
    "& p": {
      fontSize: "18px",
      margin: "0px 0px -5px 0px",
      fontWeight: "600",
      color: "black",
    },
    "& input": {
      width: "100%",
    },
    "& button": {
      fontSize: "18px",
      fontWeight: "600",
      display: "block",
      margin: "auto",
      marginTop: "20px",
      padding: "12px 40px",
    },
  },
}));

const Partager = (props) => {
  const { dialog, handleClose } = props;
  const { active } = dialog;
  const classes = useStyles();

  //   const Submit = () => {
  //     AddGal(Item);
  //     handleClose();
  //   };

  return (
    <div>
      <Dialog
        classes={{ paper: classes.paper }}
        open={active}
        TransitionComponent={Transition}
        onClose={handleClose}
        scroll={"paper"}
      >
        <div className={classes.main}>
          <h3>Partager votre dossiers</h3>
          <p>Entrer le numéro de téléphone</p>
          <Input placeholder="+ - -   - - -   - - -" />
          <Button>Partager</Button>
        </div>
      </Dialog>
    </div>
  );
};

export default Partager;
