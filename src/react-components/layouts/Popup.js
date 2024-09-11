import Button from "../utils/Button";

export default function Popup({ onCloseClick }) {
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__close-btn" onClick={onCloseClick}>
          <span className="material-symbols-outlined close-icon">close</span>
        </div>
        <h1 className="heading-1">Popup</h1>
        <p className="paragraph">
          Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod
          tempor Stuttgart ut labore et dolore magna Luftballons Ut Turnbeutel
          nostrud exercitation ullamco .
        </p>
        <Button cssStyle={"secondary"} onClick={onCloseClick}>
          Popup btn
        </Button>
      </div>
    </div>
  );
}
