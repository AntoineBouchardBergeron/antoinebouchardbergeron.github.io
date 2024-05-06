import React from "react";
import "./App.scoped.css";
import Header from "./Components/Header";
import useTheme from "./Hooks/Theme";
import About from "./Components/About";

function App() {
  const { currentTheme, applyTheme } = useTheme();

  return (
    <div className="app" data-theme={currentTheme}>
        <div className="content">
        <Header applyTheme={applyTheme} currentTheme={currentTheme} />
        {window.location.pathname === "/" && <About />}
      </div>
    </div>
  );
}

export default App;
