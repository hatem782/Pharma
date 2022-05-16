import React, { useState, useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import Input from "../../../../../components/Inputs/Input2";
import Button from "../../../../../components/Buttons/TabButtonRo";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { SendToTrushMultiple } from "../../../../../store/actions/Dossier.action";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: "650px",
  },
  main: {
    padding: "45px 30px",
    minWidth: "650px",
    "& h3": {
      color: theme.palette.primary.main,
      fontSize: "24px",
      margin: "0px 0px 20px 0px",
      fontWeight: "600",
    },
    "& p": {
      fontSize: "18px",
      margin: "0px 0px 20px 0px",
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
      backgroundColor: "#F00",
      color: "white",
    },
  },
}));

const DeleteGroup = (props) => {
  const { dialog, handleClose } = props;
  const { active, value } = dialog;
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    let ids = value.map((item) => {
      return { id: item.folder.id };
    });
    console.log(ids);
    dispatch(SendToTrushMultiple(ids, handleClose));
  };

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
          <h3>Supprimer un dossier</h3>
          <p>vous êtes sure de supprimer ces dossiers ?</p>
          <Button onClick={handleSubmit}>Supprimer tout</Button>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteGroup;
