import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({ logement }) {
  const { id, title, cover } = logement;

  return (
    <Link to={`/logement/${id}`} className="cardLink">
      <article className="card">
        <img className="card__img" src={cover} alt={title} />
        <div className="card__overlay" />
        <h2 className="card__title">{title}</h2>
      </article>
    </Link>
  );
}