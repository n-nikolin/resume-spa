import React from "react";
import Card from "../Card/Card";

const cards = [];
for (let i = 0; i < 10; i++) {
  cards.push(<Card />);
}

function MyProjects() {
  // TODO: Turn this into a loop and rewrite CARD as separate component
  return (
    <section className="my-projects">
      <h1>MY PROJECTS SECTION</h1>
      {/* deal with the THERE IS NO KEY issue
      or at least keep that in mind until next time
      because maybe this will not be needed for this project */}
      {/* <div className="cards-wrapper">{cards.map((card) => card)}</div> */}
    </section>
  );
}

export default MyProjects;