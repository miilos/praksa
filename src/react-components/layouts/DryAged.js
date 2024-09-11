import Button from "../utils/Button";

export default function DryAged() {
  return (
    <section className="dry-aged">
      <div className="dry-aged__text" data-aos="zoom-in-right">
        <div className="dry-aged__text-headings">
          <h1 className="heading-1">Dry aged</h1>
          <h2 className="heading-2">Alte Wutz, Dry Aged</h2>
        </div>
        <p className="paragraph">
          Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
          Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim
          veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen
          Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute
          irure dolor in reprehenderit Guten Tag mollit anim Stuttgart. id
          latine indoctum complectitur HugoClub Mate mea meliore denique
          nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.
        </p>

        <div className="btns-container">
          <Button cssStyle={"primary"}>Dry aged</Button>
          <Button cssStyle={"primary"}>Alte wurtz</Button>
        </div>
      </div>

      <div className="dry-aged__images">
        <img
          src="./img/dry-aged-1.png"
          alt="Dry aged 1"
          className="dry-aged__images-img dry-aged__images-img--1"
        />
        <img
          src="./img/dry-aged-2.png"
          alt="Dry aged 2"
          className="dry-aged__images-img dry-aged__images-img--2"
        />
        <img
          src="./img/dry-aged-3.png"
          alt="Dry aged 3"
          className="dry-aged__images-img dry-aged__images-img--3"
        />
        <img
          src="./img/dry-aged-4.png"
          alt="Dry aged 4"
          className="dry-aged__images-img dry-aged__images-img--4"
        />
      </div>
    </section>
  );
}
