import { useEffect, useState } from "react";
import { ThemeContext } from "./react-components/context/ThemeContext";
import Navbar from "./react-components/layouts/NavBar";
import Gallery from "./react-components/layouts/Gallery";
import DryAged from "./react-components/layouts/DryAged";
import Grillkurs from "./react-components/layouts/Grillkurs";
import Handwerk from "./react-components/layouts/Handwerk";
import Spices from "./react-components/layouts/Spices";
import Fleischversand from "./react-components/layouts/Fleischversand";
import Awards from "./react-components/layouts/Awards";
import Footer from "./react-components/layouts/Footer";
import Popup from "./react-components/layouts/Popup";
import ThemeToggleBtn from "./react-components/utils/ThemeToggleBtn";

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupAlredyShown, setPopupAlreadyShown] = useState(function () {
    const state = localStorage.getItem("popupShown");
    return state ? state : false;
  });
  const [theme, setTheme] = useState(function () {
    const initialState = localStorage.getItem("theme");
    return initialState ? initialState : "dark";
  });

  function handlePopupClose() {
    setIsPopupVisible(false);
    setPopupAlreadyShown(() => {
      localStorage.setItem("popupShown", true);
      return true;
    });
  }

  function handleToggleTheme() {
    setTheme((theme) => {
      const newTheme = theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  useEffect(
    function () {
      setTimeout(() => {
        if (!popupAlredyShown) setIsPopupVisible(true);
      }, 3000);
    },
    [popupAlredyShown]
  );

  useEffect(
    function () {
      if (isPopupVisible) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "visible";
    },
    [isPopupVisible, popupAlredyShown]
  );

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App container theme--${theme}`}>
        <section className="start">
          <Navbar />
          <Gallery />
        </section>

        <DryAged />
        <Grillkurs />
        <Handwerk />
        <Spices />
        <Fleischversand />
        <Awards />

        <Footer />

        {isPopupVisible && <Popup onCloseClick={handlePopupClose} />}
        <ThemeToggleBtn onClick={handleToggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
