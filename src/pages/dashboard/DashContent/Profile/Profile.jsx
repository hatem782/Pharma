import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useStyles } from "./ProfileStyles";

import img from "../../../../assets/images/Circle2.png";
import editIcon from "../../../../assets/svgs/edit2.svg";

import Input from "../../../../components/Inputs/Input";
const buttons = ["Personnel", "Security", "Templates"];

const Pers = {
  "First Name": "Bertan",
  "Last Name": "Alexandre",
  "Mail Adress": "Alexandre.Bertan@gmail.com",
  "Telephone Number": "+33 53 89 32 00",
};

function Profile() {
  const css = useStyles();
  const [act_section, setAct_section] = useState("Personnel");
  return (
    <div className={css.main}>
      <Grid container spacing={2}>
        <Grid item xl={2}>
          <div className="img-importing-section">
            <img src={img} className="profile-img" />
            <p>Importer une image</p>
          </div>
        </Grid>
        <Grid item xl={9}>
          <div className="form-section">
            <h1>Details</h1>
            <div className="btn-group">
              {buttons.map((name, key) => {
                return (
                  <button
                    key={key}
                    className={name == act_section ? "active" : ""}
                    onClick={() => {
                      setAct_section(name);
                    }}
                  >
                    {name}
                  </button>
                );
              })}
            </div>
            <div className="profile-info">
              <table>
                <PartOne />
              </table>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;

const PartOne = () => {
  const [nocv, setNocv] = useState(""); // name of changing value
  const [data, setData] = useState({ ...Pers });

  const handlerChange = (event, name) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const ValOrInput = (name) => {
    return name === nocv ? (
      <Input onChange={handlerChange} name={name} value={data[name]} />
    ) : (
      data[name]
    );
  };

  return (
    <tbody>
      {Object.keys(data).map((name, key) => {
        return (
          <tr
            key={key}
            className={key < Object.keys(data).length - 1 ? "tr-border" : ""}
          >
            <td className="info-name">{name}</td>
            <td className="info-value">{ValOrInput(name)}</td>
            <td className="info-edit">
              <img
                src={editIcon}
                onClick={() => {
                  setNocv(name === nocv ? "" : name);
                }}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

/*


<table>
                <tbody>
                  <tr className="tr-border">
                    <td className="info-name">First Name</td>
                    <td className="info-value">Bertan</td>
                    <td className="info-edit">
                      <img src={editIcon} />
                    </td>
                  </tr>
                  <tr className="tr-border">
                    <td className="info-name">Last Name</td>
                    <td className="info-value">Alexandre</td>
                    <td className="info-edit">
                      <img src={editIcon} />
                    </td>
                  </tr>
                  <tr className="tr-border">
                    <td className="info-name">Mail Adress</td>
                    <td className="info-value">Alexandre.Bertan@gmail.com</td>
                    <td className="info-edit">
                      <img src={editIcon} />
                    </td>
                  </tr>
                  <tr>
                    <td className="info-name">Telephone Number</td>
                    <td className="info-value">+33 53 89 32 00</td>
                    <td className="info-edit">
                      <img src={editIcon} />
                    </td>
                  </tr>
                </tbody>
              </table>


 */
