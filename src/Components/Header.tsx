import React, { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import { ThemeKey, ThemeKeys } from "../Hooks/Theme";
import "./Header.css";
import ToggleButton from "./ToggleButton";
import { Trans, useLingui } from "@lingui/react";
import { Link, useLocation } from "react-router-dom";
import { ContactPath } from "../Pages/Contact";
import { MecanicPath } from "../Pages/Mecanic";
import { SoftwarePath } from "../Pages/Software";
import { MusicPath } from "../Pages/Music";

type Props = {
  applyTheme: (newTheme: ThemeKey) => void;
  currentTheme: ThemeKey;
};

const Header = (props: Props) => {
  const { i18n } = useLingui();
  const location = useLocation()
  const handleThemeClick = (value: ThemeKey) => {
    props.applyTheme(value);
  };

  const handleLanguageClick = (value: string) => {
    i18n.activate(value);
    window.localStorage.setItem("langage", value);
  };

  useEffect(() => {
    console.log(location)
  })

  return (
    <header className="header">
      <div>
        <h1>
          <a href="/">Antoine Bouchard-Bergeron</a>
        </h1>
        <ul className="navigation">
          <li className={location.pathname === "/" ? "navigation-active" : "navigation"}>
            <Link to={""}>
              <Trans id="Home">Home</Trans>
            </Link>
          </li>
          <li className={location.pathname === SoftwarePath ? "navigation-active" : "navigation"}>
            <Link to={SoftwarePath}>
              <Trans id="Software">Software Eng.</Trans>
            </Link>
          </li>
          <li className={location.pathname === MecanicPath ? "navigation-active" : "navigation"}>
            <Link to={MecanicPath}>
              <Trans id="Mecanic">Mecanical Eng.</Trans>
            </Link>
          </li>
          <li className={location.pathname === MusicPath ? "navigation-active" : "navigation"}>
            <Link to={MusicPath}>
              <Trans id="Music">Music</Trans>
            </Link>
          </li>
          <li className={location.pathname === ContactPath ? "navigation-active" : "navigation"}>
            <Link to={ContactPath}>
              <Trans id="Contact">Contact</Trans>
            </Link>
          </li>
        </ul>
      </div>
      <div className="left">
        {["en", "fr"].map((val, index) => (
          <Fragment key={val}>
            <ToggleButton
              key={index}
              isActive={i18n.locale === val}
              label={val}
              onClick={() => handleLanguageClick(val)}
            />
            {val !== "fr" && <span key={val}> / </span>}
          </Fragment>
        ))}
        <br />
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
