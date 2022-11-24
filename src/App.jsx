import { useEffect } from "react";
import "./App.scss";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { useCurrentLanguage } from "./hooks/useCurrentLanguage";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import ToolsAndSkills from "./components/ToolsAndSkills";
import ContactMe from "./components/ContactMe";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isChecked, setIsChecked] = useLocalStorage("currentLanguage", "ru");
  const currentLanguage = useCurrentLanguage(isChecked);

  useEffect(() => {
    document.title = currentLanguage.header.heading;
  });

  return (
    <div>
      <ScrollToTop />
      <Navbar
        navbar={currentLanguage.navbar}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <Header header={currentLanguage.header} />
      <AboutMe aboutMe={currentLanguage.about_me} />
      <ToolsAndSkills
        toolsHeading={currentLanguage.tools_and_skills.tools.heading}
        skillsHeading={currentLanguage.tools_and_skills.skills.heading}
        education={currentLanguage.tools_and_skills.skills.education}
        foreignLanguages={
          currentLanguage.tools_and_skills.skills.foreign_languages
        }
      />
      <MyProjects myProjects={currentLanguage.my_projects} />
      <ContactMe contactMe={currentLanguage.contact_me} />
    </div>
  );
}

export default App;
