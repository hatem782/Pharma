import React, { useState } from "react";
//import RechInput from "../../../components/Inputs/RechInput";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import notification from "../../../assets/svgs/notification.svg";
import person_img from "../../../assets/images/Circle.png";

import { useStyles } from "./TopBarStyles";

function ToBaar() {
  const css = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={css.TopBar}>
      {/* <RechInput /> */}
      <h3>Paramètres du profil</h3>
      <div className={css.PersoGroup}>
        <IconButton className="button-notif">
          <img src={notification} />
        </IconButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Avatar alt="Remy Sharp" src={person_img} />
        <div>
          <KeyboardArrowDownIcon onClick={handleClick} className="dwon-arrow" />

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>Status : En ligne</MenuItem>
            <MenuItem>Paramètres du compte</MenuItem>
            <MenuItem>Feedback</MenuItem>
            <MenuItem>Se déconnecter</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default ToBaar;
