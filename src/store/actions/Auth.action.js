import axios from "axios";
import { useSelector } from "react-redux";
import { allow } from "./Headers";

const { REACT_APP_API_HOST } = process.env;

const GetToken = () => {
  let token = useSelector((state) => state.Token);
  return token;
};

const deleteToken = () => {
  localStorage.setItem("pbird_token", "");
  return (dispatch) => {
    dispatch({
      type: "SetToken",
      value: "",
    });
  };
};

const login = (user) => {
  console.log(user);
  return async (dispatch) => {
    try {
      const response = await axios.post(
        REACT_APP_API_HOST + "/users/auth/login",
        { ...user }
        //{ headers: allow }
      );
      console.log(response);
      localStorage.setItem("pbird_token", response.data.token);
      dispatch({
        type: "SetToken",
        value: response.data.token,
      });
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };
};

const register = (user, validationPage) => {
  console.log(user);
  return async (dispatch) => {
    try {
      const response = await axios.post(
        REACT_APP_API_HOST + "/users/auth/register",
        { ...user }
        //{ headers: allow }
      );
      console.log(response);
      //localStorage.setItem("pbird_token", response.data.token);
      /*dispatch({
        type: "SetToken",
        value: response.data.token,
      });*/
      validationPage();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };
};

export { login, register, deleteToken, GetToken };
