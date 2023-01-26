import React, {forwardRef} from "react";

const Header = forwardRef(({ header }, ref) => {
  return (
    <section className="landing-header" ref={ref}>
      <header>
        <h1>{header.heading}</h1>
        <div className="content">
          <h3>{header.subheading}</h3>
        </div>
      </header>
    </section>
  );
});

export default Header;
