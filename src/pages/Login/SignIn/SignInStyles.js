import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    minHeight: "100vh",
    "& .images": {
      height: "100%",
      backgroundColor: "#A2A2A2",
    },

    "& .login": {
      minHeight: "100vh",
      padding: "100px 0px",
      backgroundColor: "#FFFFFF",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",

      "& .logo": {
        display: "block",
        margin: "auto",
      },

      "& .title": {
        "& h1": {
          fontSize: "46px",
          textAlign: "center",
          marginBottom: "20px",
        },

        "& p": {
          fontSize: "18px",
          textAlign: "center",
          color: "#999",
        },

        "& .main-color": {
          color: theme.palette.primary.main,
          cursor: "pointer",
        },
      },

      "& form": {
        width: "600px",
        padding: "10px 0px",

        "& button": {
          display: "block",
          margin: "30px auto",
        },
      },
      "& h6": {
        padding: "0px",
        margin: "0px",
        fontSize: "16px",
        fontWeight: "normal",
        color: "#A0A0A0",
        "& span": {
          color: "#000000",
          fontWeight: "Bold",
        },
      },
    },
  },
}));
