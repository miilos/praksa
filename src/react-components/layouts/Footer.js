export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__info">
          <ul className="footer__info-list">
            <li className="footer__info-list-item">
              Klauprechtstraße 25 <br />
              76137 Karlsruhe, Germany
            </li>
            <li className="footer__info-list-item">+49 721 358060</li>
            <li className="footer__info-list-item">
              info@partyservice-brath.de
            </li>
          </ul>
        </div>

        <img src="./img/logo.png" alt="Brath logo" className="footer__logo" />

        <div className="footer__socials">
          <p className="footer__socials-p">Besuchen Sie uns auf:</p>
          <img
            src="./img/social-icons.png"
            alt="Socials"
            className="footer__socials-icons"
          />
        </div>
      </footer>

      <Credits />
    </>
  );
}

function Credits() {
  return (
    <div className="credits">
      <p className="credits__copyright">
        &copy; 2020 by Metzgerei Heiko Brath GmbH, Deutschland
      </p>
      <p className="credits__author">
        Code and design by <b>StudioPresent</b>
      </p>
    </div>
  );
}
