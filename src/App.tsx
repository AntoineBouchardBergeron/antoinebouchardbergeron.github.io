import { useEffect } from "react";
import "./App.scoped.css";
import Header from "./Components/Header";
import useTheme from "./Hooks/Theme";

function App() {
  const { currentTheme, applyTheme } = useTheme();

  useEffect(() => {
    console.log(currentTheme);
  }, [currentTheme]);

  return (
    <div className="app"  data-theme={ currentTheme }>
      <div className="content">
        <Header applyTheme={applyTheme} currentTheme={currentTheme} />
      </div>
    </div>
  );
}

export default App;
