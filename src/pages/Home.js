import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnimatedBg from "../components/AnimatedBg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";

const icon = {
  idCard: <FontAwesomeIcon icon={faIdCard} />,
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
          <div className="info-content-top">
            <div className="img-container">
              <img src="./img/header-img.jpg" alt="head img" />
            </div>
            <div className="about-me-container">
              <div className="introduction">
                <h3 className="bubble-title">Qui suis-je ?</h3>
                <p>
                  Je m'appelle Melvin, actuellement en formation sur
                  <span id="open-classrooms">OpenClassrooms</span> pour obtenir
                  une{" "}
                  <span id="diplome">
                    L3 Développeur-Concepteur d'Applications
                  </span>{" "}
                  .
                </p>
                {information.map((info) => {
                  return (
                    <ul className="information" key={info.objectif}>
                      <li>
                        <h5>
                          <span>Objectif </span> : {info.objectif}
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <span>Durée </span> : {info.delay}
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <span>Rythme </span> : {info.rythme}
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <span>Localisation </span> : {info.localisation}
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <span>Secteurs recherchés </span> :{" "}
                          {info.sectors.sort().join(" / ")}
                        </h5>
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="parcours">
                <h3 className="bubble-title">Mon parcours</h3>
                <p>
                  Mon parcours a commencé par une formation en tant
                  qu'ingénieur, mais c'est au fil de mes études que j'ai
                  découvert une <span id="passion">véritable passion</span> pour
                  l'informatique, et plus particulièrement pour le{" "}
                  <span id="dev-web">développement web</span> .
                </p>
              </div>
            </div>
          </div>
          <div className="intro-card">
            <h3 className="bubble-title">Pourquoi moi ?</h3>
            <p>
              Je suis un développeur web <span id="curieux">curieux</span> ,{" "}
              <span id="rigoureux">rigoureux</span> et{" "}
              <span id="autonome">autonome</span> . Grâce aux formations suivies
              sur des plateformes comme Udemy, Podia et YouTube, j'ai acquis une
              solide compréhension des pratiques actuelles et des technologies
              en développement web. Aujourd'hui, je souhaite mettre en pratique
              ces compétences et faire mes premiers pas dans le monde
              professionnel à travers des projets concrets. Motivé et doté d'une
              grande capacité d'adaptation, je suis prêt à apprendre
              continuellement tout en apportant une réelle valeur ajoutée à
              votre équipe.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
