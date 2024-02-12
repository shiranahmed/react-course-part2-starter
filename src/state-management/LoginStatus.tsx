import { useContext, useReducer, useState } from "react";
import authReducer from "./reducer/authReducer";
import AuthContext from "./contexts/AuthContext";

const LoginStatus = () => {
  const { user, dispatch } = useContext(AuthContext);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", userName: "SHIRAN AHMED" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
