import React from "react";
import "./App.scss";
import { useRef } from "react";

import useLocalStorage from "./hooks/useLocalStorage";
import useCurrentLanguage from "./hooks/useCurrentLanguage";
import useTitle from "./hooks/useTitle";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import MyProjects from "./components/MyProjects/MyProjects";
import ToolsAndSkills from "./components/ToolsAndSkills/ToolsAndSkills";
import ContactMe from "./components/ContactMe/ContactMe";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  // LanguageSwitch hooks
  const [isChecked, setIsChecked] = useLocalStorage("currentLanguage", "ru");
  const currentLanguage = useCurrentLanguage(isChecked);
  // Section refs
  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const toolsAndSkillsRef = useRef(null);
  const myProjectsRef = useRef(null);
  const contactMeRef = useRef(null);
  const scrollToTopRef = useRef(null);
  const navbarRef = useRef(null);
  const rootRef = useRef(null);

  useTitle(currentLanguage.header.heading);

  return (
    <div ref={rootRef}>
      <ScrollToTop headerRef={headerRef} ref={scrollToTopRef} />
      <Navbar
        navbar={currentLanguage.navbar}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        aboutMeRef={aboutMeRef}
        toolsAndSkillsRef={toolsAndSkillsRef}
        myProjectsRef={myProjectsRef}
        contactMeRef={contactMeRef}
        ref={navbarRef}
      />
      <Header header={currentLanguage.header} ref={headerRef} />
      <AboutMe aboutMe={currentLanguage.about_me} ref={aboutMeRef} />
      <ToolsAndSkills
        toolsHeading={currentLanguage.tools_and_skills.tools.heading}
        skillsHeading={currentLanguage.tools_and_skills.skills.heading}
        education={currentLanguage.tools_and_skills.skills.education}
        foreignLanguages={
          currentLanguage.tools_and_skills.skills.foreign_languages
        }
        ref={toolsAndSkillsRef}
      />
      <MyProjects
        myProjects={currentLanguage.my_projects}
        navbarRef={navbarRef}
        scrollToTopRef={scrollToTopRef}
        rootRef={rootRef}
        ref={myProjectsRef}
      />
      <ContactMe contactMe={currentLanguage.contact_me} ref={contactMeRef} />
    </div>
  );
};

export default App;
