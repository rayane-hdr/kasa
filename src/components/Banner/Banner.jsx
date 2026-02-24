import "./Banner.scss";

export default function Banner({ image, text, dark }) {
  return (
    <div
      className={`banner ${dark ? "banner--dark" : ""}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}