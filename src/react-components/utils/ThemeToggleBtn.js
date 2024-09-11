import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggleBtn({ onClick }) {
  const theme = useContext(ThemeContext);

  return (
    <button className="theme-toggle-btn" onClick={onClick}>
      {theme === "light" ? (
        <span className="material-symbols-outlined">dark_mode</span>
      ) : (
        <span className="material-symbols-outlined">light_mode</span>
      )}
    </button>
  );
}
