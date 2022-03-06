import React from "react";
import SideBar from "./SideBar/SideBar";
import { makeStyles } from "@mui/styles";
import { Routes, Route, Navigate } from "react-router-dom";

import { routes } from "../../routes/Main.routes";

export const useStyles = makeStyles((theme) => ({
  content: {
    padding: "48px 54px 0px 170px",
  },
}));

function Dashboard() {
  const css = useStyles();
  return (
    <div>
      <SideBar />
      <div className={css.content}>
        <Routes>
          {routes.map((elem, key) => {
            return <Route key={key} path={elem.url} element={elem.compo} />;
          })}
          <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
