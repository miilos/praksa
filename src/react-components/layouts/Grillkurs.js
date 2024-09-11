import Button from "../utils/Button";

export default function Grillkurs() {
  return (
    <section className="grillkurs">
      <div className="grillkurs__text" data-aos="zoom-in-up">
        <h1 className="heading-1">Buchen Sie den Grillkurs jetzt</h1>
        <ul className="grillkurs__text-list">
          <li className="grillkurstext-list__item">professioneller Lehrer</li>
          <li className="grillkurstext-list__item">ausgezeichneter Metzger</li>
          <li className="grillkurstext-list__item">1 Tag</li>
          <li className="grillkurstext-list__item">
            lernen Sie die Kunst des Grillens
          </li>
        </ul>
        <Button cssStyle={"secondary"}>Grillkurs</Button>
      </div>

      <img
        src="./img/grillkurs-img.jpg"
        alt="Grillkurs img"
        className="grillkurs__img"
      />
    </section>
  );
}
