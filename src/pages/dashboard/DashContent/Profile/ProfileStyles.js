import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "900px",
    margin: "30px 0px 50px 0px",
    backgroundColor: "white",
    boxShadow: " 32px 32px 59px #329D9C33",
    borderRadius: "32px",
    padding: "50px 0px",

    "& .img-importing-section": {
      "& .profile-img": {
        display: "block",
        margin: "auto",
        width: "140px",
      },
      "& p": {
        fontSize: "18px",
        textDecoration: "underline",
        textAlign: "center",
        cursor: "pointer",
      },
    },

    "& .form-section": {
      padding: "0px 0px 0px 80px",

      "& h1": {
        margin: "0px 0px 40px 0px",
        padding: "0px",
        fontSize: "32px",
        fontWeight: "500",
      },

      "& .btn-group": {
        margin: "0px 0px 50px 0px",
        "& button": {
          width: "160px",
          padding: "17px 0px ",
          margin: "0px 80px 0px 0px",

          fontSize: "18px",
          fontWeight: "500",

          backgroundColor: "transparent",
          border: "none",
          borderRadius: "16px",
          outline: "none",
          transition: "all 0.2s",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "#EFEFEF",
          },
        },
        "& .active": {
          backgroundColor: `${theme.palette.primary.main} !important`,
          color: "white",
        },
      },
      "& .profile-info": {
        "& table": {
          width: "100%",
          borderCollapse: "collapse",
          "& .tr-border": {
            borderBottom: "solid 1px #848484",
          },
          "& td": {
            height: "110px",
            //display:"flex",
          },
          "& .info-name": {
            width: "450px",
            fontSize: "21px",
            color: "#C0C0BE",
            fontWeight: "600",
          },
          "& .info-value": {
            fontSize: "21px",
            fontWeight: "600",
            "& input": {
              width: "auto !important",
            },
          },
          "& .info-edit": {
            width: "80px",
          },
        },
      },
    },
  },
}));
