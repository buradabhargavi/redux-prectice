import React from "react";

function Auth() {
  return (
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
      <button style={{ width: "auto" }}>Login</button>
    </div>
  );
}

export default Auth;
