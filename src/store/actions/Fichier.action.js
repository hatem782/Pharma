import axios from "axios";
//import { useSelector } from "react-redux";
import { getToken } from "./Headers";
import { GET_FICHIER } from "../keys/Fichier.key";
import { ErrorSnack, SuccessSnack } from "../keys/Snack";

const { REACT_APP_API_HOST } = process.env;
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

export const UploadFile = (file, callback) => {
  console.log(file);
  let body = new FormData();
  body.append("files", file);
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(
        REACT_APP_API_HOST + "/document/upload_documents/",
        {
          body,
        },
        {
          headers: {
            Authorization: `token ${getToken(getState)}`,
            // "content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      dispatch({
        type: SuccessSnack(),
        value: "Document à été crée avec succée",
      });
      //callback();
      //dispatch(GetAllByUser());
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const UploadFile2 = (file, callback) => {
  console.log(file);
  let formdata = new FormData();
  formdata.append("file", file);
  return async (dispatch, getState) => {
    // https://stackoverflow.com/questions/70313125/not-able-to-send-http-post-request-using-axios
    try {
      const response = await axios.post(
        REACT_APP_API_HOST + "/document/upload_documents/",
        {
          file,
        },
        {
          headers: {
            Authorization: `token ${getToken(getState)}`,
            // "content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({
        type: SuccessSnack(),
        value: "Document à été crée avec succée",
      });
      //callback();
      //dispatch(GetAllByUser());
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const GetDocsByUser = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(REACT_APP_API_HOST + "/document/user/", {
        headers: {
          Authorization: `token ${getToken(getState)}`,
        },
      });
      console.log(response.data.results);
      //callback();
      //dispatch(GetAllByUser());
    } catch (error) {
      console.log(error.response);
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

const data2 = [
  {
    id: 66,
    user_id: 101,
    folder_id: null,
    type: "UPLOADED",
    created: "2022-05-15T19:14:02.502000Z",
    is_shortcut: false,
    document: {
      id: 92,
      title: "API_PBird_-3",
      file: "/media/documents/92.pdf",
      size: 112268,
      type: ".pdf",
      qr_code: "/media/qr_codes/documents/92.jpg",
    },
  },
  {
    id: 65,
    user_id: 101,
    folder_id: null,
    type: "UPLOADED",
    created: "2022-05-15T16:53:07.411000Z",
    is_shortcut: false,
    document: {
      id: 91,
      title: "API_PBird_-1",
      file: "/media/documents/91.pdf",
      size: 106506,
      type: ".pdf",
      qr_code: "/media/qr_codes/documents/91.jpg",
    },
  },
  {
    id: 64,
    user_id: 101,
    folder_id: null,
    type: "UPLOADED",
    created: "2022-05-15T16:53:07.222000Z",
    is_shortcut: false,
    document: {
      id: 90,
      title: "API_PBird_-3",
      file: "/media/documents/90.pdf",
      size: 112268,
      type: ".pdf",
      qr_code: "/media/qr_codes/documents/90.jpg",
    },
  },
  {
    id: 63,
    user_id: 101,
    folder_id: null,
    type: "UPLOADED",
    created: "2022-05-15T15:58:50.633000Z",
    is_shortcut: false,
    document: {
      id: 89,
      title: "API_PBird_-3",
      file: "/media/documents/89.pdf",
      size: 112268,
      type: ".pdf",
      qr_code: "/media/qr_codes/documents/89.jpg",
    },
  },
  {
    id: 62,
    user_id: 101,
    folder_id: null,
    type: "UPLOADED",
    created: "2022-05-15T11:25:31.154000Z",
    is_shortcut: false,
    document: {
      id: 88,
      title: "API_PBird_-1",
      file: "/media/documents/88.pdf",
      size: 106506,
      type: ".pdf",
      qr_code: "/media/qr_codes/documents/88.jpg",
    },
  },
];
