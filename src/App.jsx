import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ThemedApp from "./components/ThemedApp";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <div className="app">
        <ThemedApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
