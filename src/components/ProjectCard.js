import React from "react";
import { useState } from "react";
import gitHubLogo from "../assets/GitHub-Mark-64px.png";

export default function ProjectCard(props) {
  // this shit doesn't work as intended

  const [modal, setModal] = useState(false);

  function showDescription() {
    setModal(!modal);
    const description = document.getElementById("expand");
    if (modal) {
      console.log(modal + '0');
      description.style.display = "none";
    } else {
      console.log(modal + '1');
      description.style.display = "block";
    }
  }
  // console.log(modal);

  return (
    <div
      className="project-card-expandable"
      onClick={() => {
        showDescription();
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div id="expand">
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            excepturi deserunt iusto quis fugit repudiandae, odio molestiae
            optio suscipit magnam nostrum et quod enim itaque perspiciatis
            temporibus nihil! Saepe, error? Illo doloribus rem explicabo et
            incidunt iure deleniti cumque quo necessitatibus, consequuntur
            exercitationem rerum omnis numquam veritatis in excepturi vel
            inventore commodi eveniet fugiat aperiam aliquid cum magnam. Labore,
            facere sint. Cumque expedita deleniti quam nisi hic veniam vero
            voluptates perferendis at nulla reprehenderit deserunt labore quia
            optio saepe ex, sapiente dolor veritatis atque est sed rerum eos
            laboriosam. Voluptatibus laudantium qui itaque architecto. Dolorem
            repellendus sit ad nulla unde.
          </p>
          <a href="#">
            <img src={gitHubLogo} alt="github logo" />
          </a>
        </div>
      </div>
      <a href="#">
        <img src={gitHubLogo} alt="github logo" />
      </a>
    </div>
  );
}