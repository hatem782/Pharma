import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    position: "relative",
    padding: "400px 256px ",

    "& .section": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      "& .content": {
        width: "50%",
        "& h2": {
          margin: "0px",
          fontSize: "42px",
        },

        "& p": {
          color: "#8F8F8F",
          fontSize: "24px",
          fontWeight: "500",
          lineHeight: "1.8",
        },

        "& h3": {
          fontSize: "24px",
          color: theme.palette.primary.main,
        },
      },

      "&  .steps": {
        width: "50%",
      },
    },
  },
}));
