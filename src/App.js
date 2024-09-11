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
  const [theme, setTheme] = useState(function () {
    const initialState = localStorage.getItem("theme");
    return initialState ? initialState : "dark";
  });

  function handlePopupClose() {
    setIsPopupVisible(false);
  }

  function handleToggleTheme() {
    setTheme((theme) => {
      const newTheme = theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  useEffect(function () {
    setTimeout(() => setIsPopupVisible(true), 3000);
  }, []);

  useEffect(
    function () {
      if (isPopupVisible) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "visible";
    },
    [isPopupVisible]
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
