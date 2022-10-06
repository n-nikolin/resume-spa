import React from "react";

export default function Navbar(props) {
  const navbar = props.navbar;
  const menuItems = Object.entries(navbar).map(([key, value]) => (
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
