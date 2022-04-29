import React from "react";

import { makeStyles } from "@mui/styles";

import img from "../../assets/svgs/icons/downInput.svg";

export const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",

    "& .content": {
      position: "absolute",
      borderRadius: "12px",
      border: "solid 2px #95989A66",
      marginTop: "75px",
      display: "none",
      width: "100%",
      backgroundColor: "white",
      padding: "25px 19px",
    },

    "&:hover": {
      "& .content": {
        display: "block",
      },
    },

    "& .icon": {
      position: "absolute",
      right: "10px",
      top: "25px",
      backgroundColor: "#FCFCFC",
      padding: "10px",
      transform: "scale(1.3)",
      cursor: "pointer",
    },
  },

  inputContainer: {
    marginTop: "30px",
    [theme.breakpoints.down("xl")]: {
      marginTop: "15px",
    },
  },

  labels: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  label: {
    color: "#95989A",
    fontSize: "18px",
    [theme.breakpoints.down("xl")]: {
      fontSize: "16px",
    },
  },

  error: {
    color: "#FF2200",
  },

  input: {
    fontSize: "20px",
    backgroundColor: "#FCFCFC",
    border: "solid 2px #95989A66",
    borderRadius: "5px",
    padding: "15px",
    margin: "10px 0px",
    width: "100%",
    outline: "none",
    "&:focus": {
      border: "solid 2px #95989A",
    },

    [theme.breakpoints.down("xl")]: {
      fontSize: "14px",
      padding: "10px",
      margin: "5px 0px",
    },
  },
  input_error: {
    border: "solid 2px #FF2200",
  },
}));
function EditedSelect(props) {
  const css = useStyles();
  const { label, name, type = "text", value, onChange } = props;
  return (
    <div className={css.main}>
      <label className={css.label}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        className={css.input}
        placeholder="select an element"
      />
      <img src={img} className="icon" />
      <div className="content">
        {items.map((item, key) => {
          return <Item key={key} onClick={() => {}} item={item} />;
        })}
      </div>
    </div>
  );
}

export default EditedSelect;

const useStyles2 = makeStyles((theme) => ({
  main: {
    borderBottom: "solid 2px #CFD0D3",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",

    "& .main-text": {
      display: "flex",
      alignItems: "center",
    },

    "& .puce": {
      backgroundColor: theme.palette.primary.main,
      height: 10,
      width: 10,
      borderRadius: 2,
      margin: "0px 10px 0px 0px",
      display: "block",
    },
    "& .title": {
      color: "#454F63",
      fontSize: "16px",
    },
    "& .countity": {
      color: "#78849E",
      fontSize: "16px",
    },
  },
}));

const Item = ({ item, onClick }) => {
  const css = useStyles2();

  return (
    <div className={css.main} onClick={onClick}>
      <div className="main-text">
        <span className="puce" />
        <p className="title">{item.title}</p>
      </div>
      <p className="countity">({item.number})</p>
    </div>
  );
};

const items = [
  {
    title: "source1",
    number: 22,
  },
  {
    title: "source1",
    number: 35,
  },
  {
    title: "source1",
    number: 17,
  },
  {
    title: "source1",
    number: 6,
  },
];
