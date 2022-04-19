import axios from "axios";
import { useSelector } from "react-redux";
import { Authorization, allow } from "./Headers";
import { SetToken, SetUser } from "../keys/Users.keys";

const { REACT_APP_API_HOST } = process.env;

const login = (user, remember) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        REACT_APP_API_HOST + "/users/auth/login",
        { ...user }
      );
      dispatch({
        type: SetToken(),
        value: response.data.token,
      });
      dispatch({
        type: SetUser(),
        value: response.data.user,
      });
      if (remember) {
        localStorage.setItem("pbird_token", response.data.token);
      }
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

const GetToken = () => {
  let token = useSelector((state) => state.Token);
  return token;
};

const GetTokenFromLocal = () => {
  return localStorage.getItem("pbird_token");
};

const GetUserByToken = (setspinn) => {
  console.log({ headers: Authorization });
  console.log(GetTokenFromLocal());
  return async (dispatch) => {
    try {
      const response = await axios.get(
        REACT_APP_API_HOST + "/users/auth/user",
        { headers: Authorization, allow }
      );
      console.log(response.data);
      dispatch({
        type: SetToken(),
        value: GetTokenFromLocal(),
      });
      dispatch({
        type: SetUser(),
        value: response.data,
      });
      setspinn(false);
    } catch (error) {
      // to stop spinner
      setspinn(false);
      console.log(error);
      console.log(error.response);
    }
  };
};

const deleteToken = () => {
  localStorage.setItem("pbird_token", "");
  return (dispatch) => {
    dispatch({
      type: SetToken(),
      value: "",
    });
  };
};

const deleteUser = () => {
  localStorage.setItem("pbird_token", "");
  return (dispatch) => {
    dispatch({
      type: SetUser(),
      value: "",
    });
  };
};

export { login, register, deleteToken, deleteUser, GetToken, GetUserByToken };
