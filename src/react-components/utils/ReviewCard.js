import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ReviewCard({ isMain, text, author }) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`reviews__review-cards-card reviews__review-cards-card${
        isMain ? "--main" : ""
      }`}
    >
      {isMain && (
        <div className="review-card-icons">
          <img
            src="./img/review-grill-icon.png"
            alt="Grill icon"
            className="review-card-icons__img"
          />
          <img
            src="./img/review-stars.png"
            alt="Stars"
            className="review-card-icons__img"
          />
        </div>
      )}

      <p>{text}</p>
      <p>{author}</p>

      {isMain && (
        <>
          <button
            className={`controls__btn controls__btn--${theme} controls__btn--left`}
          >
            <span className="material-symbols-outlined"> arrow_back_ios </span>
          </button>
          <button
            className={`controls__btn controls__btn--${theme} controls__btn--right`}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </>
      )}
    </div>
  );
}
