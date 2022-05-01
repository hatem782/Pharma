import axios from "axios";
//import { useSelector } from "react-redux";
//import { Authorization, allow } from "./Headers";
import { ErrorSnack /*SuccessSnack */ } from "../keys/Snack";
import { GET_DOSSIER } from "../keys/Dosser.key";

export const GetAllDossier = () => {
  return async (dispatch) => {
    try {
      let selected_data = data.map((dt, key) => {
        return { ...dt, selected: false };
      });

      dispatch({
        type: GET_DOSSIER(),
        value: selected_data,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ErrorSnack(),
        value: "can't get data",
      });
    }
  };
};

const data = [
  {
    id: "123456",
    nom: "Nom du dossi",
    source: "nom de source",
    date: "14 Janvier 2022",
    taille: "200 Ko",
  },
  {
    id: "123457",
    nom: "Nom du dossier",
    source: "nom de source",
    date: "14 Janvier 2022",
    taille: "200 Ko",
  },
  {
    id: "123458",
    nom: "Nom du dossier",
    source: "nom de source",
    date: "14 Janvier 2022",
    taille: "200 Ko",
  },
  {
    id: "123459",
    nom: "Nom du dossier",
    source: "nom de source",
    date: "14 Janvier 2022",
    taille: "200 Ko",
  },
  {
    id: "123460",
    nom: "Nom du dossier",
    source: "nom de source",
    date: "14 Janvier 2022",
    taille: "200 Ko",
  },
  {
    id: "123461",
    nom: "Nom du dossier",
    source: "nom de source",
    date: "14 Janvier 2022",
    taille: "200 Ko",
  },
];
