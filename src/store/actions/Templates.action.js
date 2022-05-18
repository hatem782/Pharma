import axios from "axios";
//import { useSelector } from "react-redux";
import { getToken } from "./Headers";
import { GET_TEMPLATE, GET_TEMPLATES } from "../keys/Template.keys";
import { ErrorSnack, SuccessSnack } from "../keys/Snack";

const { REACT_APP_API_HOST } = process.env;

export const GenerateTemplate = (tempalte, callback) => {
  console.log(tempalte);
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(
        REACT_APP_API_HOST + "/template/generate/",
        {
          ...tempalte,
        },
        {
          headers: {
            Authorization: `token ${getToken(getState)}`,
          },
        }
      );
      console.log(response);
      dispatch({
        type: SuccessSnack(),
        value: "Template a été gérérer avec succée",
      });
      dispatch(GetAllTemplates());
      callback();
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const GetAllTemplates = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(REACT_APP_API_HOST + "/template/user/", {
        headers: {
          Authorization: `token ${getToken(getState)}`,
        },
      });
      console.log(response.data);
      dispatch({
        type: GET_TEMPLATES(),
        value: response.data.results,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const SetOneTemplate = (template) => {
  return (dispatch) => {
    dispatch({
      type: GET_TEMPLATE(),
      value: template,
    });
  };
};

export const UpdateTemplate = (tempalte, callback) => {
  console.log(tempalte);
  return async (dispatch, getState) => {
    try {
      const response = await axios.put(
        REACT_APP_API_HOST + "/template/update/",
        {
          ...tempalte,
        },
        {
          headers: {
            Authorization: `token ${getToken(getState)}`,
          },
        }
      );
      console.log(response);
      dispatch({
        type: SuccessSnack(),
        value: "Template a été modifié avec succée",
      });
      dispatch(GetAllTemplates());
      callback();
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const GenerateDocumentWithoutSignature = (id, title, callback) => {
  console.log(id, title);
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(
        REACT_APP_API_HOST + "/template/generate_document/",
        {
          template_id: id,
          title: title,
        },
        {
          headers: {
            Authorization: `token ${getToken(getState)}`,
          },
        }
      );
      console.log(response);
      dispatch({
        type: SuccessSnack(),
        value: "Template a été modifié avec succée",
      });
      dispatch(GetAllTemplates());
      callback();
    } catch (error) {
      console.log(error.response);
    }
  };
};
