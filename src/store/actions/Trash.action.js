import axios from "axios";
import { getToken } from "./Headers";
import { GET_CORBEILLE } from "../keys/Corbeille.key";
import { ErrorSnack, SuccessSnack } from "../keys/Snack";

const { REACT_APP_API_HOST } = process.env;

export const GetTrushByUser = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(REACT_APP_API_HOST + "/trash/user/", {
        headers: {
          Authorization: `token ${getToken(getState)}`,
        },
      });
      let newData = [];

      for (let i = 0; i < response.data.results.length; i++) {
        let { id, deleted, folder_id, document_id } = response.data.results[i];
        let selected = false;
        let oneData = { id, deleted, selected, folder_id, document_id };

        const itemResp = await axios.get(REACT_APP_API_HOST + `/trash/${id}/`, {
          headers: {
            Authorization: `token ${getToken(getState)}`,
          },
        });
        if (folder_id) {
          // it is folder
          console.log(itemResp.data.folder);
          let { name, size } = itemResp.data.folder;
          oneData = {
            ...oneData,
            type: "Dossier",
            title: name,
            size,
            file: null,
          };
        } else if (document_id) {
          // it is document
          console.log(itemResp.data.document);
          let { title, size, file } = itemResp.data.document;
          oneData = { ...oneData, type: "Document", title, size, file };
        }
        if (folder_id || document_id) {
          newData.push({ ...oneData });
        } else {
          console.log(itemResp);
        }
      }

      dispatch({
        type: GET_CORBEILLE(),
        value: newData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeletePermanently = (items, callback, errorCallback) => {
  console.log(items);
  let folders = [];
  let documents = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].type === "Dossier") {
      folders.push({ id: items[i].folder_id });
    } else {
      documents.push({ id: items[i].document_id });
    }
  }

  return async (dispatch, getState) => {
    try {
      if (documents.length) {
        const docresp = await axios.delete(
          REACT_APP_API_HOST + "/trash/delete_documents/",
          {
            data: { documents: [...documents] },
            headers: {
              Authorization: `token ${getToken(getState)}`,
            },
          }
        );
        console.log(docresp);
      }
      if (folders.length) {
        const foldresp = await axios.delete(
          REACT_APP_API_HOST + "/trash/delete_folders/",
          {
            data: { folders: [...folders] },
            headers: {
              Authorization: `token ${getToken(getState)}`,
            },
          }
        );
        console.log(foldresp);
      }

      await dispatch(GetTrushByUser());
      callback();
    } catch (error) {
      errorCallback();
      console.log(error.response);
    }
  };
};

export const Restore = (items, callback, errorCallback) => {
  console.log(items);
  let folders = [];
  let documents = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].type === "Dossier") {
      folders.push({ id: items[i].folder_id });
    } else {
      documents.push({ id: items[i].document_id });
    }
  }

  return async (dispatch, getState) => {
    try {
      if (documents.length) {
        const docresp = await axios.post(
          REACT_APP_API_HOST + "/trash/restor_documents/",
          { documents: [...documents] },
          {
            headers: {
              Authorization: `token ${getToken(getState)}`,
            },
          }
        );
        console.log(docresp);
      }
      if (folders.length) {
        const foldresp = await axios.post(
          REACT_APP_API_HOST + "/trash/restor_folders/",
          { folders: [...folders] },
          {
            headers: {
              Authorization: `token ${getToken(getState)}`,
            },
          }
        );
        console.log(foldresp);
      }

      await dispatch(GetTrushByUser());
      callback();
    } catch (error) {
      errorCallback();
      console.log(error.response);
    }
  };
};
