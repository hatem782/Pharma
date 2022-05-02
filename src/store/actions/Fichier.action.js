import axios from "axios";
//import { useSelector } from "react-redux";
//import { Authorization, allow } from "./Headers";
import { ErrorSnack /*SuccessSnack */ } from "../keys/Snack";
import { GET_FICHIER } from "../keys/Fichier.key";

export const GetAllFichier = () => {
  return async (dispatch) => {
    try {
      let selected_data = data.map((dt, key) => {
        return { ...dt, selected: false };
      });

      dispatch({
        type: GET_FICHIER(),
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
    nom: "Nom du fichier",
    source: "nom de source",
    dossier: "Nom du dossier",
    date: "14 Janvier 2022",
    taille: "200 Ko",
    status: "Partagé",
  },
  {
    id: "123457",
    nom: "Nom du fichier",
    source: "nom de source",
    dossier: "Nom du dossier",
    date: "14 Janvier 2022",
    taille: "200 Ko",
    status: "Partagé",
  },
  {
    id: "123458",
    nom: "Nom du fichier",
    source: "nom de source",
    dossier: "Nom du dossier",
    date: "14 Janvier 2022",
    taille: "200 Ko",
    status: "Partagé",
  },
  {
    id: "123459",
    nom: "Nom du fichier",
    source: "nom de source",
    dossier: "Nom du dossier",
    date: "14 Janvier 2022",
    taille: "200 Ko",
    status: "Partagé",
  },
  {
    id: "123460",
    nom: "Nom du fichier",
    source: "nom de source",
    dossier: "Nom du dossier",
    date: "14 Janvier 2022",
    taille: "200 Ko",
    status: "Partagé",
  },
  {
    id: "123461",
    nom: "Nom du fichier",
    source: "nom de source",
    dossier: "Nom du dossier",
    date: "14 Janvier 2022",
    taille: "200 Ko",
    status: "Partagé",
  },
];
