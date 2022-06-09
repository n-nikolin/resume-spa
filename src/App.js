// TODO: refactor this shit
// move stuff to separate components
// get all the hardcoded text to textContent.json
// make the damn project cards expandable already

import "./App.css";
import textContent from "./assets/textContent.json";
import my_photo from "./assets/my_photo.jpg";
import gitHubLogo from "./assets/GitHub-Mark-64px.png";
import upArrow from "./assets/arrow_up.svg";
import hamburgerMenu from "./assets/hamburgerMenu.svg";

import { useState } from "react";

function App() {
  const [overlay, setOverlay] = useState(true);
  const [checked, setChecked] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(textContent.en);

  function expandProjectCard() {
    // document.getElementsById("expand").style.display="block"
    console.log("expandio!!");
  }

  function changeLanguage() {
    // toggles page language
    // got an idea how to do it another way, by using links
    // should probably try that out just for fun
    setChecked(!checked);
    if (document.getElementById("ru").checked == true) {
      console.log("ru is current");
      setCurrentLanguage(textContent.ru);
    } else {
      console.log("en is current");
      setCurrentLanguage(textContent.en);
    }
  }

  function openNavMenu() {
    // tweak this to make it not look shit and be less invasive
    setOverlay(!overlay);
    // console.log(overlay);
    const navOverlay = document.getElementById("overlay");

    if (overlay == false) {
      navOverlay.style.display = "none";
    } else {
      navOverlay.style.display = "block";
    }
  }

  return (
    <div>
      {/* HEADER COMPONENT */}
      <div className="hamburger-menu">
        <button onClick={openNavMenu}>
          <img src={hamburgerMenu} />
        </button>
      </div>
      {/* NAVBAR */}
      <div className="navbar" id="overlay">
        <div className="language-switch">
          {/* LANGUAGE SWITCH COMPONENT */}
          {/* language switch should also be on top of header section,
        so that there is no need to use the menu */}
          <input
            type="radio"
            name="selected-language"
            id="en"
            onChange={changeLanguage}
            defaultChecked="true"
          />
          <label htmlFor="en">EN</label>
          <input
            type="radio"
            name="selected-language"
            id="ru"
            onChange={changeLanguage}
          />
          <label htmlFor="ru">RU</label>
        </div>
        <ul>
          <li>
            <a href="#about-me">{currentLanguage.navbar.about_me}</a>
          </li>
          {/* <h1>{currentLanguage.about_me.general}</h1> */}
          <li>
            <a href="#my-projects">{currentLanguage.navbar.my_projects}</a>
          </li>
          <li>
            <a href="#contact-me">{currentLanguage.navbar.contact_me}</a>
          </li>
        </ul>
      </div>
      <section className="header">
        <header className="greeting-header">
          <h1>{currentLanguage.header.heading}</h1>
          <p>{currentLanguage.header.subheading}</p>
        </header>
      </section>
      {/* SCROLL TO TOP BUTTON COMPONENT */}
      <div className="btn scroll-to-top">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behaviour: "auto" });
          }}
        >
          <img src={upArrow} alt="up chevron" />
        </button>
      </div>
      {/* NAVBAR COMPONENT */}

      {/* ABOUT ME COMPONENT */}
      <div className="about-me-container" id="about-me">
        <h1>{currentLanguage.about_me.heading}</h1>
        <div className="about-me-container-content">
          <img src={my_photo} alt="my stupid face" />
          <p>{currentLanguage.about_me.general}</p>
        </div>
        <div className="contact-links">
          {/* try replacing these with svg icons */}
          <h4>nikitanikolin85@gmail.com</h4>
          <h4>@doshik_s_pivkom</h4>
          <h4>https://github.com/n-nikolin</h4>
        </div>
      </div>
      {/* MY PROJECTS COMPONENT*/}
      <div className="my-projects-container" id="my-projects">
        <h1>{currentLanguage.my_projects.heading}</h1>
        {/* PROJECT CARD COMPONENT */}
        <div className="project-cards">
          <div className="project-card-expandable" onClick={expandProjectCard}>
            <h3>{currentLanguage.my_projects.projects[0].title}</h3>
            <p>{currentLanguage.my_projects.projects[0].description}</p>
            <p id="expand">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              excepturi deserunt iusto quis fugit repudiandae, odio molestiae
              optio suscipit magnam nostrum et quod enim itaque perspiciatis
              temporibus nihil! Saepe, error? Illo doloribus rem explicabo et
              incidunt iure deleniti cumque quo necessitatibus, consequuntur
              exercitationem rerum omnis numquam veritatis in excepturi vel
              inventore commodi eveniet fugiat aperiam aliquid cum magnam.
              Labore, facere sint. Cumque expedita deleniti quam nisi hic veniam
              vero voluptates perferendis at nulla reprehenderit deserunt labore
              quia optio saepe ex, sapiente dolor veritatis atque est sed rerum
              eos laboriosam. Voluptatibus laudantium qui itaque architecto.
              Dolorem repellendus sit ad nulla unde.
            </p>
            <a href="#">
              <img src={gitHubLogo} alt="github logo" />
            </a>
          </div>
        </div>
      </div>
      {/* CONTACT ME COMPONENT */}
      <div className="contact-me-container" id="contact-me">
        <h1>{currentLanguage.contact_me.heading}</h1>
        {/* CONTACT FORM COMPONENT */}
        <div className="form-container">
          <form action="submit">
            <legend>
              <h3>{currentLanguage.contact_me.legend.heading}</h3>
              <p>{currentLanguage.contact_me.legend.legend}</p>
            </legend>
            <label htmlFor="name">
              {currentLanguage.contact_me.label.name}
            </label>
            <input type="text" />
            <label htmlFor="email">
              {currentLanguage.contact_me.label.email}
            </label>
            <input type="text" />
            <label htmlFor="message">
              {currentLanguage.contact_me.label.message}
            </label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="what do you want to say??"
            ></textarea>
            <button className="submit-btn" type="submit">
              {currentLanguage.contact_me.submit_btn}
            </button>
          </form>
        </div>
      </div>
      {/* FOOTER COMPONENT */}
      <footer>
        <p>{currentLanguage.footer.par_1}</p>
        <p>{currentLanguage.footer.par_2}</p>
      </footer>
    </div>
  );
}

export default App;
