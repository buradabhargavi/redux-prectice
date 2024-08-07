import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../Store";

function Header() {
  const login = useSelector((state) => state.Auth.isLoggedin);
  const dispatch = useDispatch();

  const logoutHanlder = () => {
    dispatch(authActions.logout());
    //console.log("logOut");
  };

  console.log(login);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "blue",
        padding: "1% 10%",
      }}
    >
      <h1>Redux auth</h1>
      <div
        style={{
          display: "flex",
          listStyle: "none",
          alignItems: "center",
          justifyContent: "space-between",
          width: "20%",
        }}
      >
        <li>Products</li>
        <li>My sales</li>
        <button
          style={{ background: "yellow", padding: "10px", borderRadius: "10%" }}
          onClick={logoutHanlder}
        >
          {login ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default Header;
