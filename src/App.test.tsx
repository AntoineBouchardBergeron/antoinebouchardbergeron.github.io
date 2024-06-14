import { render, screen } from "@testing-library/react";
import App from "./App";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as enMessages } from "./locales/en/messages";
import { HashRouter } from "react-router-dom";

test("Check for title", () => {
  i18n.load("en", enMessages);
  i18n.activate("en");

  render(
    <>
      <I18nProvider i18n={i18n}>
        <HashRouter>
          <App />
        </HashRouter>
      </I18nProvider>
    </>
  );
  const linkElement = screen.getByText(/Antoine Bouchard-Bergeron/i);
  expect(linkElement).toBeInTheDocument();
});
