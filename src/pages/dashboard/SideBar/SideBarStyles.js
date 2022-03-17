import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  siderbar: {
    width: 90, // bring it back to 90
    backgroundColor: "white",
    height: "100vh",
    borderRadius: "0px 30px 30px 0px",
    padding: "60px 00px", // bring it back 60 20
    overflow: "hidden",
    boxShadow: "0px 20px 40px #329d9c52",
    position: "fixed",
    zIndex: "99",

    display: "flex",
    flexDirection: "column",
    transition: "all 0.1s",

    "& .link_text": {
      display: "none", // bring it back
    },

    "&:hover": {
      width: 240,
      //alignItems: "flex-start",
      padding: "60px 0px",

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
    display: "block",
    margin: "auto",
    //transition: " all 0.5s",
  },

  full_logo: {
    width: "200px",
    display: "block",
    margin: "auto",
    transition: " all 0.3s",
  },

  navlinks: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "20px 0px 0px 20px",

    "& a": {
      width: "100%",
    },

    "& .icon_link": {
      width: "100%",

      display: "flex",
      alignItems: "center",
      transition: "all 0.1s",
      padding: "20px 0px",
      borderRadius: "20px 0px 0px 20px",
      "& img": {
        width: "25px",
        margin: "0px 10px 0px 10px",
      },
      "& .link_text": {
        color: theme.palette.primary.main,
        fontSize: "18px",
      },
      "&:hover": {
        cursor: "pointer",
        background: "rgb(29,191,115)",
        background:
          "linear-gradient(90deg, rgba(29,191,115,1) 0%, rgba(29,191,115,0.4990371148459384) 100%)",
        padding: "20px 0px 20px 20px",

        "& .link_text": {
          color: "white",
        },
        "& img": {
          filter: "brightness(0) invert(1)",
        },
      },
    },
  },
}));
