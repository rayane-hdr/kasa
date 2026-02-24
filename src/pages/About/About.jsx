import Collapse from "../../components/Collapse/Collapse";
import "./About.scss";
import Banner from "../../components/Banner/Banner";
import aboutImage from "../../assets/about-banner.jpg";

export default function About() {
  const items = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.",
    },
  ];

  return (
    <main className="about">
      <Banner image={aboutImage} dark />
      <section className="about__content">
        {items.map((item) => (
          <Collapse key={item.title} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </section>
    </main>
  );
}