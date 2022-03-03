import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  TopBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& h3": {
      color: "#F80D38",
      fontSize: "24px",
      padding: "0px",
      margin: "0px",
      fontWeight: "400",
    },
  },
  notif_icon: {
    transform: "scale(2)",
    cursor: "pointer",
  },
  PersoGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& .button-notif": {
      padding: "10px",
      "& img": {
        height: "30px",
        width: "30px",
      },
    },
    "& hr": {
      border: "solid 1px #222222bb",
      margin: "5px 20px 5px 15px",
    },

    "& .dwon-arrow": {
      transform: "scale(1.3)",
      cursor: "pointer",
      margin: "0px 0px 0px 10px",
    },
  },
}));
