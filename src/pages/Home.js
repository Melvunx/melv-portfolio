import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnimatedBg from "../components/AnimatedBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const icon = {
  idCard: <FontAwesomeIcon icon={faIdCard} />,
  pdf: <FontAwesomeIcon icon={faFilePdf} />,
  arrow: <FontAwesomeIcon icon={faArrowRightLong} />,
  image: require("../assets/img/header-img.jpg"),
};

const information = [
  {
    objectif: "Recherche d'une alternance en informatique",
    delay: "12 mois",
    rythme: "4 jours en entreprise et 1 jour de formation",
    sectors: ["Industrie", "Banque", "Conseil"],
    localisation: "Île-de-France",
  },
];

const Home = () => {
  const [isIntroHovering, setIsIntroHovering] = useState(false);
  const [isParcoursHovering, setIsParcoursHovering] = useState(false);
  const [isWhyMeHovering, setIsWhyMeHovering] = useState(false);
  const [scrollLevel, setScrollLevel] = useState(0);
  const [scrollLimit, setScrollLimit] = useState(false);

  const handleMouseOver = (setHoverState) => () => setHoverState(true);

  const handleMouseLeave = (setHoverState) => () => setHoverState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 375;
      let currentScroll = window.scrollY;

      //Si le niveau du scroll est supérieur ou égal à 400 et que le niveau du scroll n'est pas null
      //alors on applique la class anim-img
      if (currentScroll >= maxScroll && currentScroll > scrollLevel) {
        setScrollLimit(true);
      }

      setScrollLevel(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollLevel]);

  return (
    <div>
      <Navigation />
      <AnimatedBg />
      <main id="main">
        <h2>
          Bienvenue sur mon portfolio{" "}
          <span className="fa-icon">{icon.idCard}</span>
        </h2>
        <div className="infos">
          <div className="img-container">
            <img
              src={icon.image}
              alt="head img"
              className={scrollLimit ? "anim-img" : ""}
            />
            <div className="btn-container">
              <a href="#contact">
                <button
                  id="btn-contact"
                  className={scrollLimit ? "display-btn1" : ""}
                >
                  <p>Me contacter</p>
                  <span id="down-arrow">{icon.arrow}</span>
                </button>
              </a>
              <a
                href="Melvin-Augustine-CV.pdf"
                download="Cv-Melvin-Augustine.pdf"
              >
                <button
                  id="btn-cv"
                  className={scrollLimit ? "display-btn2" : ""}
                >
                  <p>Télécharger mon CV</p>
                  <span id="cv">{icon.pdf}</span>
                </button>
              </a>
            </div>
          </div>
          <div className="about-me-container">
            <div
              className={`introduction ${
                isIntroHovering ? "glow-in" : "glow-out"
              }`}
              onMouseOver={handleMouseOver(setIsIntroHovering)}
              onMouseLeave={handleMouseLeave(setIsIntroHovering)}
            >
              <h3 className="bubble-title">Qui suis-je ?</h3>
              <p>
                Je m'appelle Melvin, actuellement en formation sur{" "}
                <span
                  className={
                    isIntroHovering
                      ? "open-classrooms-in"
                      : "open-classrooms-out"
                  }
                >
                  OpenClassrooms
                </span>{" "}
                pour obtenir une L3{" "}
                <span
                  className={isIntroHovering ? "diplome-in" : "diplome-out"}
                >
                  Développeur-Concepteur d'Applications
                </span>
                .
              </p>
              {information.map((info) => (
                <ul className="information" key={info.objectif}>
                  <li>
                    <h5>
                      <span
                        className={
                          isIntroHovering ? "anim-info-in" : "anim-info-out"
                        }
                      >
                        Objectif
                      </span>{" "}
                      : {info.objectif}
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <span
                        className={
                          isIntroHovering ? "anim-info-in" : "anim-info-out"
                        }
                      >
                        Durée
                      </span>{" "}
                      : {info.delay}
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <span
                        className={
                          isIntroHovering ? "anim-info-in" : "anim-info-out"
                        }
                      >
                        Rythme
                      </span>{" "}
                      : {info.rythme}
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <span
                        className={
                          isIntroHovering ? "anim-info-in" : "anim-info-out"
                        }
                      >
                        Localisation
                      </span>{" "}
                      : {info.localisation}
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <span
                        className={
                          isIntroHovering ? "anim-info-in" : "anim-info-out"
                        }
                      >
                        Secteurs recherchés
                      </span>{" "}
                      : {info.sectors.sort().join(" / ")}
                    </h5>
                  </li>
                </ul>
              ))}
            </div>
            <div
              className={`parcours ${
                isParcoursHovering ? "glow-in" : "glow-out"
              }`}
              onMouseOver={handleMouseOver(setIsParcoursHovering)}
              onMouseLeave={handleMouseLeave(setIsParcoursHovering)}
            >
              <h3 className="bubble-title">Mon parcours</h3>
              <p>
                Mon parcours a commencé par une formation en tant qu'ingénieur,
                mais c'est au fil de mes études que j'ai découvert une{" "}
                <span
                  className={isParcoursHovering ? "passion-in" : "passion-out"}
                >
                  véritable passion
                </span>{" "}
                pour l'informatique, et plus particulièrement pour le{" "}
                <span
                  className={isParcoursHovering ? "dev-web-in" : "dev-web-out"}
                >
                  développement web
                </span>
                .
              </p>
            </div>
          </div>
          <div className="why-me-container">
            <div
              className={`why-me ${isWhyMeHovering ? "glow-in" : "glow-out"}`}
              onMouseOver={handleMouseOver(setIsWhyMeHovering)}
              onMouseLeave={handleMouseLeave(setIsWhyMeHovering)}
            >
              <h3 className="bubble-title">Pourquoi moi ?</h3>
              <p>
                Je suis un développeur web{" "}
                <span
                  className={isWhyMeHovering ? "curieux-in" : "curieux-out"}
                >
                  curieux
                </span>
                ,{" "}
                <span
                  className={isWhyMeHovering ? "rigoureux-in" : "rigoureux-out"}
                >
                  rigoureux
                </span>{" "}
                et{" "}
                <span
                  className={isWhyMeHovering ? "autonome-in" : "autonome-out"}
                >
                  autonome
                </span>
                . Grâce aux formations suivies sur des plateformes comme Udemy,
                Podia et YouTube, j'ai acquis une solide compréhension des
                pratiques actuelles et des technologies en développement web.
                Aujourd'hui, je souhaite mettre en pratique ces compétences et
                faire mes premiers pas dans le monde professionnel à travers des
                projets concrets. Motivé et doté d'une grande capacité
                d'adaptation, je suis prêt à apprendre continuellement tout en
                apportant une réelle valeur ajoutée à votre équipe.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
