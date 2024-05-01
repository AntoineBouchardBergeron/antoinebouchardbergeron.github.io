import { Fragment } from "react/jsx-runtime";
import { ThemeKey, ThemeKeys } from "../Hooks/Theme";
import "./Header.css";
import ToggleButton from "./ToggleButton";

type Props = {
  applyTheme: (newTheme: ThemeKey) => void;
  currentTheme: ThemeKey;
};

const Header = (props: Props) => {
  const handleThemeClick = (value: ThemeKey) => {
    props.applyTheme(value);
  };

  return (
    <header className="header">
      <div>
        <h1>
          <a href="/">Antoine Bouchard-Bergeron</a>
        </h1>
        <ul>
          <li>
            <a href="/Software">Software Eng.</a>
          </li>
          <li>
            <a href="/Mec">Mecanical Eng.</a>
          </li>
          <li>
            <a href="/Music">Music</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <button>fr</button>
        <span>/</span>
        <button>en</button>
        <span />
        {ThemeKeys.map((val, index) => (
          <Fragment key={val}>
            <ToggleButton
              key={index}
              isActive={props.currentTheme === val}
              label={val}
              onClick={() => handleThemeClick(val)}
            />
            {val !== ThemeKeys[1] && <span key={val}> / </span>}
          </Fragment>
        ))}
      </div>
    </header>
  );
};

export default Header;
