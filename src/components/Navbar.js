import React from "react";

export default function Navbar(props) {
  const menuItems = Object.entries(props.navbar).map(([key, value]) => (
    <li key={key}>
      <a href={"#" + key}>{value}</a>
    </li>
  ));
  return (
    <div className="navbar">
      <ul>{menuItems}</ul>
    </div>
  );
}
