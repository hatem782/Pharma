import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import notification from "../../assets/svgs/notification.svg";
import person_img from "../../assets/images/Circle.png";

import { useStyles } from "./TopBarStyles";

function Notif_Avatar() {
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
          <div className={css.notif_menu}>
            <MenuItem>Status : En ligne</MenuItem>
            <Divider />
            <MenuItem>Paramètres du compte</MenuItem>
            <Divider />
            <MenuItem>Feedback</MenuItem>
            <Divider />
            <MenuItem>Se déconnecter</MenuItem>
          </div>
        </Menu>
      </div>
    </div>
  );
}

export default Notif_Avatar;
