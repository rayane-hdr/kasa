import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutImage from "../../assets/about-banner.jpg";
import items from "../../data/about.json";

import "./About.scss";

export default function About() {
  return (
    <div className="about">
      <Banner image={aboutImage} dark />
      
      <section className="about__content">
        {items.map((item) => (
          <Collapse key={item.title} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </section>
    </div>
  );
}