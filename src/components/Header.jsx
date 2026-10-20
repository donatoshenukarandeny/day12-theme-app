import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header>
      <h1>Theme Switcher</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch Theme
      </button>
    </header>
  );
}

export default Header;
