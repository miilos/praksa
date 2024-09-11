import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function LogoLine() {
  const theme = useContext(ThemeContext);

  return (
    <div className="img-line">
      <hr className="img-line__line" />

      {theme === "light" ? (
        <img src="./img/logo.png" alt="Brath logo" className="img-line__logo" />
      ) : (
        <img
          src="./img/logo-dark.png"
          alt="Brath logo"
          className="img-line__logo"
        />
      )}
      <hr className="img-line__line" />
    </div>
  );
}
