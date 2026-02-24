import { useState } from "react";
import "./Collapse.scss";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header">
        <h3 className="collapse__title">{title}</h3>

        {/* Seule la flèche est cliquable */}
        <button
          type="button"
          className="collapse__toggle"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fermer" : "Ouvrir"}
        >
          <svg
            className={`collapse__icon ${isOpen ? "collapse__icon--open" : ""}`}
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Chevron (comme Figma) */}
            <path
              d="M2 2L12 12L22 2"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={`collapse__content ${isOpen ? "collapse__content--open" : ""}`}>
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  );
}