import { useState } from "react";

export enum Theme {
  "light",
  "dark",
}

export type ThemeKey = keyof typeof Theme;
export const ThemeKeys = (
  Object.values(Theme) as Array<keyof typeof Theme>
).filter((v) => isNaN(Number(v)));

const useTheme = () => {
  const localStorageTheme =
    window.localStorage.getItem("theme") ??
    window.matchMedia("(prefers-colors-scheme: dark)").matches
      ? (Theme[0] as ThemeKey)
      : (Theme[1] as ThemeKey);

  const [theme, setTheme] = useState<ThemeKey>(localStorageTheme);

  const applyTheme = (newTheme: ThemeKey) => {
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  return { currentTheme: theme, applyTheme };
};

export default useTheme;
