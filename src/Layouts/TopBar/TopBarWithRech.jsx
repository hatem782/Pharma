import React, { useState } from "react";
import RechInput from "../../components/Inputs/RechInput";
import { useStyles } from "./TopBarStyles";
import Notif_Avatar from "./Notif_Avatar";
import Button from "../../components/Buttons/SubmitBtn";
import Menu from "../../components/Menu/Menu";
import importer from "../../assets/svgs/topbar/Groupe 17926.svg";
import create from "../../assets/svgs/topbar/359200.svg";
import drag from "../../assets/svgs/topbar/Groupe 17929.svg";

function TopBarWithRech() {
  const css = useStyles();

  return (
    <div className={css.TopBar}>
      <RechInput />
      <AjouterModel />
      <Notif_Avatar />
    </div>
  );
}

export default TopBarWithRech;

const AjouterModel = () => {
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
    <div>
      <Button onClick={handleClick}>Ajouter un projet</Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        pos={80}
      >
        <div className={css.AddProject}>
          <label>
            <Item
              img={importer}
              txt1="Importer un projet"
              txt2="Parcourez les fichiers de votre machine."
            />
            <input
              style={{ display: "none" }}
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
          </label>
          <Item
            img={create}
            txt1="Créer un document"
            txt2="Créez votre document grâce aux templates que vous avez créés"
          />
        </div>
      </Menu>
    </div>
  );
};

const Item = ({ img, txt1, txt2 }) => {
  return (
    <div className="item">
      <div className="img-container">
        <img src={img} />
      </div>
      <div className="divider" />
      <div className="text">
        <h1>{txt1}</h1>
        <h2>{txt2}</h2>
      </div>
    </div>
  );
};
