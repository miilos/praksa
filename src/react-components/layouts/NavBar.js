import { useState } from "react";

export default function Navbar() {
  const [phoneMenuVisible, setPhoneMenuVisible] = useState(false);

  function togglePhoneMenuVisible() {
    setPhoneMenuVisible((curr) => !curr);
  }

  return (
    <>
      <nav className="nav">
        <img src="./img/logo.png" alt="Brath logo" className="logo" />
        <div className="nav__links-container">
          <li className="nav__item">
            <a href="/" className="nav__link">
              Die Metzgerei
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Dry Aged
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Fleischversand
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Events/Kurs
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Partyservice
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Tagesessen
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Impressum
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Kontakt
            </a>
          </li>
          <li className="nav__item download__link">
            <a href="/" className="nav__link nav__link--icon">
              <img
                src="./img/pdf-icon.png"
                alt="PDF icon"
                className="pdf-icon"
              />
              download
            </a>
          </li>
          <li
            className="nav__item burger__container"
            onClick={togglePhoneMenuVisible}
          >
            {phoneMenuVisible ? (
              <span className="material-symbols-outlined close-icon">
                close
              </span>
            ) : (
              <span className="material-symbols-outlined open-icon">
                density_medium
              </span>
            )}
          </li>
        </div>
      </nav>

      <div className="opentime">
        <div className="opentime__container">
          <img src="./img/clock.png" alt="Clock icon" className="clock-icon" />
          <p>
            Opentime: Di. - Fr.: 07:00-13:00 und 15:00-18:30. Sa.: 07:30 - 12:30
          </p>
        </div>
      </div>

      <PhoneNav visible={phoneMenuVisible} />
    </>
  );
}

function PhoneNav({ visible }) {
  const cssclass = `phone-menu ${visible ? "show-menu" : ""}`;

  return (
    <div className={cssclass}>
      <ul className="phone-menu__links-container">
        <li className="phone-menu__menu-item">
          <a href="/" className="phone-menu__menu-item-link">
            Die Metzgerei
          </a>
        </li>
        <li className="phone-menu__menu-item">
          <a href="/" className="phone-menu__menu-item-link">
            Dry Aged
          </a>
        </li>
        <li className="phone-menu__menu-item">
          <a href="/" className="phone-menu__menu-item-link">
            Fleischversand
          </a>
        </li>
        <li className="phone-menu__menu-item">
          <a href="/" className="phone-menu__menu-item-link">
            Events/Kurs
          </a>
        </li>
        <li className="phone-menu__menu-item">
          <a href="/" className="phone-menu__menu-item-link">
            Partyservice
          </a>
        </li>
        <li className="phone-menu__menu-item">
          <a href="/" className="phone-menu__menu-item-link">
            Tagesessen
          </a>
        </li>
        <li className="phone-menu__menu-item">
          <a href="/" className="phone-menu__menu-item-link">
            Impressum
          </a>
        </li>
        <li className="phone-menu__menu-item">
          <a href="/" className="phone-menu__menu-item-link">
            Kontakt
          </a>
        </li>
        <li className="phone-menu__menu-item">
          <a
            href="/"
            className="phone-menu__menu-item-link phone-menu__menu-item-link--icon"
          >
            <img src="./img/pdf-icon.png" alt="PDF icon" className="pdf-icon" />
            download
          </a>
        </li>
      </ul>
    </div>
  );
}
