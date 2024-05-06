import React, { useEffect } from "react";
import "./App.scoped.css";
import Header from "./Components/Header";
import useTheme from "./Hooks/Theme";
import About from "./Components/About";
import Software, { SoftwarePath } from "./Components/Software";
import Mecanic, { MecanicPath } from "./Components/Mecanic";
import Music, { MusicPath } from "./Components/Music";
import Contact, { ContactPath } from "./Components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  const { currentTheme, applyTheme } = useTheme();

  return (
    <div className="app" data-theme={currentTheme}>
      <div className="content">
        <Header applyTheme={applyTheme} currentTheme={currentTheme} />
        <Routes>
          <Route path={"/"} element={<About />} />
          <Route path={SoftwarePath} element={<Software />} />
          <Route path={MecanicPath} element={<Mecanic />} />
          <Route path={MusicPath} element={<Music />} />
          <Route path={ContactPath} element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
