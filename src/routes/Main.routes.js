// ************************** ICONS ****************************
import DashboardIcon from "@mui/icons-material/Dashboard";
import CollectionsIcon from "@mui/icons-material/Collections";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import EmailIcon from "@mui/icons-material/Email";

// ************************** COMPS ****************************

// import GalleryPage from "../pages/dashboard/GalleryPage/GestGallery";
// import GestEvents from "../pages/dashboard/EventsPage/GestEvents";
// import GestBlogs from "../pages/dashboard/BlogsPage/GestBlog";
// import GestContacts from "../pages/dashboard/ContactsPage/GestContacts";
// import GestMessages from "../pages/dashboard/MessagesPage/GestMessages";
// import GestTeam from "../pages/dashboard/TeamPage/GestTeam";
// import GestMemory from "../pages/dashboard/ForumMemoryPage/GestMemory";
// import Logout from "../pages/login/Logout";

export const routes = [
  {
    mainUrl: "/dashboard",
    url: "/main",
    icon: <DashboardIcon />,
    title: "dashboard",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/gallery",
    icon: <CollectionsIcon />,
    title: "gallery",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/blogs",
    icon: <ArticleIcon />,
    title: "blogs",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/events",
    icon: <EventIcon />,
    title: "events",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/memories",
    icon: <AutoStoriesIcon />,
    title: "memories",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/contacts",
    icon: <ContactMailIcon />,
    title: "contacts",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/emails",
    icon: <EmailIcon />,
    title: "emails",
    compo: <></>,
  },
];

export const subroutes = [
  {
    mainUrl: "/dashboard",
    url: "/team",
    icon: <GroupsIcon />,
    title: "team",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/settings",
    icon: <SettingsIcon />,
    title: "settings",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/logout",
    icon: <MeetingRoomIcon />,
    title: "Logout",
    compo: <></>,
  },
];
