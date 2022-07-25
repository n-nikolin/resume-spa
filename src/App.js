import "./App.css";
import textContent from "./assets/textContent.json";

import { useState } from "react";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import ToolsAndSkills from "./components/ToolsAndSkills";

function App() {
  // changeLanguage should be a custom hook
  const [currentLanguage, setCurrentLanguage] = useState(textContent.en);
  const [checked, setChecked] = useState(true);

  function changeLanguage() {
    // toggles page language
    // got an idea how to do it another way, by using links
    // should probably try that out just for fun
    setChecked(!checked);
    if (document.getElementById("ru").checked === true) {
      setCurrentLanguage(textContent.ru);
      console.log("ru is current");
    } else {
      setCurrentLanguage(textContent.en);
      console.log("en is current");
    }
  }

  const projects = currentLanguage.my_projects.projects;

  return (
    <div>
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
      <HamburgerMenu />
      {/* make it so that navbar list is mapped and not hardcoded */}
      {/* <Navbar
        aboutMe={currentLanguage.navbar.about_me}
        myProjects={currentLanguage.navbar.my_projects}
        contactMe={currentLanguage.navbar.contact_me}
      /> */}
      <Header
        heading={currentLanguage.header.heading}
        subheading={currentLanguage.header.subheading}
      />
      <ScrollToTop />
      <AboutMe
        heading={currentLanguage.about_me.heading}
        general={currentLanguage.about_me.general}
      />
      <ToolsAndSkills />
      <MyProjects
        heading={currentLanguage.my_projects.heading}
        projectList={projects}
      />
      <ContactMe
        heading={currentLanguage.contact_me.heading}
        legendHeading={currentLanguage.contact_me.legend.heading}
        legendLegend={currentLanguage.contact_me.legend.legend}
        labelName={currentLanguage.contact_me.label.name}
        labelEmail={currentLanguage.contact_me.label.email}
        labelMessage={currentLanguage.contact_me.label.message}
        submitBtn={currentLanguage.contact_me.submit_btn}
      />
      <Footer
        par_1={currentLanguage.footer.par_1}
        par_2={currentLanguage.footer.par_2}
      />
    </div>
  );
}

export default App;
