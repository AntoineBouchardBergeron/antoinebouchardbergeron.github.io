import React from "react";
import { Fragment } from "react/jsx-runtime";
import { ThemeKey, ThemeKeys } from "../Hooks/Theme";
import "./Header.css";
import ToggleButton from "./ToggleButton";
import { Trans, useLingui } from "@lingui/react";
import { Link } from "react-router-dom";
import { ContactPath } from "./Contact";
import { MecanicPath } from "./Mecanic";
import { SoftwarePath } from "./Software";
import { MusicPath } from "./Music";

type Props = {
  applyTheme: (newTheme: ThemeKey) => void;
  currentTheme: ThemeKey;
};

const Header = (props: Props) => {
  const { i18n } = useLingui();
  const handleThemeClick = (value: ThemeKey) => {
    props.applyTheme(value);
  };

  const handleLanguageClick = (value: string) => {
    i18n.activate(value);
    window.localStorage.setItem("langage", value);
  };

  return (
    <header className="header">
      <div>
        <h1>
          <a href="/">Antoine Bouchard-Bergeron</a>
        </h1>
        <ul className="navigation">
          <li className="navigation">
            <Link to={""}>
              <Trans id="Home">Home</Trans>
            </Link>
          </li>
          <li className="navigation">
            <Link to={SoftwarePath}>
              <Trans id="Software">Software Eng.</Trans>
            </Link>
          </li>
          <li className="navigation">
            <Link to={MecanicPath}>
              <Trans id="Mecanic">Mecanical Eng.</Trans>
            </Link>
          </li>
          <li className="navigation">
            <Link to={MusicPath}>
              <Trans id="Music">Music</Trans>
            </Link>
          </li>
          <li className="navigation">
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
