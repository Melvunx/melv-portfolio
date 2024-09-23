import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";

const AnimatedBg = () => {
  const icon = {
    arrow: <FontAwesomeIcon icon={faDownLong} />,
  };
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Index du mot courant
  const [letterIndex, setLetterIndex] = useState(0); // Index de la lettre courante
  const [currentLetters, setCurrentLetters] = useState(""); // Lettres actuelles affichées
  const [isAdding, setIsAdding] = useState(true); // Pour savoir si on ajoute ou enlève des lettres

  useEffect(() => {
    const words = [
      "un développeur full-stack junior",
      "un martiniquais",
      "un passionné",
      "créatif",
      "motivé",
      "en  recherche d'alternance !",
    ];

    const addLetter = () => {
      if (letterIndex < words[currentWordIndex].length) {
        setCurrentLetters(
          (prev) => prev + words[currentWordIndex][letterIndex]
        ); // Ajout de la lettre suivante
        setLetterIndex((prev) => prev + 1); // Passe à l'index de la prochaine lettre
      } else {
        // Si on a fini d'afficher un mot, on attend avant de supprimer les lettres
        setTimeout(() => setIsAdding(false), 2000); // Attendre 2 secondes avant d'effacer
      }
    };

    const removeLetters = () => {
      if (letterIndex > 0) {
        setCurrentLetters((prev) => prev.slice(0, -1)); // Supprime la dernière lettre
        setLetterIndex((prev) => prev - 1); // Reculer dans l'index des lettres
      } else {
        // Une fois toutes les lettres supprimées, on passe au mot suivant
        setIsAdding(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length); // Boucler sur les mots
      }
    };

    const intervalId = setTimeout(() => {
      if (isAdding) {
        addLetter();
      } else {
        removeLetters();
      }
    }, 100); // Intervalle entre chaque lettre

    // Nettoyage de l'effet lorsqu'il change
    return () => clearTimeout(intervalId);
  }, [letterIndex, currentWordIndex, isAdding]);

  return (
    <div className="bg-animation">
      <div id="target">
        <h1>Je suis {currentLetters}</h1>
      </div>
      <a href="#main">{icon.arrow}</a>
    </div>
  );
};

export default AnimatedBg;
