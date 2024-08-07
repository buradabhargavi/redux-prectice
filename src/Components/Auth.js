import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/AuthSlice";

function Auth() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.Auth.isLoggedin);
  console.log(isLoggedin);

  const submitForm = () => {
    //  console.log("first");
    dispatch(authActions.login());
  };
  return (
    <>
      {!isLoggedin ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2%",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <h1>Login form </h1>
          <div>
            <label>Gmail:</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Password:</label>
            <input type="text"></input>
          </div>
          <button style={{ width: "auto" }} onClick={submitForm}>
            Login
          </button>
        </div>
      ) : (
        "Your profile"
      )}
    </>
  );
}

export default Auth;
