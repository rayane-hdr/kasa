import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Kasa" className="header__logo" />

        <nav className="header__nav">
          <NavLink to="/" className="header__link">
            Accueil
          </NavLink>
          <NavLink to="/about" className="header__link">
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}