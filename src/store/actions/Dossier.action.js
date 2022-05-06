import axios from "axios";
//import { useSelector } from "react-redux";
//import { Authorization, allow } from "./Headers";
import { ErrorSnack /*SuccessSnack */ } from "../keys/Snack";
import { GET_DOSSIER } from "../keys/Dosser.key";
import { headers } from "./Headers";
const { REACT_APP_API_HOST } = process.env;

export const AddFolder = (name, callback) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        REACT_APP_API_HOST + "/folder/add/",
        { name: name },
        { ...headers }
      );
      //console.log(response);
      callback();
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const GetAllByUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        REACT_APP_API_HOST + "/folder/by_user/",
        { ...headers }
      );
      //console.log(response.data.results);
      dispatch({
        type: GET_DOSSIER(),
        value: response.data.results.map((dt) => {
          return { ...dt, selected: false };
        }),
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const GetRecievedFolders = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        REACT_APP_API_HOST + "/folder/received/",
        { ...headers }
      );
      //console.log(response.data.results);
      dispatch({
        type: GET_DOSSIER(),
        value: response.data.results.map((dt) => {
          return { ...dt, selected: false };
        }),
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const GetCreatedFolders = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        REACT_APP_API_HOST + "/folder/created/",
        {
          ...headers,
        }
      );
      //console.log(response.data.results);
      dispatch({
        type: GET_DOSSIER(),
        value: response.data.results.map((dt) => {
          return { ...dt, selected: false };
        }),
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const ShareOneFolders = (id, users) => {
  console.log({ users: [...users], folders: [{ id: id }] });
  return async (dispatch) => {
    try {
      const response = await axios.post(
        REACT_APP_API_HOST + "/folder/send_to_users/",

        { users: [...users], folders: [{ id: id }] },
        {
          ...headers,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };
};
