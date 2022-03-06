// ************************** ICONS ****************************
import folder from "../assets/svgs/sidebar/folder.svg";
import chat from "../assets/svgs/sidebar/icon_chat-room.svg";
import rounded_chart from "../assets/svgs/sidebar/pie-chart.svg";
import logout from "../assets/svgs/sidebar/shutdown.svg";
import settings from "../assets/svgs/sidebar/settings.svg";
import bar_chart from "../assets/svgs/sidebar/chart-bar-32.svg";
import trash from "../assets/svgs/sidebar/trash.svg";

// ************************** Components ****************************
import EditPage from "../pages/dashboard/DashContent/EditProfilePage/EditProfilePage.jsx";
import MainPage from "../pages/dashboard/DashContent/MainPage/MainPage";

// ************************** TOP BAR *******************************

import TopBar from "../pages/dashboard/TopBar/TopBar";
import TopBarWithRech from "../pages/dashboard/TopBar/TopBarWithRech";

export const routes = [
  {
    mainUrl: "/dashboard",
    url: "/main",
    img: bar_chart,
    title: "Dashboard",
    compo: (
      <>
        <TopBarWithRech />
        <MainPage />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/folder",
    img: folder,
    title: "Dossier",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/messages",
    img: chat,
    title: "Messages",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/parrainage",
    img: rounded_chart,
    title: "Parrainage",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/corbeille",
    img: trash,
    title: "Corbeille",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/parametres",
    img: settings,
    title: "Paramètres",
    compo: (
      <>
        <TopBar />
        <EditPage />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/deconnexion",
    img: logout,
    title: "Déconnexion",
    compo: <></>,
  },
];
