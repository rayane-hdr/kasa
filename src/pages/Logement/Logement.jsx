import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import Gallery from "../../components/Gallery/Gallery";
import Collapse from "../../components/Collapse/Collapse";
import "./Logement.scss";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  if (!logement) return <Navigate to="/404" />;

  const [firstName, lastName] = logement.host.name.split(" ");

  return (
    <main className="logement">
      <Gallery pictures={logement.pictures} title={logement.title} />

      {/* HEADER : gauche (titre/lieu/tags) | droite (host + rating) */}
      <div className="logement__header">
        <div className="logement__left">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement__right">
          <div className="logement__host">
            <p className="logement__hostName">
              {firstName}
              <br />
              {lastName}
            </p>

            <img
              className="logement__hostPicture"
              src={logement.host.picture}
              alt={`Photo de ${logement.host.name}`}
            />
          </div>

          {/* Rating */}
          <div className="logement__rating" aria-label={`Note ${logement.rating} sur 5`}>
            {Array.from({ length: 5 }).map((_, i) => {
              const value = i + 1;
              const isActive = value <= Number(logement.rating);
              return (
                <span
                  key={value}
                  className={`star ${isActive ? "star--active" : ""}`}
                  aria-hidden="true"
                >
                  ★
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* COLLAPSES */}
      <div className="logement__collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  );
}