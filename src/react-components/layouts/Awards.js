import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Button from "../utils/Button";
import LogoLine from "../utils/LogoLine";
import ReviewCard from "../utils/ReviewCard";

export default function Awards() {
  return (
    <section className="awards">
      <div className="awards__content">
        <div className="genussnetz">
          <img
            src="./img/genussnetz-logo.png"
            alt="Genussnetz logo"
            className="genussnetz__logo"
          />

          <div className="genussnetz__text">
            <h2 className="heading-2">
              Metzgerei Brath ist Mitglied im Genussnetzwerk
            </h2>
            <Button cssStyle={"primary"}>Gehen zu site</Button>
          </div>
        </div>

        <LogoLine />

        <div className="awards-images">
          <h1 className="heading-1">Auszeichnungen</h1>
          <div className="award-img__container" data-aos="zoom-in">
            <img
              src="./img/award-1.png"
              alt="Award"
              className="award-img__image"
            />
            <p className="paragraph">Tollit argumentum genau Saepe lobortis</p>
          </div>
          <div
            className="award-img__container"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src="./img/award-2.png"
              alt="Award"
              className="award-img__image"
            />
            <p className="paragraph">Schneewittchen denique</p>
          </div>
          <div
            className="award-img__container"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="./img/award-3.png"
              alt="Award"
              className="award-img__image"
            />
            <p className="paragraph">Grimms Märchen expetenda</p>
          </div>
          <div
            className="award-img__container"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src="./img/award-4.png"
              alt="Award"
              className="award-img__image"
            />
            <p className="paragraph">Mettwurst mei ullum gloriatur.</p>
          </div>
        </div>

        <LogoLine />

        <div className="reviews">
          <div className="reviews__heading">
            <p className="reviews__p">Empfehlungs</p>
            <h1 className="heading-1">Was die Leute über uns sagen</h1>
          </div>

          <div
            className="reviews__review-cards"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {/*  <Swiper
              className="reviews__swiper"
              spaceBetween={10}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => {}}
            >
              <SwiperSlide>
                <ReviewCard
                  isMain={false}
                  text={
                    "Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart."
                  }
                  author={"Maria Kartofeln"}
                />
              </SwiperSlide>

              <SwiperSlide>
                <ReviewCard
                  isMain={true}
                  text={
                    "Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna Luftballons Ut Turnbeutel nostrud exercitation ullamco ."
                  }
                  author={
                    <>
                      <b>Halling Tobias</b> <br /> Koch
                    </>
                  }
                />
              </SwiperSlide>

              <SwiperSlide>
                <ReviewCard
                  isMain={false}
                  text={
                    "Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior."
                  }
                  author={"Rene Weinstein"}
                />
              </SwiperSlide>
            </Swiper> */}

            <ReviewCard
              isMain={false}
              text={
                "Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart."
              }
              author={"Maria Kartofeln"}
            />

            <ReviewCard
              isMain={true}
              text={
                "Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna Luftballons Ut Turnbeutel nostrud exercitation ullamco ."
              }
              author={
                <>
                  <b>Halling Tobias</b> <br /> Koch
                </>
              }
            />

            <ReviewCard
              isMain={false}
              text={
                "Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior."
              }
              author={"Rene Weinstein"}
            />
          </div>

          <Button cssStyle={"primary"}>Alle Berichte</Button>
        </div>
      </div>
    </section>
  );
}
