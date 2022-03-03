import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  siderbar: {
    width: 90,
    backgroundColor: "white",
    height: "100vh",
    borderRadius: "0px 30px 30px 0px",
    padding: "60px 20px",
    overflow: "hidden",
    boxShadow: "0px 20px 40px #329d9c52",
    position: "fixed",
    zIndex: "99",

    display: "flex",
    flexDirection: "column",
    transition: "all 0.1s",

    "& .link_text": {
      display: "none",
    },

    "&:hover": {
      width: 240,
      alignItems: "flex-start",
      padding: "60px 30px",

      "& .link_text": {
        display: "inline",
      },
    },

    [theme.breakpoints.down("lg")]: {
      width: 90,
    },
  },

  logo: {
    width: "45px !important",
  },

  navlinks: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "20px 12px",

    "& .icon_link": {
      display: "flex",
      alignItems: "center",
      transition: "all 0.1s",
      "& img": {
        width: "25px",
        margin: "0px 10px 0px 0px",
      },
      "& .link_text": {
        color: theme.palette.primary.main,
        fontSize: "18px",
      },
      "&:hover": {
        cursor: "pointer",
        transform: "scale(1.2)",
      },
    },
  },
}));
