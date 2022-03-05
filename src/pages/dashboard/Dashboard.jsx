import React from "react";
import SideBar from "./SideBar/SideBar";
import TopBar from "./TopBar/TopBar";
import TopBarWithRech from "./TopBar/TopBarWithRech";
import { makeStyles } from "@mui/styles";
import EditProfilePage from "./DashContent/EditProfilePage/EditProfilePage";
import MainPage from "./DashContent/MainPage/MainPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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
        <Router>
          <Routes>
            <Route
              path="/editProfile"
              element={
                <>
                  <TopBar />
                  <EditProfilePage />
                </>
              }
            />
            <Route
              path="/main"
              element={
                <>
                  <TopBarWithRech />
                  <MainPage />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/main" />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default Dashboard;
