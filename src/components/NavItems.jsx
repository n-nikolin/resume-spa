import React from "react";

const NavItems = ({ navbar, isOpen }) => {
  const handleScroll = (key) => {
    document.getElementById(key).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  
  return (
    <ul id={isOpen ? "open" : "closed"}>
      {Object.entries(navbar).map(([key, value]) => (
        <li key={key}>
          <p onClick={() => handleScroll(key)}>{value}</p>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
