import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Gallery() {
  const [activeDot, setActiveDot] = useState(0);
  const swiperRef = useRef();

  function moveSwiperFwd() {
    swiperRef.current.slideNext();
    setActiveDot((currVal) => {
      return currVal >= 4 ? currVal : currVal + 1;
    });
  }

  function moveSwiperBack() {
    swiperRef.current.slidePrev();
    setActiveDot((currVal) => {
      return currVal === 0 ? currVal : currVal - 1;
    });
  }

  return (
    <section className="gallery">
      <GalleryText />

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <img
            src="../img/portrait.jpg"
            alt="Gallery 1"
            className="swiper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../img/grillkurs-img.jpg"
            alt="Gallery 2"
            className="swiper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../img/spices-img.jpg"
            alt="Gallery 3"
            className="swiper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../img/fleischversand-img.png"
            alt="Gallery 4"
            className="swiper-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../img/dry-aged-1.png"
            alt="Gallery 5"
            className="swiper-image"
          />
        </SwiperSlide>
      </Swiper>

      <GalleryControls
        moveFwd={moveSwiperFwd}
        moveBack={moveSwiperBack}
        activeDot={activeDot}
      />
    </section>
  );
}

function GalleryText() {
  const theme = useContext(ThemeContext);

  return (
    <div className="gallery__text-container">
      <div
        className={`gallery__text-container-text ${
          theme === "light" ? "gallery__text-container-text--light" : ""
        }`}
      >
        <h1 className="heading-1">Heiko Brath Metzgermeister</h1>
        <p className="paragraph">
          Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit
          argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol
          Spritz probatus pertinax.
        </p>
      </div>
    </div>
  );
}

function GalleryControls({ moveFwd, moveBack, activeDot }) {
  return (
    <div className="controls">
      <button
        className="controls__btn controls__btn--dark controls__btn--left"
        onClick={moveBack}
      >
        <span className="material-symbols-outlined"> arrow_back_ios </span>
      </button>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          className={`controls__dot ${
            i === activeDot ? "controls__dot--active" : ""
          }`}
          key={i}
        >
          <div className="controls__dot-inside"></div>
        </div>
      ))}
      <button
        className="controls__btn controls__btn--dark controls__btn--right"
        onClick={moveFwd}
      >
        <span className="material-symbols-outlined"> arrow_forward_ios </span>
      </button>
    </div>
  );
}
