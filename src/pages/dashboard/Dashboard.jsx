import React from "react";
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar/TopBar";
import { makeStyles } from "@mui/styles";
import EditProfilePage from "./DashContent/EditProfilePage/EditProfilePage";

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
        <TopBar />
        <EditProfilePage />
      </div>
    </div>
  );
}

export default Dashboard;
