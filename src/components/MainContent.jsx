import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function MainContent() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <h2>Main Content</h2>
      <p>Current theme: {theme}</p>
    </main>
  );
}

export default MainContent;
