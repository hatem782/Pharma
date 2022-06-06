import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Logout } from "../../../store/actions/Auth.action";

function Disconnect() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("ani 5arej");
    dispatch(Logout());
  }, []);
  return <div></div>;
}

export default Disconnect;
