import axios from "axios";
import { useSelector } from "react-redux";
import { Authorization, allow } from "./Headers";
import { SetToken, SetUser } from "../keys/Users.keys";
import { ErrorSnack, SuccessSnack } from "../keys/Snack";

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
      console.log(error.response.data.Authorization[0]);
      dispatch({
        type: ErrorSnack(),
        value: error.response.data.Authorization[0],
      });
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
      );
      console.log(response);
      localStorage.setItem("pbird_verif_token", response.data.token);
      validationPage();
    } catch (error) {
      console.log(error.response);
    }
  };
};

const ValidateRegister = (number, setVerification, setMatch, setpassPage) => {
  console.log(number);
  return async (dispatch) => {
    try {
      const response = await axios.post(
        REACT_APP_API_HOST + "/user/validate_otp/",
        { otp: number },
        {
          headers: {
            Authorization: `token ${localStorage.getItem("pbird_verif_token")}`,
          },
        }
      );
      console.log(response);
      setVerification(false);
      console.log(response.data.is_validated);
      if (response.data.is_validated) {
        setMatch(1);
        // go to reset pass
        setpassPage();
      } else {
        setMatch(-1);
      }
    } catch (error) {
      console.log(error.response);
      setVerification(false);
      setMatch(-1);
    }
  };
};

const SetPasses = (pass, signinPage) => {
  console.log(pass);
  return async (dispatch) => {
    try {
      const response = await axios.put(
        REACT_APP_API_HOST + "/user/define_password/",
        { ...pass },
        {
          headers: {
            Authorization: `token ${localStorage.getItem("pbird_verif_token")}`,
          },
        }
      );
      console.log(response);
      // go to signin to access to account
      signinPage();
    } catch (error) {
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

export {
  login,
  register,
  ValidateRegister,
  SetPasses,
  deleteToken,
  deleteUser,
  GetToken,
  GetUserByToken,
};
