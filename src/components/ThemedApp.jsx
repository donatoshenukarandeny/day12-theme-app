import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Header from "./Header";
import MainContent from "./MainContent";

function ThemedApp() {
  const { theme } = useContext(ThemeContext);
  const appClass = theme === "dark" ? "dark" : "light";

  return (
    <div className={appClass}>
      <Header />
      <MainContent />
    </div>
  );
}

export default ThemedApp;
