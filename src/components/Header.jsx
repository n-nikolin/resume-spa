import React from "react";

const Header = ({ header }) => {
  return (
    <section className="landing-header">
      <header>
        <h1>{header.heading}</h1>
        <div className="content">
          <h3>{header.subheading}</h3>
        </div>
      </header>
    </section>
  );
};

export default Header;