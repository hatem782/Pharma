import axios from "axios";
import { getToken } from "./Headers";
import { ErrorSnack, SuccessSnack } from "../keys/Snack";
import { GetUserByToken } from "./Auth.action";

const { REACT_APP_API_HOST } = process.env;

export const UploadProfileImage = (files, callback) => {
  const body = new FormData();
  for (let i = 0; i < files.length; i++) {
    body.append("file", files[i]);
  }
  return async (dispatch, getState) => {
    try {
      const response = await axios.put(
        REACT_APP_API_HOST + "/users/auth/upload/photo",
        body,
        {
          headers: {
            "content-Type": "multipart/form-data",
            Authorization: `token ${getToken(getState)}`,
          },
        }
      );
      dispatch({
        type: SuccessSnack(),
        value: "Image a été changée avec succée",
      });
      window.location.reload();
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ErrorSnack(),
        value: error.response.data.error,
      });
    }
  };
};

export const UploadSignatureImage = (files, callback) => {
  const body = new FormData();
  for (let i = 0; i < files.length; i++) {
    body.append("file", files[i]);
  }
  return async (dispatch, getState) => {
    try {
      const response = await axios.put(
        REACT_APP_API_HOST + "/users/auth/upload/signature",
        body,
        {
          headers: {
            "content-Type": "multipart/form-data",
            Authorization: `token ${getToken(getState)}`,
          },
        }
      );
      console.log(response);
      dispatch({
        type: SuccessSnack(),
        value: "Signature a été changée avec succée",
      });
      window.location.reload();
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ErrorSnack(),
        value: error.response.data.error,
      });
    }
  };
};

export const UploadProfileNormalData = (field, value, callback) => {
  return async (dispatch, getState) => {
    console.log(getState().User);
    const { first_name, last_name, sex } = getState().User.user;
    try {
      const response = await axios.put(
        REACT_APP_API_HOST + "/users/auth/update_profile",
        { first_name, last_name, sex, [field]: value },
        {
          headers: {
            Authorization: `token ${getToken(getState)}`,
          },
        }
      );
      console.log(response);
      dispatch({
        type: SuccessSnack(),
        value: "Modification a été effectuée avec succée",
      });
      dispatch(GetUserByToken(callback));
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ErrorSnack(),
        value: error.response.data.error,
      });
    }
  };
};

export const SendOpt = () => {
  return async (dispatch, getState) => {
    console.log(getState().User);
    const { phone_number } = getState().User.user;
    console.log(phone_number);
    try {
      const response = await axios.put(
        REACT_APP_API_HOST + "/user/send_otp/",
        { phone_number },
        {
          headers: {
            Authorization: `token ${getToken(getState)}`,
          },
        }
      );
      console.log(response);
      dispatch({
        type: SuccessSnack(),
        value: "Un message de 6 Numeros à été envoyée ",
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ErrorSnack(),
        value: error.response.data.error,
      });
    }
  };
};

export const UploadProfileData = (field, value, otp, callback, setMatch) => {
  return async (dispatch, getState) => {
    const { first_name, last_name, sex } = getState().User.user;
    try {
      const response = await axios.put(
        REACT_APP_API_HOST + "/users/auth/update_profile",
        { first_name, last_name, sex, otp, [field]: value },
        {
          headers: {
            Authorization: `token ${getToken(getState)}`,
          },
        }
      );
      console.log(response);
      dispatch({
        type: SuccessSnack(),
        value: "Modification a été effectuée avec succée",
      });
      dispatch(GetUserByToken(callback));
    } catch (error) {
      console.log(error.response.data.error);
      setMatch(error.response.data.error === "otp does not match" ? -1 : 0);
      dispatch({
        type: ErrorSnack(),
        value: error.response.data.error,
      });
    }
  };
};

export const UploadProfilePass = (oldPass, newPass, callback) => {
  return async (dispatch, getState) => {
    const { first_name, last_name, sex } = getState().User.user;
    try {
      const response = await axios.put(
        REACT_APP_API_HOST + "/users/auth/update_profile",
        {
          first_name,
          last_name,
          sex,
          current_password: oldPass,
          new_password: newPass,
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
        value: "Modification a été effectuée avec succée",
      });
      dispatch(GetUserByToken(callback));
    } catch (error) {
      console.log(error.response.data.error);
      dispatch({
        type: ErrorSnack(),
        value: error.response.data.error,
      });
    }
  };
};
