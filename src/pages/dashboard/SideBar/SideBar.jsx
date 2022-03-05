import React, { useState } from "react";

import { useStyles } from "./SideBarStyles";
import logo from "../../../assets/svgs/sidebar/logo.svg";
import folder from "../../../assets/svgs/sidebar/folder.svg";
import chat from "../../../assets/svgs/sidebar/icon_chat-room.svg";
import rounded_chart from "../../../assets/svgs/sidebar/pie-chart.svg";
import logout from "../../../assets/svgs/sidebar/shutdown.svg";
import settings from "../../../assets/svgs/sidebar/settings.svg";
import bar_chart from "../../../assets/svgs/sidebar/chart-bar-32.svg";
import trash from "../../../assets/svgs/sidebar/trash.svg";

import full_logo from "../../../assets/svgs/sidebar/full_logo.svg";

function SideBar() {
  const [hovered, setHovered] = useState(false);
  const cs = useStyles();

  const mouseEntered = () => {
    console.log("mouse entered");
    setHovered(true);
  };

  const mouseLeaved = () => {
    console.log("mouse leaved");
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={mouseEntered}
      onMouseLeave={mouseLeaved}
      className={cs.siderbar}
    >
      {hovered ? (
        <img src={full_logo} className={cs.full_logo} />
      ) : (
        <div styles={{ width: "45px" }}>
          <img src={logo} className={cs.logo} />
        </div>
      )}

      <div className={cs.navlinks}>
        <div className="icon_link">
          <img src={bar_chart} />
          <span className="link_text"> Dashboard</span>
        </div>

        <div className="icon_link">
          <img src={folder} />
          <span className="link_text"> Dossier</span>
        </div>

        <div className="icon_link">
          <img src={chat} />
          <span className="link_text"> Messages</span>
        </div>

        <div className="icon_link">
          <img src={rounded_chart} />
          <span className="link_text"> Parrainage</span>
        </div>

        <div className="icon_link">
          <img src={trash} />
          <span className="link_text"> Corbeille</span>
        </div>

        <div className="icon_link">
          <img src={settings} />
          <span className="link_text"> Paramètres</span>
        </div>

        <div className="icon_link">
          <img src={logout} />
          <span className="link_text"> Déconnexion</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
