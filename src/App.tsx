import React from "react";
import "./App.scoped.css";
import Header from "./Components/Header";
import useTheme from "./Hooks/Theme";
import About, { AboutPath } from "./Pages/About";
import Software, { SoftwarePath } from "./Pages/Software";
import Mecanic, { MecanicPath } from "./Pages/Mecanic";
import Music, { MusicPath } from "./Pages/Music";
import Contact, { ContactPath } from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Projects, { ProjectsPath } from "./Pages/Projects";

function App() {
  const { currentTheme, applyTheme } = useTheme();

  return (
    <div className="app" data-theme={currentTheme}>
      <div className="content">
        <Header applyTheme={applyTheme} currentTheme={currentTheme} />
        <Routes>
          <Route path={AboutPath} element={<About />} />
          <Route path={SoftwarePath} element={<Software />} />
          <Route path={MecanicPath} element={<Mecanic />} />
          <Route path={MusicPath} element={<Music />} />
          <Route path={ProjectsPath} element={<Projects />} />
          <Route path={ContactPath} element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
