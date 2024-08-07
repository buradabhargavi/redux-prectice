import React from "react";

function Header() {
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
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
