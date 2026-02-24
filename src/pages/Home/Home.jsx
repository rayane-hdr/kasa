import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import logements from "../../data/logements.json"; // adapte le chemin si besoin

import homeBanner from "../../assets/home-banner.jpg"; // adapte si ton fichier s'appelle autrement

export default function Home() {
  return (
    <section className="home">
      <div className="home__container">
        <Banner
          image={homeBanner}
          text="Chez vous, partout et ailleurs"
        />

        {/* fond gris à la largeur de la bannière */}
        <div className="home__gridWrap">
          {/* grille un peu moins large grâce au padding du wrap */}
          <div className="home__grid">
            {logements.map((logement) => (
              <Card key={logement.id} logement={logement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}