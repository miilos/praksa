import Button from "../utils/Button";
import LogoLine from "../utils/LogoLine";

export default function Handwerk() {
  return (
    <section className="handwerk">
      <div className="handwerk__headings">
        <h1 className="heading-1">Das Handwerk</h1>
        <h2 className="heading-2">alles über unsere Hausgemachte Produkte</h2>
      </div>
      <p className="paragraph">
        Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart
        ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam,
        Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie
        deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure
        dolor in Guten Tag mollit anim Stuttgart. id latine indoctum
        complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm
        expetenda nam an, his ei Reise euismod assentior
      </p>
      <Button cssStyle={"primary"}>Das Handwerk</Button>

      <LogoLine />

      <div className="handwerk__images">
        <img
          src="./img/handwerk-img-1.png"
          alt="Handwerk 1"
          className="handwerk__images-img"
          data-aos="fade-up"
        />
        <img
          src="./img/handwerk-img-2.png"
          alt="Handwerk 2"
          className="handwerk__images-img"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <img
          src="./img/handwerk-img-3.png"
          alt="Handwerk 3"
          className="handwerk__images-img"
          data-aos="fade-up"
          data-aos-delay="400"
        />
        <img
          src="./img/handwerk-img-4.png"
          alt="Handwerk 4"
          className="handwerk__images-img"
          data-aos="fade-up"
          data-aos-delay="600"
        />
      </div>
    </section>
  );
}
