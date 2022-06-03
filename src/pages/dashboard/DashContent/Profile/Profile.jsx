import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

import { useStyles } from "./ProfileStyles";

import noImg from "../../../../assets/images/noImg.png";
import GreenButton from "../../../../components/Buttons/TabButtonGf";
import RedButton from "../../../../components/Buttons/TabButtonRo";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../../components/Inputs/Input2";

const profile_links = ["Profil", "Sécurité", "Membres"];

function Profile() {
  const css = useStyles();
  const user = useSelector((state) => state.User.user);
  const [selected, setSelected] = useState("Profil");

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className={css.main}>
      <div className="paper">
        <div className="params">
          <h4>Paramètres</h4>
          <p className="grey-p">Gérer les paramètres de votre profil</p>
          <br />
          <ul className="list">
            {profile_links.map((elem, key) => {
              return (
                <li
                  key={key}
                  onClick={() => {
                    setSelected(elem);
                  }}
                  className={selected === elem ? "selected" : ""}
                >
                  {elem}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="content">
          <div>
            {selected === "Profil" && (
              <>
                <Header user={user} />
                <EditProfileData user={user} />
                <Footer />
              </>
            )}

            {selected === "Sécurité" && (
              <>
                <Header user={user} />
                <EditSecurityData user={user} />
                <Footer />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Header = ({ user }) => {
  const css = useStyles();
  const { id, photo } = user;
  return (
    <div className={css.header}>
      <h4>Votre photo de profil</h4>
      <div className="container">
        <img src={photo ? photo : noImg} />
        <div className="group-buttons">
          <GreenButton>Changer de photo</GreenButton>
          <RedButton>Supprimer</RedButton>
        </div>
      </div>
      <h4 className="ID">ID : {id}</h4>
    </div>
  );
};

const Footer = () => {
  const css = useStyles();
  return (
    <div className={css.hint}>
      <h4>
        il est possible de{" "}
        <span className="red"> désactiver temporairement votre compte </span>,
        mais c'est irréversible. Assurez-vous que vous souhaitez le faire.
      </h4>
    </div>
  );
};

const EditProfileData = ({ user }) => {
  const css = useStyles();
  return (
    <div>
      <EditedFieldData label="Nom" value="Bertan" />
      <EditedFieldData label="Prénom" value="Alexandre" />
      <EditedFieldData label="Email" value="Alexandre.Bertan@gmail.com" />
    </div>
  );
};

const EditSecurityData = ({ user }) => {
  const css = useStyles();
  return (
    <div>
      <EditedFieldData label="Numéro de téléphone" value="+33 15 389 320" />
      <EditedFieldData label="Mot de passe" value="Alexandre" type="password" />
    </div>
  );
};

const EditedFieldData = ({ label, value, type }) => {
  const css = useStyles();
  const [opt, setOpt] = useState(false);
  const [val, setVal] = useState("");

  // ****************** OPT ******************
  const [valNumb, setvalNumb] = useState("");
  const [match, setMatch] = useState(0); // 0:not verified yet / 1 : match / -1 : not equal

  useEffect(() => {
    setVal(value);
  }, [value]);

  const inputHandler = (e) => {
    setVal(e.target.value);
  };

  const SendOpt = () => {
    setOpt(true);
  };

  return (
    <div className={css.editedFieldData}>
      <div className="text-field-container">
        <div className="text-field">
          <Input
            label={label}
            onChange={inputHandler}
            type={type}
            value={val}
          />
        </div>
        <div onClick={SendOpt} className="button">
          Modifier
        </div>
      </div>
      {opt && (
        <div className="opt-field-container">
          <p className="opt-txt">
            Entrer le code secret envoyé par SMS sur votre téléphone portable
          </p>
          <InpNums valNumb={valNumb} setvalNumb={setvalNumb} match={match} />
        </div>
      )}
    </div>
  );
};

const InpNums = ({ valNumb, setvalNumb, match }) => {
  const [number, setNumber] = useState(["", "", "", "", "", ""]);
  const css = useStyles();

  const handlerChange = (event, key) => {
    //if (number[key].length == 0 || event.target.value === "") {
    let newNumber = [...number];
    newNumber[key] = event.target.value;
    setNumber([...newNumber]);
    if (key < 5 && event.target.value) {
      document.getElementById(`inp_${key + 1}`).focus();
    }
  };

  useEffect(() => {
    if (valNumb.length === 6) {
      setNumber(valNumb.split(""));
      document.getElementById(`inp_5`).focus();
    }
  }, []);

  useEffect(() => {
    setvalNumb(number.join(""));
  }, [number]);

  return (
    <div className={css.inputs}>
      {number.map((num, key) => {
        return (
          <input
            className={`${match === 1 ? " match " : ""} ${
              match === -1 ? " not-match " : ""
            }`}
            key={key}
            value={num}
            maxLength="1"
            onChange={(event) => {
              handlerChange(event, key);
            }}
            type="text"
            name={`inp_${key}`}
            id={`inp_${key}`}
          />
        );
      })}
    </div>
  );
};

export default Profile;
