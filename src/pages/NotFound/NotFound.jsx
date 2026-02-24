import { Link } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__content">
        <h1 className="notfound__code">404</h1>
        <p className="notfound__text">Oups! La page que vous demandez n&apos;existe pas.</p>
        <Link className="notfound__link" to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
}