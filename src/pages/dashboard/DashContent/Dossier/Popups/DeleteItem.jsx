import React, { useState, useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  main: {},
}));

const DeleteItem = (props) => {
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
        open={active}
        TransitionComponent={Transition}
        onClose={handleClose}
        scroll={"paper"}
      >
        <DialogContent dividers>
          <div className={classes.main}>
            <h1>DeleteItem</h1>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteItem;
