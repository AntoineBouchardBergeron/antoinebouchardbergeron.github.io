import React from "react";
import { Fragment } from "react/jsx-runtime";
import { ThemeKey, ThemeKeys } from "../Hooks/Theme";
import "./Header.css";
import ToggleButton from "./ToggleButton";
import { Trans, useLingui } from "@lingui/react";

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
            <a href="/Software">
              <Trans id="Software">Software Eng.</Trans>
            </a>
          </li>
          <li className="navigation">
            <a href="/Mec">
              <Trans id="Mecanic">Mecanical Eng.</Trans>
            </a>
          </li>
          <li className="navigation">
            <a href="/Music">
              <Trans id="Music">Music</Trans>
            </a>
          </li>
          <li className="navigation">
            <a href="/Contact">
              <Trans id="Contact">Contact</Trans>
            </a>
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
