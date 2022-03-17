import React, { useState } from "react";

import { useStyles } from "./SideBarStyles";
import logo from "../../../assets/svgs/sidebar/logo.svg";
import full_logo from "../../../assets/svgs/sidebar/full_logo.svg";

import NavLink from "../../../components/NavLink/NavLink";

import { routes } from "../../../routes/Main.routes";

function SideBar() {
  const [hovered, setHovered] = useState(false);
  const cs = useStyles();

  const mouseEntered = () => {
    //console.log("mouse entered");
    setHovered(true);
  };

  const mouseLeaved = () => {
    //console.log("mouse leaved");
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
        <img src={logo} className={cs.logo} />
      )}

      <div className={cs.navlinks}>
        {routes.map((rt, key) => {
          return (
            <NavLink key={key} to={rt.mainUrl + rt.url}>
              <div className="icon_link">
                <img src={rt.img} />
                <span className="link_text"> {rt.title}</span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
