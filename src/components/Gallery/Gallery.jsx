import { useMemo, useState } from "react";
import "./Gallery.scss";

export default function Gallery({ pictures = [], title = "" }) {
  // Sécurité : si pictures est undefined/null, on le transforme en tableau vide.
  const safePictures = useMemo(() => (Array.isArray(pictures) ? pictures : []), [pictures]);

  // Index de l’image affichée
  const [index, setIndex] = useState(0);

  // Cas : 0 image → on affiche rien (ça évite les bugs)
  if (safePictures.length === 0) {
    return null;
  }

  const hasMany = safePictures.length > 1;

  const goPrev = () => {
    // Si on est à 0 → on revient à la dernière image
    setIndex((prev) => (prev === 0 ? safePictures.length - 1 : prev - 1));
  };

  const goNext = () => {
    // Si on est à la dernière → on revient à 0
    setIndex((prev) => (prev === safePictures.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="gallery" aria-label="Galerie de photos">
      <img
        className="gallery__image"
        src={safePictures[index]}
        alt={`${title} - photo ${index + 1}`}
      />

      {hasMany && (
        <>
          <button
            type="button"
            className="gallery__btn gallery__btn--prev"
            onClick={goPrev}
            aria-label="Image précédente"
          >
            ❮
          </button>

          <button
            type="button"
            className="gallery__btn gallery__btn--next"
            onClick={goNext}
            aria-label="Image suivante"
          >
            ❯
          </button>

          <p className="gallery__counter">
            {index + 1}/{safePictures.length}
          </p>
        </>
      )}
    </section>
  );
}